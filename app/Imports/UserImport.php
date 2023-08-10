<?php

namespace App\Imports;

use App\Models\User;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class UserImport implements ToModel, WithStartRow
{
    public function startRow(): int
    {
        return 2;
    }

    public function model(array $row)
    {
        if (!$this->_isRowValid($row)) {
            return null;
        }

        return null;

        // return User::updateOrCreate(
        //     [
        //         'id' => $row[0]
        //     ],
        //     [
        //         'id' => $row[0],
        //         'quantity' => $row[1],
        //         'description' => empty($row[2]) ? '-' : $row[2],
        //         'show' => true
        //     ]
        // );
    }

    private function _isRowValid($row)
    {
        return true;
        if (!isset($row[0])) {
            return false;
        }
        if (!isset($row[1])) {
            return false;
        }
        if (!isset($row[2])) {
            return false;
        }
        return true;
    }
}
