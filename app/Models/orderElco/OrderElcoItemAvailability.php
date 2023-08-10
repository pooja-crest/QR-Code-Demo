<?php

namespace App\Models\orderElco;

use Illuminate\Database\Eloquent\Model;

class OrderElcoItemAvailability extends Model
{
    protected $connection = 'elco_orders';
    protected $table = 'item_availabilities';
    protected $primaryKey = 'id';

    protected $fillable = [
        'item_id', 'backordered', 'quantity_shipped', 'unconfirmed', 'confirmed'
    ];
}