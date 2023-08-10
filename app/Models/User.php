<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Tymon\JWTAuth\Contracts\JWTSubject;
use EloquentFilter\Filterable;


class User extends Authenticatable implements JWTSubject
{
    use Notifiable, SoftDeletes, Filterable;

    protected $table = 'users';
    const ROLE_ADMIN = 'admin';
    const ROLE_PURCHASER = 'purchaser';
    const ROLE_VIEWER = 'viewer';
    const ROLE_DISPLAY = 'display';
    const ROLE_ORDER_TRACKING = 'order_tracking';
    const ROLE_USER = 'user';
    const ROLE_CUSTOMER_SERVICE = 'customer_service';

    const STATUS_ACTIVE = 'active';
    const STATUS_INACTIVE = 'inactive';

    const SEARCH_STR_REGEX = '[^A-Za-z0-9]';
    const ALLOWED_EMAIL_CHARS = ['-'];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'code', 'name', 'email', 'contact_person', 'contact_number', 'password', 'role', 'status', 'needs_auto_refresh'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    protected $casts = [
        'id' => 'string'
    ];

    protected $dates = ['deleted_at'];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public static function getRoleNames($role = null)
    {
        return $role;
        $role_names = [
            self::ROLE_USER => 'User',
            self::ROLE_ADMIN => 'Admin',
            self::ROLE_CUSTOMER_SERVICE => 'Customer Service'
        ];
        return (empty($role)) ? $role_names : $role_names[$role];
    }

    public function logs()
    {
        return $this->hasMany('App\Models\UserLog');
    }

    public function parent()
    {
        return $this->belongsTo('App\Models\User');
    }
}
