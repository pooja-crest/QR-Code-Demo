<?php

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class ViewGroupedOrderFilter extends ModelFilter
{
    /**
     * Related Models that have ModelFilters as well as the method on the ModelFilter
     * As [relationMethod => [input_key1, input_key2]].
     *
     * @var array
     */
    public $relations = [];

    public function customerIds($value)
    {
        return $this->whereIn('customer_id', $value);
    }

    public function customerId($value)
    {
        return $this->where('customer_id', $value);
    }

    public function search($value)
    {
        return $this->where(function ($q) use ($value) {
            return $q->where('po_number', 'LIKE', "%$value%")->orWhere('order_number', 'LIKE', "%$value%");
        });
    }

    public function searchInquiry($value)
    {
        return $this->where(function ($q) use ($value) {
            return $q->where('po_number', 'LIKE', "%$value%")->orWhere('customer_id', 'LIKE', "%$value%");
        });
    }


    public function status($value)
    {
        return $this->whereIn('status', $value);
    }
}
