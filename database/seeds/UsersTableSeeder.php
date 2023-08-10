<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        $user_records = array(
            array(
                'code' => strtoupper('2VMPurchasesAdmin'),
                'name' => '2VMPurchasesAdmin',
                'contact_number' => '2VMPurchasesAdmin',
                'contact_person' => '2VMPurchasesAdmin',
                'password' => bcrypt('2VMPurchasesAdmin'),
                'role' => 'admin',
                'status' => 'active'
            ),
            array(
                'code' => strtoupper('2VMPurchasesPurchaser'),
                'name' => '2VMPurchasesPurchaser',
                'contact_number' => '2VMPurchasesPurchaser',
                'contact_person' => '2VMPurchasesPurchaser',
                'password' => bcrypt('2VMPurchasesPurchaser'),
                'role' => 'purchaser',
                'status' => 'active'
            ),
            array(
                'code' => strtoupper('2VMPurchasesViewer'),
                'name' => '2VMPurchasesViewer',
                'contact_number' => '2VMPurchasesViewer',
                'contact_person' => '2VMPurchasesViewer',
                'password' => bcrypt('2VMPurchasesViewer'),
                'role' => 'viewer',
                'status' => 'active'
            ),
            array(
                'code' => strtoupper('2VMPurchasesReceiving'),
                'name' => '2VMPurchasesReceiving',
                'contact_number' => '2VMPurchasesReceiving',
                'contact_person' => '2VMPurchasesReceiving',
                'password' => bcrypt('2VMPurchasesReceiving'),
                'role' => 'receiving',
                'status' => 'active'
            )
        );
        foreach ($user_records as $key => $user_record) {
            $user = User::firstOrCreate(['code' => $user_record['code']], $user_record);
        }
    }
}
