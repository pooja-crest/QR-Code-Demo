<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;
use App\Models\ApiLog;

class UpsService
{
    protected $access_key;
    protected $base_url;

    public function __construct($sslVerify = true) {
        $this->access_key = env('UPS_ACCESS_LICENSE_NUMBER');
        $this->base_url = env('UPS_API_URL');
    }
    
    public function makeRequest($http_method, $endpoint, $headers = array(), $body_params='', $data = array()) {
    	$ch = curl_init($this->base_url.$endpoint);                                    
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $http_method);                        
        curl_setopt($ch, CURLOPT_POSTFIELDS, $body_params);                   
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        $error_msg = curl_error($ch);
        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    }

    public function getTrackingStatus($tracking_number,$order_id) {
        try {
            $endpoint = '/track/v1/details/'.$tracking_number;
            $headers = array(
                "Content-Type: application/json",
                "AccessLicenseNumber: $this->access_key",
            );
            $log_id = ApiLog::syncLogs($order_id, 'ups', 'tracking', $this->base_url.$endpoint, '');
            $response = $this->makeRequest('GET', $endpoint, $headers);
            ApiLog::syncLogs($order_id, 'ups', 'tracking', $this->base_url.$endpoint, '',$response,$log_id);
            if(isset($response) && !empty($response)) {
                $result = json_decode($response, TRUE);
            }
            return $result;
        } catch (\Exception $ex) {
            return generate_json_response($ex, $ex->getMessage(), false, 400);
        }
         
    }
}