<?php

namespace App\Models;

use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Model;

class FtpLog extends Model
{
    use Filterable;
    protected $fillable = [
        'filename', 'received_at', 'uploaded_at', 'imported_at'
    ];
}
