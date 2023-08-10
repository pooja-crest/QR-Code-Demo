<?php

namespace App\Http\Controllers;

use App\Models\UserLog;
use Illuminate\Http\Request;

class UserLogController extends Controller
{
    protected $_limit = 50;
    public function getByUserId(Request $request)
    {
        $logs = UserLog::with('user')
            ->where('user_id', $request->user_id)
            // ->whereIn('type', [UserLog::TYPE_AUTH_LOGIN, UserLog::TYPE_AUTH_LOGOUT])
            ->orderBy('id', 'desc')
            ->skip(0)->take($this->_limit)
            ->get();

        return $this->generateJSONResponse($logs, 'Successfully get users data');
    }
}
