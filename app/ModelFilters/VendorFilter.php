<?php 

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class VendorFilter extends ModelFilter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relationMethod => [input_key1, input_key2]].
    *
    * @var array
    */
    public $relations = [];

    public function id($value)
    {
        return $this->whereId($value);
    }

    public function search($value)
    {
        return $this->where(function ($q) use ($value) {
            return $q->where('vendors.name_text', 'LIKE', "%$value%")->orWhere('vendors.vendor_number_text', 'LIKE', "%$value%");
        });
    }

    public function status($value)
    {
        return $this->where('vendors.status', $value);
    }
}
