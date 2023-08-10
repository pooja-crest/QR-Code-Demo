<?php

use App\Models\Supplier;
use Illuminate\Database\Seeder;

class SupplierTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $suppliers = array(
            array(
                'name' => 'McMaster-Carr'
            ),
            array(
                'name' => 'Master-Carr'
            ),
            array(
                'name' => 'MetalMaster'
            ),
        );
        foreach ($suppliers as $supplier) {
            Supplier::firstOrCreate(['name' => $supplier['name']]);
        }
    }
}
