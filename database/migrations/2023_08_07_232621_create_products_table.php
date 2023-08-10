<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('supplier_id');
            $table->string('title');
            $table->string('item_no',50)->unique();
            $table->text('description');
            $table->integer('quantity')->default(0);
            $table->text('location')->nullable();
            $table->string('lead_time')->nullable();
            $table->unsignedInteger('label');
            $table->string('image');
            $table->string('qr_code');
            $table->string('pdf_name')->nullable();
            $table->tinyInteger('status')->default(1)->comment("0=inactive,1=active");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
