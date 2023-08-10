<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddVendorNumberTextAndVendorNameTextColumnIntoVendorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('vendors', function (Blueprint $table) {
            $table->string('vendor_number_text')->nullable()->index()->after('vendor_number');
            $table->string('name_text')->nullable()->index()->after('name');
        });
        DB::statement("UPDATE vendors SET vendors.vendor_number_text = LOWER(regex_replace('[^A-Za-z0-9]', '', vendors.vendor_number)), vendors.name_text = LOWER(regex_replace('[^A-Za-z0-9]', '', vendors.name))");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('vendors', function (Blueprint $table) {
            $table->dropColumn('vendor_number_text');
            $table->dropColumn('name_text');
        });
    }
}
