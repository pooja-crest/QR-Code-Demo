<?php

namespace App\Models\orderElco;

use Illuminate\Database\Eloquent\Model;

class OrderElcoItem extends Model
{
    protected $connection = 'elco_orders';
    protected $table = 'items';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'description', 'url', 'quantity', 'quantity_backordered', 'show', 'item_replacement', 'category_id'
    ];

    public function item_vendor()
    {
        return $this->setConnection('mysql')->hasOne('App\Models\ItemVendor', 'item_id', 'id');
    }

    public function components()
    {
        return $this->setConnection('elco_makes')->hasMany('App\Models\makeElco\MakeElcoIcbom', 'master_item', 'id');
    }

    // public function item_availabilities()
    // {
    //     return $this->hasMany('App\Models\ItemAvailability','item_id','id');
    // }

    public function makeelco_icbom_as_component()
    {
        return $this->hasMany('App\Models\makeElco\MakeElcoIcbom', 'component_item');
    }

    public function icbom_as_component_limit()
    {
        return $this->hasMany('App\Models\makeElco\MakeElcoIcbom', 'component_item')->orderBy('updated_at','desc')->limit(1);
    }
}
