<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use App\Models\Vendor;

class VendorsImport implements ToCollection
{
    public function collection(Collection $vendors)
    {
        foreach ($vendors as $key => $vendor){
            try{
                if(isset($vendor) && isset($vendor[1]) && !is_null($vendor[1]) && $key != 0){
                    Vendor::create([
                        'vendor_number' => (isset($vendor[1]) && !empty($vendor[1])) ? $vendor[1] : '',
                        'name' => (isset($vendor[2]) && !empty($vendor[2])) ? $vendor[2] : '',
                        'address' => (isset($vendor[3]) && !empty($vendor[3])) ? $vendor[3] : NULL,
                        'contact_person' => (isset($vendor[4]) && !empty($vendor[4])) ? $vendor[4] : NULL,
                        'email' => (isset($vendor[7]) && !empty($vendor[7])) ? $vendor[7] : NULL,
                        'telephone' => (isset($vendor[5]) && !empty($vendor[5])) ? $vendor[5] : NULL
                    ]);
                }
            } catch (\Exception $ex) {
				\Log::error("Exception :" . $ex->getMessage() . ' : ' .$ex->getLine());
                \Log::error("Traces : " . $ex->getTraceAsString());
			}
        }
    }
}
