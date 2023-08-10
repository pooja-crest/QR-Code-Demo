<?php

namespace App\Observers;

use App\Models\Order;

class OrderObserver
{
    /**
     * Handle the = order "created" event.
     *
     * @param  \App\=Order  $=Order
     * @return void
     */
    public function creating(Order $order)
    {
        $order->po_number_text = generate_search_string($order->po_number);
    }

    /**
     * Handle the = order "updated" event.
     *
     * @param  \App\=Order  $=Order
     * @return void
     */
    public function updating(Order $order)
    {
        $order->po_number_text = generate_search_string($order->po_number);
    }

    public function saving(Order $order)
    {
        $order->po_number_text = generate_search_string($order->po_number);
    }

    public function updated(Order $order)
    {
        $order->po_number_text = generate_search_string($order->po_number);
    }

    /**
     * Handle the = order "deleted" event.
     *
     * @param  \App\=Order  $=Order
     * @return void
     */
    public function deleted(Order $order)
    {
        //
    }

    /**
     * Handle the = order "restored" event.
     *
     * @param  \App\=Order  $=Order
     * @return void
     */
    public function restored(Order $order)
    {
        //
    }

    /**
     * Handle the = order "force deleted" event.
     *
     * @param  \App\=Order  $=Order
     * @return void
     */
    public function forceDeleted(Order $order)
    {
        //
    }
}
