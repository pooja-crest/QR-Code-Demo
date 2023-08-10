<?php

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class UserFilter extends ModelFilter
{
    /**
     * Related Models that have ModelFilters as well as the method on the ModelFilter
     * As [relationMethod => [input_key1, input_key2]].
     *
     * @var array
     */
    public $relations = [];

    public function search($value)
    {
        return $this->where(function ($q) use ($value) {
            return $q->where('users.name_text', 'LIKE', "%$value%")->orWhere('users.code_text', 'LIKE', "%$value%");
        });
    }

    public function role($value)
    {
        return $this->where('users.role', $value);
    }

    public function status($value)
    {
        return $this->where('users.status', $value);
    }

    public function doesntHaveParent($value)
    {
        return $this->whereNull('users.parent_id');
    }
}
