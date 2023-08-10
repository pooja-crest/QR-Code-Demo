<?php

namespace App\Models;

use Carbon\Carbon;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use Filterable;
    protected $fillable = [
        'supplier_id',
        'title',
        'item_no',
        'description',
        'quantity',
        'location',
        'lead_time',
        'label',
        'image',
        'qr_code',
        'status'
    ];

    protected $hidden = ['created_at','updated_at'];
    protected $appends = ['created_at_date','updated_at_date','pdf_path','image_path','qr_code_path'];

    public function getLabelAttribute($val)
    {
        return $val?'QRL_'.str_pad($val,4,0,STR_PAD_LEFT):'';
    }
    public function getPdfPathAttribute($val)
    {
        return asset('images/products/'.$this->pdf_name);
    }
    public function getQrCodePathAttribute()
    {
        return (!empty($this->qr_code))?asset('images/QRs/'.$this->qr_code):null;
    }

    public function getImagePathAttribute()
    {
        return asset('images/products/'.$this->image);
    }

    public function getCreatedAtDateAttribute()
    {
        return Carbon::parse($this->created_at)->format('m/d/Y');
    }

    public function getUpdatedAtDateAttribute()
    {
        return Carbon::parse($this->created_at)->format('m/d/Y');
    }

    public function setLabelAttribute($value)
    {
        $label = explode('QRL_',$value);
        $this->attributes['label'] = $label[1];
    }

    public function supplier() {
        return $this->belongsTo(Supplier::class,'supplier_id');
    }
}
