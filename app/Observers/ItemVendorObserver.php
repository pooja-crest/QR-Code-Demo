<?php

namespace App\Observers;

use App\Models\ItemVendor;

class ItemVendorObserver
{
    /**
     * Handle the = item vendor "created" event.
     *
     * @param  \App\=ItemVendor  $=ItemVendor
     * @return void
     */
    public function creating(ItemVendor $itemVendor)
    {
        $itemVendor->item_id_text = strtolower(generate_search_string($itemVendor->item_id));
    }

    /**
     * Handle the = item vendor "updated" event.
     *
     * @param  \App\=ItemVendor  $=ItemVendor
     * @return void
     */
    public function updating(ItemVendor $itemVendor)
    {
        $itemVendor->item_id_text = strtolower(generate_search_string($itemVendor->item_id));
    }

    public function saving(ItemVendor $itemVendor)
    {
        $itemVendor->item_id_text = strtolower(generate_search_string($itemVendor->item_id));
    }

    public function updated(ItemVendor $itemVendor)
    {
        $itemVendor->item_id_text = strtolower(generate_search_string($itemVendor->item_id));
    }

    /**
     * Handle the = item vendor "deleted" event.
     *
     * @param  \App\=ItemVendor  $=ItemVendor
     * @return void
     */
    public function deleted(ItemVendor $itemVendor)
    {
        //
    }

    /**
     * Handle the = item vendor "restored" event.
     *
     * @param  \App\=ItemVendor  $=ItemVendor
     * @return void
     */
    public function restored(ItemVendor $itemVendor)
    {
        //
    }

    /**
     * Handle the = item vendor "force deleted" event.
     *
     * @param  \App\=ItemVendor  $=ItemVendor
     * @return void
     */
    public function forceDeleted(ItemVendor $itemVendor)
    {
        //
    }
}
