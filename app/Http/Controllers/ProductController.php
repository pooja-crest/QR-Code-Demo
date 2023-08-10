<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use DB,PDF;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ProductController extends Controller
{
    protected $_limit = 50;

    public function index(Request $request)
    {
        $filters = $request->all();
        if(isset($filters['search']) && !empty($filters['search'])) {
            $keyword = $filters['search'];
            $getLabel = explode('qrl_',strtolower($keyword));
            $labelSearch = (count($getLabel) > 1)?ltrim($getLabel[1],'0'):ltrim($keyword,'0');
            $filters['search'] = generate_search_string($labelSearch);
        }

        $products = Product::select('products.*')->filter($filters)->orderBy('id')->paginate($this->_limit);
        return $this->generateJSONResponse($products, 'Successfully get products data');
    }

    public function generateQrCode(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'item_no' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->generateJSONResponse($validator->messages(), 'Validation Failed to generate QR code', 200, false);
        } else {
            try{
                $fileName = $request->item_no.'.png';
                \QrCode::size(500)
                ->format('png')
                ->generate($request->item_no, public_path("images/QRs/$fileName"));
            }catch (QueryException $exception) {
                return $this->generateJSONResponse($exception, 'Failed to generate QR code', 500, false);
            }

            return $this->generateJSONResponse(['image'=>asset("images/QRs/$fileName"),'image_name'=>$fileName], 'Successfully generated QR Code');
        }
       
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'title' => 'required',
            'label' => 'required',
            'item_no' => 'required|unique:products,item_no',
            'description' => 'required',
            'supplier_id' => 'required',
            'quantity' => 'required|numeric',
            'location' => 'required',
            'qr_code' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2040',
        ]);

        if ($validator->fails()) {
            return $this->generateJSONResponse($validator->messages(), 'Validation Failed to store product', 200, false);
        } else {
            try {
                $fileName = upload_image_in_local($request->image,'products',"");
                $data = [
                    'title' => $request->title,
                    'item_no' => $request->item_no,
                    'description' => $request->description,
                    'supplier_id' => $request->supplier_id,
                    'quantity' => $request->quantity,
                    'location' => $request->location,
                    'lead_time' => $request->lead_time,
                    'label' => $request->label,
                    'image' => $fileName,
                    'qr_code' => $request->qr_code,
                ];
                $product = Product::create($data);
                $pdfName = $this->_generateAndSavePDF($product);
                $product->pdf_name = $pdfName;
                $product->save();

            } catch (QueryException $exception) {
                return $this->generateJSONResponse($exception, 'Failed to store product', 500, false);
            }

            return $this->generateJSONResponse($product->id, 'Product store successfully');
        }
    }

    public function update(Request $request,$id)
    {
        $validator = Validator::make($request->all(),[
            'title' => 'required',
            'label' => 'required',
            'item_no' => 'required|unique:products,item_no,'.$id,
            'description' => 'required',
            'supplier_id' => 'required',
            'quantity' => 'required|numeric',
            'location' => 'required',
            'image' => [Rule::requiredIf(function () use($id){
                if (!empty(Product::find($id)->image)) {
                   return false;
                }
                return true;
            }),'image','mimes:jpeg,png,jpg','max:2040'],
        ]);

        if ($validator->fails()) {
            return $this->generateJSONResponse($validator->messages(), 'Validation Failed to store product', 200, false);
        } else {
            try {
                $product = Product::find($id);
                if($request->hasFile('image')){
                    unlink('images/products/'.$product->image);
                    $fileName = upload_image_in_local($request->image,'products',"");
                    $product->image = $fileName; 
                }

                $product->title = $request->title; 
                $product->item_no = $request->item_no; 
                $product->description = $request->description; 
                $product->supplier_id = $request->supplier_id; 
                $product->quantity = $request->quantity; 
                $product->location = $request->location; 
                $product->lead_time = $request->lead_time; 
                $product->label = $request->label; 
                $product->qr_code = $request->qr_code; 
                
                if($product->isDirty()){
                    unlink('images/products/'.$product->pdf_name);
                    $pdfName = $this->_generateAndSavePDF($product);
                    $product->pdf_name = $pdfName;
                }
                $product->save();

            } catch (QueryException $exception) {
                return $this->generateJSONResponse($exception, 'Failed to store product', 500, false);
            }

            return $this->generateJSONResponse($product->id, 'Product store successfully');
        }
    }
    public function getNewLabel(){
        $lastId = DB::table('products')->orderBy('label', 'desc')->first();
        $lastLabel = ($lastId->label ??0) + 1;
        
        $label = 'QRL_'.str_pad($lastLabel,4,0,STR_PAD_LEFT);
        return $this->generateJSONResponse($label, 'New Label for Product');
    }
  
    public function test(){
        ini_set('max_execution_time', 180);
        $data = Product::find(1);
        $customPaper = array(0,25,450,600);
        $pdfName = $data->label . '.pdf';
        // $pdf = PDF::setOptions(['isHtml5ParserEnabled' => true, 'isRemoteEnabled' => true])->loadView('product.pdf', ['data' => $product])->setPaper($customPaper, 'landscape');
        $pdf = PDF::setOptions(['isRemoteEnabled' => true])->loadView('product.pdf', compact('data'))->setPaper($customPaper, 'landscape');
        // $content = $pdf->download($pdfName)->getOriginalContent();
        // return Storage::put('public/product/'.$pdfName, $content);
        return $pdf->stream();
    }

    private function _generateAndSavePDF($data)
	{
        $customPaper = array(0,25,450,600);
		$pdf = PDF::loadView('product.pdf', compact('data'))->setPaper($customPaper, 'landscape');
        $pdfName = $data->label . '.pdf';
		$content = $pdf->download($pdfName)->getOriginalContent();
        $pdf->save(public_path("images/products/")  . $pdfName);
		$save = Storage::put('public/product/'.$pdfName, $content);
        
        return $pdfName;
	}

    public function destroy($id)
    {
        $product = Product::find($id);
        
        if($product){
            unlink('images/products/'.$product->image);
            unlink('images/products/'.$product->pdf_name);
            unlink('images/QRs/'.$product->qr_code);
            $product->delete();
        }
        return $this->generateJSONResponse(true, 'Product deleted successfully');
    }
    
}
