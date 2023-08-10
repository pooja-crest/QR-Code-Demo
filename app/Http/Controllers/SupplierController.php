<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Supplier;
use DB;

class SupplierController extends Controller
{
    protected $_limit = 50;

    public function index(Request $request)
    {
        $suppliers = Supplier::select('id','name')->orderBy('id')->get();
        return $this->generateJSONResponse($suppliers, 'Successfully get products data');
    }

}
