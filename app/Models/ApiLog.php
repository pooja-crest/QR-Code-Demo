<?php

namespace App\Models;

use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Model;
use DB;

class ApiLog extends Model
{
    use Filterable;
    protected $fillable = [
        'order_id', 'api_type', 'request_type', 'request_url','request_data', 'response_data','created_at', 'updated_at'
    ];
    protected $table = 'api_logs';

    public static function syncLogs($order_id =0, $api_type, $request_type, $request_url, $request_data, $response_data = array(), $logId = 0) 
    {
        if(is_array($request_data)) {
            $request_data = json_encode($request_data);
        }
        if ($logId == 0) {
            $data = array(
                'order_id' => $order_id ? $order_id : 0,
                'api_type' => $api_type,
                'request_type' => $request_type,
                'request_data' => !empty($request_data) ? $request_data : '',
                'request_url' => $request_url,
                'created_at' => date('Y-m-d H:i:s')
            );
            $id = DB::table('api_logs')->insertGetId($data);
            return $id;
        } else {
            if (is_array($response_data)) {
                $response_data = json_encode($response_data, true);
            }
            $data = array(
                'response_data' => !empty($response_data) ? $response_data : '',
                'updated_at' => date('Y-m-d H:i:s'),
            );
            ApiLog::where('id', $logId)->update($data);
        }
    }
}