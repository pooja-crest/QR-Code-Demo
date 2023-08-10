<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmail;
use App\Models\Token;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserLog;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Exception;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Str;

class AuthController extends Controller
{
	public function login(Request $request)
	{
		$credentials = [
			'code' => strtoupper($request->code),
			'password' => $request->password
		];
		$user = User::whereCode($credentials['code'])->first();
		
		$ttl = env('JWT_TTL');
		if ($request->remember_me == true) {
			$ttl = env('JWT_REMEMBER_TTL');
		}
		if (empty($user) || $user->status == User::STATUS_INACTIVE || !$token = auth()->setTTL($ttl)->attempt($credentials)) {
			return generate_json_response(null, 'wrong code or password', false, 401);
		}
		$user->role_name = User::getRoleNames($user->role);

		$data = $user;
		$data['token'] = $this->_getTokenData($token,$ttl);
		return generate_json_response($data, 'Successfully signed in');
	}

	public function register(Request $request)
	{
		try {
			$request->validate([
				'code' => ['required'],
				'phone' => ['required'],
				'distributor_name' => ['required'],
				'customer_id' => ['required'],
				'customer_name' => ['required'],
				'street' => ['required'],
				'city' => ['required'],
				'state' => ['required'],
				'zip' => ['required']
			]);
			$existed_user = User::withTrashed()->where('code', $request->code)->first();
			if (!empty($existed_user) && empty($existed_user->deleted_at)) throw new Exception("User with email '{$request->code}' already exist");
			$user_record = [
				'code' => $request->code,
				'name' => $request->distributor_name,
				'password' => bcrypt('pass-' . $request->customer_id),
				'allow_edit_password' => true,
				'role' => User::ROLE_VIEWER,
				'status' => User::STATUS_INACTIVE,
				'contact_person' => $request->customer_name,
				'register_details' => json_encode($request->all())
			];
			if (empty($existed_user->deleted_at)) $user = User::create($user_record);
			else {
				$existed_user->restore();
				User::where('code', $request->code)->update($user_record);
				$user = $existed_user;
			}
			SendEmail::dispatch(['type' => 'user_registration', 'data' => $request->all()])->onQueue('send-emails');
			return generate_json_response($user, "Successfully register");
		} catch (\Exception $ex) {
			return generate_json_response($ex, $ex->getMessage(), false, 400);
		}
	}

	public function inactiveUserApproval($id, Request $request)
	{
		try {
			$user = User::where('id', $id)->first();
			if (empty($user)) throw new Exception("User not found");
			$approval = $request->approval;
			if (!$approval) {
				$user->forceDelete();
				return generate_json_response(true, "Successfully decline user request");
			}
			$registration_details = json_decode($user->register_details, true);
			find_or_create_customer($registration_details['customer_id'], $registration_details['customer_name']);
			$user->customer_id = $registration_details['customer_id'];
			$user->phone = $registration_details['phone'];
			$user->status = User::STATUS_ACTIVE;
			$user->save();
			SendEmail::dispatch(['type' => 'user_registration_approval', 'data' => $user->toArray()])->onQueue('send-emails');
			return generate_json_response(true, "Successfully approve user");
		} catch (\Exception $ex) {
			return generate_json_response($ex, $ex->getMessage(), false, 400);
		}
	}

	public function logout(Request $request)
	{
		$user = auth()->user();
		// JWTAuth::invalidate($request->token);
		auth()->logout();
		return generate_json_response(null, 'Successfully logged out');
	}

	public function forgotPassword(Request $request)
	{
		try {
			$user = User::whereCode($request->code)->firstOrFail();
			$is_email_valid = filter_var($user->code, FILTER_VALIDATE_EMAIL);
			if (!$is_email_valid) throw new Exception("User's email is not valid");

			$token = Token::create([
				'email' => $user->code,
				'mode' => Token::MODE_RESET_PASSWORD,
				'token' => Str::random(60),
				'status' => Token::STATUS_ACTIVE
			]);

			$link = config('app.url') . "/#/callback?token=" . $token->token . "&mode=" . $token->mode;
			SendEmail::dispatch(['type' => 'forgot_password', 'user' => $user, 'data' => ['link' => $link, 'token' => $token]])->onQueue('send-emails');
			return generate_json_response(true, 'Successfully create reset link password');
		} catch (Exception $exception) {
			$message = $exception->getMessage() == "User's email is not valid" ? $exception->getMessage() : 'Failed to create a reset password link';
			return generate_json_response($exception, $message, false, 400);
		}
	}

	public function resetPassword(Request $request)
	{
		try {
			$reset_password_token = Token::whereToken($request->token)->whereMode(Token::MODE_RESET_PASSWORD)->whereStatus(Token::STATUS_ACTIVE)->firstOrFail();
			$reset_password_token->accessed_at = date('Y-m-d H:i:s');
			$reset_password_token->status = Token::STATUS_INACTIVE;
			$reset_password_token->save();

			if (!User::whereCode($reset_password_token->email)->update(['password' => bcrypt($request->password)])) {
				return generate_json_response(['error' => 'Failed to change password'], 'Failed to update password, please try again later', false);
			}
			$credentials = [
				'code' => strtoupper($reset_password_token->email),
				'password' => $request->password
			];
			$user = User::whereCode($credentials['code'])->first();
			if (empty($user) || $user->status == User::STATUS_INACTIVE || !$token = auth()->attempt($credentials)) {
				return generate_json_response(['error' => 'Failed to sign in'], 'Token is invalid or already use, please create a new reset password token', false, 401);
			}
			$user->role_name = User::getRoleNames($user->role);

			$data = $user;
			$data['token'] = $this->_getTokenData($token);

			return generate_json_response($user, 'Successfully create new password');
		} catch (Exception $exception) {
			return generate_json_response($exception->getMessage(), 'Token is invalid or already use, please create a new reset password token', false);
		}
	}

	protected function _getTokenData($token,$ttl='')
	{
		$ttl = isset($ttl) && !empty($ttl) ? $ttl : auth()->factory()->getTTL();
		$data = [
			'access_token' => $token,
			'token_type'   => 'bearer',
			'expires_in'   => $ttl
		];
		return $data;
	}
}
