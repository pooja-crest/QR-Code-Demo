<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserLog extends Model
{
    const TYPE_NONE = 'none';
    const TYPE_AUTH_LOGIN = 'auth_login';
    const TYPE_AUTH_LOGOUT = 'auth_logout';
    const TYPE_ACTIVITY = 'activity';

    const STATUS_NONE = 'none';
    const STATUS_SUCCESS = 'success';
    const STATUS_FAILED = 'failed';


    protected $fillable = [
        'user_id', 'description', 'type', 'status'
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
