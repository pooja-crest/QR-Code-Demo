<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;
use App\Models\ApiLog;

class FedExService
{
    protected $client_id;
    protected $client_secret;
    protected $grant_type;
    protected $token;
    protected $base_url;

    public function __construct($sslVerify = true) {
        $this->client_id = env('FEDEX_CLIENT_ID');
        $this->client_secret = env('FEDEX_CLIENT_SECRET');
        $this->grant_type = env('FEDEX_GRANT_TYPE');
        $this->base_url = env('FEDEX_API_URL');
        $this->token = $this->generateToken();
    }

    public function generateToken() {
		try{
			$endpoint = '/oauth/token';
			$body_params = 'grant_type='.$this->grant_type.'&client_id='.$this->client_id.'&client_secret='.$this->client_secret;
			$headers = array(
				"Content-Type: application/x-www-form-urlencoded"
			);
			$log_id = ApiLog::syncLogs(0, 'fedex', 'authorization', $this->base_url.$endpoint, $body_params);
			$response = $this->makeRequest('POST', $endpoint, $headers, $body_params);
			ApiLog::syncLogs(0, 'fedex', 'authorization', $this->base_url.$endpoint, $body_params,$response,$log_id);
			$access_token = '';
			if(isset($response) && !empty($response)) {
				$result = json_decode($response, TRUE);
				$access_token = isset($result['access_token']) && !empty($result['access_token']) ? $result['access_token']: '';
			}
			return $access_token; 
		}
		catch (\Exception $ex) {
			return generate_json_response($ex, $ex->getMessage(), false, 400);
		}
             
    }

    public function makeRequest($http_method, $endpoint, $headers = array(), $body_params='', $data = array()) {
    	$ch = curl_init($this->base_url.$endpoint);                                    
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $http_method);                        
        curl_setopt($ch, CURLOPT_POSTFIELDS, $body_params);                   
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        $error_msg = curl_error($ch);
        $result = curl_exec($ch);
        // $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        return $result;
    }

    public function getTrackingStatus($tracking_number,$order_id) {
		try {
			$endpoint = '/track/v1/trackingnumbers';
			$headers = array(
				"Content-Type: application/json",
				"Authorization: Bearer $this->token",
			);
			$body_params = array(
				'trackingInfo' => array(
					[
						'trackingNumberInfo'=> [
							'trackingNumber'=> $tracking_number
						]
					]
				),
				'includeDetailedScans' =>true
			);
			$log_id = ApiLog::syncLogs($order_id, 'fedex', 'tracking', $this->base_url.$endpoint, $body_params);

			$response = $this->makeRequest('POST', $endpoint, $headers, json_encode($body_params));		
			ApiLog::syncLogs($order_id, 'fedex', 'tracking', $this->base_url.$endpoint, $body_params,$response,$log_id);

			if(isset($response) && !empty($response)) {
				$result = json_decode($response, TRUE);
				$trackingStatus = $result['output']['completeTrackResults'][0]['trackResults'][0];
			}
			return $trackingStatus;
		}
		catch (\Exception $ex) {
			return generate_json_response($ex, $ex->getMessage(), false, 400);
		}
    }    
}