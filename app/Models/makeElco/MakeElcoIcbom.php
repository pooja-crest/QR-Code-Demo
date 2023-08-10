<?php

namespace App\Models\makeElco;

use Illuminate\Database\Eloquent\Model;

class MakeElcoIcbom extends Model
{
    protected $connection = 'elco_makes';
    protected $table = 'icboms';

    protected $fillable = [
        'master_item', 'component_item', 'quantity', 'unit', 'quantity_needed', 'dont_have_material_orders'
    ];

    public function item()
    {
        return $this->setConnection('mysql')->hasOne('App\Models\ItemVendor', 'item_id', 'master_item');
    }

    // public function components()
    // {
    //     return $this->hasMany('App\Models\makeElco\MakeElcoIcbom', 'master_item', 'master_item');
    // }

    public function master_items()
    {
        return $this->hasMany('App\Models\makeElco\MakeElcoIcbom', 'component_item', 'component_item');
    }

    public function component_item_price()
    {
        return $this->setConnection('mysql')->hasOne('App\Models\ItemVendor', 'item_id', 'component_item');
    }

    public function master_item_availabilities()
    {
        return $this->setConnection('elco_orders')->hasMany('App\Models\orderElco\OrderElcoItemAvailability', 'item_id', 'master_item');
    }
    
    public function component_item_availabilities()
    {
        return $this->setConnection('elco_orders')->hasMany('App\Models\orderElco\OrderElcoItemAvailability', 'item_id', 'component_item');
    }
}
