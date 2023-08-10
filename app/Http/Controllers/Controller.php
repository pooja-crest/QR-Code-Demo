<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public static function generateJSONResponse($data = null, $message = 'Response message', $http_status = 200, $success = true)
    {
        $response = [
            'success' => $success,
            'http_status' => $http_status,
            'message' => $message,
            'data' => $data
        ];
        return response()->json($response, $http_status);
    }
}
