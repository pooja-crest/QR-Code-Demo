<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Exception;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;
use App\Http\Controllers\Controller;
use App\Models\User;

class JwtMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            $user = User::find(JWTAuth::parseToken()->authenticate()->id);
        } catch (Exception $e) {
            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
                return Controller::generateJSONResponse(['token' => false], 'Token is Invalid, please sign in again', 500, false);
            } else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
                return Controller::generateJSONResponse(['token' => false], 'Token is Expired, please sign in again', 500, false);
            } else {
                return Controller::generateJSONResponse(['token' => false], 'Authorization Token not found, please sign in again', 404, false);
            }
        }
        return $next($request);
    }
}
