<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vendor;
use App\Imports\VendorsImport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Validator;
use DB;

class VendorController extends Controller
{
    protected $_limit = 50;

    public function __construct() {
        Validator::extend("emails", function($attribute, $value, $parameters) {
            $emails = explode(',',$value);
            foreach ($emails as $email) {
                $validator = Validator::make([
                    'email' => $email
                ],[
                    'email' => 'email',
                ]);
                if ($validator->fails()) {
                    return false;
                }
            }
            return true;
        });

        Validator::extend("contact_persons", function($attribute, $value, $parameters) {
            $contact_persons = explode(',',$value);
            foreach ($contact_persons as $contact_person) {
                $validator = Validator::make([
                    'contact_person' => $contact_person
                ],[
                    'contact_person' => 'regex:/^[a-zA-Z ]*$/',
                ]);
                if ($validator->fails()) {
                    return false;
                }
            }
            return true;
        });
    }

    public function index(Request $request)
    {
        $filters = $request->all();
        if(isset($filters['search']) && !empty($filters['search'])) {
            $keyword = $filters['search'];
            $filters['search'] = strtolower(generate_search_string($keyword));
        }

        $vendors = Vendor::select('id','vendor_number','name','contact_person','telephone','status')->filter($filters)->withCount('orders')->orderBy('id','asc')->paginate($this->_limit);
        return $this->generateJSONResponse($vendors, 'Successfully get vendors data');
    }

    public function getForFilter()
    {
        $datas = Vendor::select('id', 'name', 'vendor_number')->orderBy('name','asc')->get();

        return $this->generateJSONResponse($datas, 'Successfully get vendors data for filter');
    }

    public function getOne(Request $request)
    {
        try {
            return $this->generateJSONResponse(Vendor::filter($request->all())->first(), 'Successfully get vendors data for filter');
        } catch (Exception $exception) {
            return $this->generateJSONResponse($exception, 'Failed to get vendor', 500, false);
        }
    }

    public function handleUploadVendor(Request $request)
    {
        $file = $request->file('file');
        try {
            Excel::import(new VendorsImport(), $file);
        } catch (Exception $exception) {
            return $this->generateJSONResponse($exception, 'Failed to upload vendor complete', 500, false);
        }
        return $this->generateJSONResponse(true, 'Successfully upload vendor complete');
    }

    public function store(Request $request)
    {
        $result = null;

        $validator = Validator::make($request->all(),[
            'vendor_number' => 'required|numeric|unique:vendors,vendor_number|digits_between:1,191',
            'name' => 'required|max:191'
        ]);

        if ($validator->fails()) {
            return $this->generateJSONResponse($validator->messages(), 'Validation Failed to store vendor', 200, false);
        } else {
            try {
                $vendor['vendor_number'] = $request->vendor_number;
                $vendor['name'] = $request->name;
                $vendor['address'] = $request->address;
                $vendor['contact_person'] = $request->contact_person;
                $vendor['email'] = $request->email;
                $vendor['telephone'] = $request->telephone;
                $vendor['po_note'] = $request->po_note;

                $result = Vendor::create($vendor);
            } catch (QueryException $exception) {
                return $this->generateJSONResponse($exception, 'Failed to store vendor', 500, false);
            }

            return $this->generateJSONResponse($result->id, 'Vendor store successfully');
        }
    }

    public function update(Request $request, $id)
    {
        $result = null;

        $validator = Validator::make($request->all(),[
            'vendor_number' => 'required|numeric|digits_between:1,191|unique:vendors,vendor_number,'.$id,
            'name' => 'required|max:191'
        ]);

        if ($validator->fails()) {
            return $this->generateJSONResponse($validator->messages(), 'Validation Failed to update vendor', 200, false);
        } else {
            try {
                $vendor = Vendor::find($id);
                $vendor->vendor_number = $request->vendor_number;
                $vendor->name = $request->name;
                $vendor->address = $request->address;
                $vendor->contact_person = $request->contact_person;
                $vendor->email = $request->email;
                $vendor->telephone = $request->telephone;
                $vendor->po_note = $request->po_note;

                $result = $vendor->update();
            } catch (QueryException $exception) {
                return $this->generateJSONResponse($exception, 'Failed to update vendor', 500, false);
            }

            return $this->generateJSONResponse($result, 'Vendor updated successfully');
        }
    }

    public function destroy($id)
    {
        try {
            Vendor::find($id)->delete();
            return $this->generateJSONResponse(true, 'Successfully delete vendor');
        } catch (QueryException $exception) {
            return $this->generateJSONResponse($exception, 'Failed to delete vendor', 500, false);
        }
    }
}
