<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vendor extends Model
{
    use SoftDeletes, Filterable;

    protected $primaryKey = 'id';
    protected $table = 'vendors';

    protected $fillable = [
        'vendor_number','name','address','contact_person','email','telephone','po_note','is_dummy','vendor_number_text','vendor_number_text','name_text'
    ];

    public function orders()
    {
        return $this->hasMany('App\Models\Order', 'vendor_id', 'id');
    }

    public function scopeExcludeDummy($query)
    {
        return $query->where('is_dummy', '!=', 1);
    }

    public function items()
    {
        return $this->hasMany(ItemVendor::class, 'vendor_id', 'id');
    }
}
