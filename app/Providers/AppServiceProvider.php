<?php

namespace App\Providers;

use App\Models\User;
use App\Observers\UserObserver;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

use App\Models\Vendor;
use App\Observers\VendorObserver;
use App\Observers\ShipmentOrderObserver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

        // ItemVendor::observe(ItemVendorObserver::class);
        // Order::observe(OrderObserver::class);
        Vendor::observe(VendorObserver::class);
        // ShipmentOrder::observe(ShipmentOrderObserver::class);
        User::observe(UserObserver::class);
    }
}
