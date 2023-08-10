<?php

use App\Jobs\SendEmail;
use App\Jobs\SendNeworderEmail;
use App\Models\FtpLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/php-info', function (Request $request) {
	return phpinfo();
});

Route::get('/get-date', function (Request $request) {
	$mytime = Carbon\Carbon::now();
	echo "default date: " . date('Y-m-d H:i:s') . "<br>";
	echo "Carbon date: " . $mytime->toDateTimeString();
});

Route::get('/test-send-email', function (Request $request) {
	SendNeworderEmail::dispatch(['email' => ['arya.bawanta@yahoo.com'], 'order_code' => 'arya', 'title' => 'test send email', 'attachment' => []]);
});

Route::get('/product', 'ProductController@test');
Route::prefix('products')->group(function () {
	Route::get('', 'ProductController@index');
	Route::post('', 'ProductController@store');
	Route::post('generate-qr-code', 'ProductController@generateQrCode');
	Route::get('get-new-label', 'ProductController@getNewLabel');
	Route::patch('/{id}', 'ProductController@update');
	Route::delete('/{id}', 'ProductController@destroy');
	// Route::get('get-for-filter', 'VendorController@getForFilter');
	// Route::get('get-one', 'VendorController@getOne');
	// Route::post('', 'VendorController@store');
	// Route::post('handle-upload-vendor', 'VendorController@handleUploadVendor');
	// Route::prefix('/{id}')->group(function () {
	// 	Route::patch('', 'VendorController@update');
	// 	Route::delete('', 'VendorController@destroy');
	// });
});

Route::prefix('suppliers')->group(function () {
	Route::get('', 'SupplierController@index');
});

Route::prefix('auth')->group(function () {
	Route::post('/login', 'AuthController@login');
	Route::post('/register', 'AuthController@register');
	Route::post('/logout', 'AuthController@logout');
	Route::post('/forgot-password', 'AuthController@forgotPassword');
	Route::post('/reset-password', 'AuthController@resetPassword');
});


Route::middleware('jwt.verify')->group(function () {
	Route::prefix('auth')->group(function () {
		Route::prefix('/{id}')->group(function () {
			Route::post('inactive-user-approval', 'AuthController@inactiveUserApproval');
		});
	});
	
	Route::prefix('vendors')->group(function () {
		Route::get('', 'VendorController@index');
		Route::get('get-for-filter', 'VendorController@getForFilter');
		Route::get('get-one', 'VendorController@getOne');
		Route::post('', 'VendorController@store');
		Route::post('handle-upload-vendor', 'VendorController@handleUploadVendor');
		Route::prefix('/{id}')->group(function () {
			Route::patch('', 'VendorController@update');
			Route::delete('', 'VendorController@destroy');
		});
	});
	
	
	
	Route::prefix('users')->group(function () {
		Route::get('', 'UserController@index');
		Route::post('', 'UserController@store');
		Route::prefix('/{id}')->group(function () {
			Route::patch('', 'UserController@update');
			Route::delete('', 'UserController@destroy');
		});
	});
   
});
