<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\WithCustomCsvSettings;
use App\Models\ItemVendorPriceHistory;
use App\Models\ItemVendor;
use App\Models\Vendor;
use App\Models\Order;
use App\Models\OrderItem;
use Carbon\Carbon;

class VendorOrdersImport implements ToCollection, WithStartRow, WithCustomCsvSettings
{
    public $totalOrder = 0;

    public function startRow(): int
    {
        return 2;
    }

    public function getCsvSettings(): array
    {
        # Define your custom import settings for only this class
        return [
            'escape_character' => ' ',
        ];
    }

    /**
    * @param Collection $collection
    */
    public function collection(Collection $collection)
    {
        ini_set('max_execution_time', 0);

        $ordersGroups = $collection->groupBy(function($item,$key){
            return $item[0];
        })->all();

        foreach($ordersGroups as $vendorNumber => $orderGroup){
            try {
                $vendors = Vendor::where('vendor_number',$vendorNumber)->get();

                $vendor = null;

                if($vendors->count() >= 1){
                    $vendor = $vendors->first();
                } else {
                    // select fake vendor
                    $vendor = Vendor::where(['vendor_number'=>'-','is_dummy' => 1])->get()->first();
                }

                $record = [];

                $record['vendor_id'] = $vendor->id;
                $record['total_quantity'] = $orderGroup->pluck(2)->sum();
                $record['note'] = env('MIX_ORDER_NOTE');

                $record['billto_name'] = env('MIX_BILLTO_NAME');
                $record['billto_address'] = env('MIX_BILLTO_ADDRESS');
                $record['billto_city'] = env('MIX_BILLTO_CITY');
                $record['billto_zip'] = env('MIX_BILLTO_ZIP');
                $record['billto_state'] = env('MIX_BILLTO_STATE');
                $record['billto_country'] = env('MIX_BILLTO_COUNTRY');
                $record['billto_phone'] = env('MIX_BILLTO_PHONE');
                $record['billto_fax'] = env('MIX_BILLTO_FAX');
                $record['billto_email'] = env('MIX_BILLTO_EMAIL');

                $record['shipto_name'] = env('MIX_BILLTO_NAME');
                $record['shipto_address'] = env('MIX_BILLTO_ADDRESS');
                $record['shipto_city'] = env('MIX_BILLTO_CITY');
                $record['shipto_zip'] = env('MIX_BILLTO_ZIP');
                $record['shipto_state'] = env('MIX_BILLTO_STATE');
                $record['shipto_country'] = env('MIX_BILLTO_COUNTRY');
                $record['shipto_phone'] = env('MIX_BILLTO_PHONE');
                $record['shipto_fax'] = env('MIX_BILLTO_FAX');
                $record['shipto_email'] = env('MIX_BILLTO_EMAIL');
                $record['created_by'] = auth()->user()->id;

                $record['is_excel_uploaded'] = 1;

                $filePoNumberParam = !empty($record['po_number']) ? generate_search_string($record['po_number']) : null;
                $vendorNumber = ($vendor->is_dummy == 0) ? $vendor->vendor_number : rand(1111, 9999);
                $record['order_code'] = generateOrderCodeStr($vendorNumber, 'temp', $filePoNumberParam); // generate order code for file.

                $order = Order::create($record);
                $order->order_code = generateOrderCodeStr($vendorNumber, $order->id, $filePoNumberParam);
                $order->save();
                $order->refresh();
                $order = $order->toArray();
                $order['vendor_number'] = $vendor->vendor_number;
                $order['vendor_name'] = $vendor->name;
                $order['vendor_address'] = $vendor->address;

                $totalCost = 0;

                if(isset($order)) {
                    $order_item = [];
                    foreach($orderGroup as $index => $item) {
                        if(!is_null($item[1])){
                            $itemNumber = trim($item[1]);
                            $itemVendors = ItemVendor::where(['item_id'=>$itemNumber,'vendor_id'=>$vendor->id])->get();
    
                            if(!empty($itemVendors) && $itemVendors->count()>0) {
                                $itemVendor = $itemVendors->first();
                                $extendedCost = (!is_null($itemVendor->cost) && $itemVendor->cost != "") ? ($itemVendor->cost * $item[2]) : 0;
    
                                $order_item['order_id'] = $order['id'];
                                $order_item['item_id'] = $itemVendor->id;
                                $order_item['vendor_item_id'] = ($itemVendor->vendor_item_id != "" && !is_null($itemVendor->vendor_item_id)) ? $itemVendor->vendor_item_id : null;
                                $order_item['quantity_ordered'] = (isset($item[2]) && !is_null($item[2])) ? $item[2] : 0;
                                $order_item['unit_cost'] = (!is_null($itemVendor->cost) && $itemVendor->cost != "") ? $itemVendor->cost : 0;
                                $order_item['extended_cost'] = $extendedCost;
                                $order_item['item_order_no'] = $index+1;
                                $orderItem = OrderItem::create($order_item);
    
                                $totalCost += $extendedCost;
    
                                $order['orders'][$index] = $orderItem->toArray();
                                $order['orders'][$index]['item_number'] = $itemVendor->item_id;
                                $order['orders'][$index]['upc'] = $itemVendor->upc;
                                $order['orders'][$index]['description'] = $itemVendor->description;
                            } else {
                                $itemVendor = ItemVendor::create([
                                    'item_id' => $itemNumber,
                                    'vendor_id' => $vendor->id
                                ]);

                                /* $itemVendorPriceHistoryArr = [
                                    'item_vendor_id' => $itemVendor->id,
                                    'item_id' => $itemVendor->item_id,
                                    'vendor_id' => $itemVendor->vendor_id,
                                    'from_date' => Carbon::now()->format('Y-m-d'),
                                    'from_cost' => 0,
                                    'to_date' => Carbon::now()->format('Y-m-d'),
                                    'to_cost' => 0
                                ];
                                ItemVendorPriceHistory::create($itemVendorPriceHistoryArr); */
    
                                $order_item['order_id'] = $order['id'];
                                $order_item['item_id'] = $itemVendor->id;
                                $order_item['vendor_item_id'] = ($itemVendor->vendor_item_id != "" && !is_null($itemVendor->vendor_item_id)) ? $itemVendor->vendor_item_id : null;
                                $order_item['quantity_ordered'] = (isset($item[2]) && !is_null($item[2])) ? $item[2] : 0;
                                $order_item['unit_cost'] = 0;
                                $order_item['extended_cost'] = 0;

                                $order_item['item_order_no'] = $index+1;
                                $orderItem = OrderItem::create($order_item);
    
                                $order['orders'][$index] = $orderItem->toArray();
                                $order['orders'][$index]['item_number'] = $itemVendor->item_id;
                                $order['orders'][$index]['upc'] = $itemVendor->upc;
                                $order['orders'][$index]['description'] = $itemVendor->description;
                            }
                        }
                    }
                    $this->totalOrder++;
                }

                Order::where('id',$order['id'])->update(['total_cost'=>$totalCost]);
                $order['total_cost'] = $totalCost;

                app('App\Http\Controllers\OrderController')->_generateAndSavePDF($order);
                app('App\Http\Controllers\OrderController')->_generateAndSaveCSV($order);
                app('App\Http\Controllers\OrderController')->updateFileStatus($order['id']);
            } catch (\Exception $ex) {
                \Log::error("Exception :" . $ex->getMessage() . ' : ' .$ex->getLine());
                \Log::error("Traces : " . $ex->getTraceAsString());
            }
        }
    }
}
