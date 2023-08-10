<?php

namespace App\models\salesElco;

use Illuminate\Database\Eloquent\Model;

class SalesElcoUser extends Model
{
    protected $connection = 'saleselco_mysql';
    protected $table = 'users';
}
