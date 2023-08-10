<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Vendor;

class VendorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Vendor::create([
            'vendor_number' => '-',
            'name' => "Vendor",
            'is_dummy' => 1
        ]);
    }
}
