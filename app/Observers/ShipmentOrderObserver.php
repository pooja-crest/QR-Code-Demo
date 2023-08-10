<?php

namespace App\Observers;

use App\Models\ShipmentOrder;
use App\Http\Controllers\ShipmentController;

class ShipmentOrderObserver
{
    private $shipmentController;

    public function __construct(ShipmentController $shipmentController)
    {
        $this->shipmentController = $shipmentController;;
    }

    /**
     * Handle the = shipment order "created" event.
     *
     * @param  \App\=ShipmentOrder  $=ShipmentOrder
     * @return void
     */
    public function creating(ShipmentOrder $shipmentOrder)
    {
        $shipmentOrder->container_number_text = strtolower(generate_search_string($shipmentOrder->container_number));
        $shipmentOrder->cost_to_unload = number_format((double)($shipmentOrder->unload_rate * $shipmentOrder->unload_hours_spent), 2, '.', '');
    }

    /**
     * Handle the = shipment order "updated" event.
     *
     * @param  \App\=ShipmentOrder  $=ShipmentOrder
     * @return void
     */
    public function updating(ShipmentOrder $shipmentOrder)
    {
        $shipmentOrder->container_number_text = strtolower(generate_search_string($shipmentOrder->container_number));
        $shipmentOrder->cost_to_unload = number_format((double)($shipmentOrder->unload_rate * $shipmentOrder->unload_hours_spent), 2, '.', '');

    }

    public function saving(ShipmentOrder $shipmentOrder)
    {
        $shipmentOrder->container_number_text = strtolower(generate_search_string($shipmentOrder->container_number));
        $shipmentOrder->cost_to_unload = number_format((double)($shipmentOrder->unload_rate * $shipmentOrder->unload_hours_spent), 2, '.', '');

    }

    public function updated(ShipmentOrder $shipmentOrder)
    {
        $shipmentOrder->container_number_text = strtolower(generate_search_string($shipmentOrder->container_number));
        $shipmentOrder->cost_to_unload = number_format((double)($shipmentOrder->unload_rate * $shipmentOrder->unload_hours_spent), 2, '.', '');
        $this->shipmentController->enableAutoRefreshFlags();
    }

    /**
     * Handle the = shipment order "deleted" event.
     *
     * @param  \App\=ShipmentOrder  $=ShipmentOrder
     * @return void
     */
    public function deleted(ShipmentOrder $shipmentOrder)
    {
        //
    }

    /**
     * Handle the = shipment order "restored" event.
     *
     * @param  \App\=ShipmentOrder  $=ShipmentOrder
     * @return void
     */
    public function restored(ShipmentOrder $shipmentOrder)
    {
        //
    }

    /**
     * Handle the = shipment order "force deleted" event.
     *
     * @param  \App\=ShipmentOrder  $=ShipmentOrder
     * @return void
     */
    public function forceDeleted(ShipmentOrder $shipmentOrder)
    {
        //
    }
}
