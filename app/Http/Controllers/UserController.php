<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use \Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Facades\Excel;

class UserController extends Controller
{
    protected $_limit = 50, $validationFlag = false, $validationMessages = [];

    public function index(Request $request)
    {
        $filters = $request->all();
        if(isset($filters['search']) && !empty($filters['search'])) {
            $keyword = $filters['search'];
            $filters['search'] = generate_search_string($keyword);

            // Old queries
            /*$users = DB::select("SELECT name FROM users WHERE regex_replace ('[^A-Za-z0-9]', '', name) COLLATE utf8mb4_unicode_ci LIKE '%".$filters['search']."%'");
            if(empty($users)) {
                $users = DB::select("SELECT code AS name FROM users WHERE regex_replace ('[^A-Za-z0-9]', '', code AS name) COLLATE utf8mb4_unicode_ci LIKE '%".$filters['search']."%'");
            }
            if(isset($users) && !empty($users)) {
                $filters['search'] = $users[0]->code;
            }*/
        }

        $users = User::select('users.*')->filter($filters)->orderBy('id')->paginate($this->_limit);
        return $this->generateJSONResponse($users, 'Successfully get users data');
    }

    public function store(Request $request)
    {
        $inputs = $request->all();
        try {
            $this->validationFlag = false;
            $this->_validateUserData($inputs);
            if($this->validationFlag) {
                return $this->generateJSONResponse([], $this->validationMessages, 200, false);
            }
            $record = [
                'code' => strtoupper($inputs['code']),
                'name' => $inputs['name'],
                'email' => $inputs['email'],
                'contact_person' => $inputs['contact_person'],
                'contact_number' => $inputs['contact_number'],
                'password' => bcrypt($inputs['password']),
                'role' => $inputs['role']
            ];
            $user = User::create($record);
        } catch (QueryException $exception) {
            return $this->generateJSONResponse($exception, 'User code or email already exists.', 422, false);
        } catch (\Exception $exception) {
            return $this->generateJSONResponse([], $exception->getMessage(), 500, false);
        }
        return $this->generateJSONResponse($user, 'User created successfully.');
    }

    public function update(Request $request, $id)
    {
        $inputs = $request->all();
        $this->validationFlag = false;
        $this->_validateUserData($inputs, $id);
        if($this->validationFlag) {
            return $this->generateJSONResponse([], $this->validationMessages, 200, false);
        }
        try {
            $record = [
                'code' => strtoupper($inputs['code']),
                'name' => $inputs['name'],
                'email' => $inputs['email'],
                'contact_person' => $inputs['contact_person'],
                'contact_number' => $inputs['contact_number'],
                'role' => $inputs['role']
            ];
            if (!empty($inputs['password'])) {
                $record['password'] = bcrypt($inputs['password']);
            }

            User::whereId($id)->update($record);

            $user = User::find($id);

        } catch (QueryException $exception) {
            return $this->generateJSONResponse($exception, 'User code or email already exists.', 422, false);
        } catch (\Exception $exception) {
            return $this->generateJSONResponse([], $exception->getMessage(), 500, false);
        }
        return $this->generateJSONResponse($user, 'User updated successfully!');
    }

    public function destroy($id)
    {
        try {
            $user = User::where('id', $id)->first();
            if (empty($user)) throw new Exception('User not found');
            if ($user->status == User::STATUS_ACTIVE) $user->delete();
            else $user->forceDelete();
            return $this->generateJSONResponse(true, 'Successfully delete user');
        } catch (QueryException $exception) {
            return $this->generateJSONResponse($exception, 'Failed to delete user', 500, false);
        }
    }

    /**
     * This function is used to validate user data.
     * @param $inputArr
     * @param null $id
     * @return bool
     */
    public function _validateUserData($inputArr, $id = null): bool
    {
        $validationArr =  [];
        $validationArr['code'] = (!empty($id)) ? 'unique:users,code,' . $id : "unique:users,code";
        if(!empty($inputArr['email']) && !in_array($inputArr['email'], User::ALLOWED_EMAIL_CHARS)) {
            $validationArr['email'] = (!empty($id)) ? 'unique:users,email,' . $id : "unique:users,email";
        }
        $validator = Validator::make($inputArr, $validationArr);
        if ($validator->fails()) {
            $this->validationFlag = true;
            $this->validationMessages = implode(",",$validator->messages()->all());
        }
        return true;
    }
}
