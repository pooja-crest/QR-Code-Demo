<?php

namespace App\models\salesElco;

use Illuminate\Database\Eloquent\Model;

class SalesElcoCustomer extends Model
{
    protected $connection = 'saleselco_mysql';
    protected $table = 'customers';
}
