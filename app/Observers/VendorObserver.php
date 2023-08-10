<?php

namespace App\Observers;

use App\Models\Vendor;

class VendorObserver
{
    /**
     * Handle the = vendor "created" event.
     *
     * @param  \App\=Vendor  $=Vendor
     * @return void
     */
    public function creating(Vendor $vendor)
    {
        $vendor->vendor_number_text = generate_search_string($vendor->vendor_number);
        $vendor->name_text = strtolower(generate_search_string($vendor->name));
    }

    /**
     * Handle the = vendor "updated" event.
     *
     * @param  \App\=Vendor  $=Vendor
     * @return void
     */
    public function updating(Vendor $vendor)
    {
        $vendor->vendor_number_text = generate_search_string($vendor->vendor_number);
        $vendor->name_text = strtolower(generate_search_string($vendor->name));
    }

    public function saving(Vendor $vendor)
    {
        $vendor->vendor_number_text = generate_search_string($vendor->vendor_number);
        $vendor->name_text = strtolower(generate_search_string($vendor->name));
    }

    public function updated(Vendor $vendor)
    {
        $vendor->vendor_number_text = generate_search_string($vendor->vendor_number);
        $vendor->name_text = strtolower(generate_search_string($vendor->name));
    }

    /**
     * Handle the = vendor "deleted" event.
     *
     * @param  \App\=Vendor  $=Vendor
     * @return void
     */
    public function deleted(Vendor $vendor)
    {
        //
    }

    /**
     * Handle the = vendor "restored" event.
     *
     * @param  \App\=Vendor  $=Vendor
     * @return void
     */
    public function restored(Vendor $vendor)
    {
        //
    }

    /**
     * Handle the = vendor "force deleted" event.
     *
     * @param  \App\=Vendor  $=Vendor
     * @return void
     */
    public function forceDeleted(Vendor $vendor)
    {
        //
    }
}
