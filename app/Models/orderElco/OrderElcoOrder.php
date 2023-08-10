<?php

namespace App\Models\orderElco;

use Illuminate\Database\Eloquent\Model;

class OrderElcoOrder extends Model
{
    protected $connection = 'elco_orders';
    protected $table = 'orders';
    protected $primaryKey = 'id';

    const STATUS_COMPLETE = 'ship_complete';
    const STATUS_INCOMPLETE = 'ship_incomplete';
    const STATUS_NOT_SHIP = 'not_ship';

    const SHIPPED_VIA_UPS = 'ups';
    const SHIPPED_VIA_OTHERS = 'others';
}
