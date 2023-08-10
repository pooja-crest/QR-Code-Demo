<?php

namespace App\Imports;

use App\Models\Order;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithStartRow;

class bulkShipCompleteImport implements ToCollection, WithStartRow
{
    public function startRow(): int
    {
        return 2;
    }

    public function collection(Collection $rows)
    {
        $order_ids = [];
        foreach ($rows as $row) {
            if (!$this->_isRowValid($row)) continue;
            if (empty($row[0])) continue;
            $order_ids[] = str_replace("'", "", $row[0]);
        }
        Order::whereIn('number', $order_ids)
            ->where(function ($q) {
                $q->where('status', Order::STATUS_NOT_SHIP)->orWhere('quantity_shipped', 0);
            })->update(['quantity_backordered' => -1]);
        Order::whereIn('number', $order_ids)->where('status', '!=', Order::STATUS_COMPLETE)->update(['status' => Order::STATUS_COMPLETE, 'status_name' => 'Ship Complete']);
    }

    private function _isRowValid($row)
    {
        if (!isset($row[0])) {
            return false;
        }
        return true;
    }
}
