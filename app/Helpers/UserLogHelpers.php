<?php

use App\Models\UserLog;

if (!function_exists('add_user_log')) {
    function add_user_log($user_id, $description = '', $type = 'none', $status = 'none')
    {
        $record = [
            'user_id' => $user_id,
            'description' => $description,
            'type' => $type,
            'status' => $status
        ];
        return UserLog::create($record);
    }
}
