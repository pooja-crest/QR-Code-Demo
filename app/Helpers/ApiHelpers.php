<?php

use Carbon\Carbon;

if (!function_exists('generate_json_response')) {
    function generate_json_response($data = null, $message = 'Response message', $success = true, $http_status = 200)
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

if (!function_exists('generate_search_string')) {
    function generate_search_string($str) {
        $str = preg_replace('/[^A-Za-z0-9 -]/', '', $str);
        $str = preg_replace('/  */', '-', $str);
        $str = preg_replace('/\\s+/', '-', $str);
        $str= str_replace('-','',$str);
        return $str;
    }
}

if (!function_exists('change_date_format')) {
    function change_date_format($date,$format = 'm/d/y') {
        return Carbon::parse($date)->format($format);
   }
}

if (!function_exists('upload_image_in_local')) {
    function upload_image_in_local($image, $folder, $filename = "")
    {
        if(empty($filename)){
            $extension = $image->getClientOriginalExtension();
            $createfilename = $folder . '_' . time() . rand(0000, 9999);
            $filename = $createfilename . '.' . $extension;
        }
        $image->move(public_path("images").'/'.$folder, $filename);
        return $filename;
    }
}
