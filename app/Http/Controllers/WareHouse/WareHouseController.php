<?php

namespace App\Http\Controllers\WareHouse;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\WareHouse\WareHouseDetails;

class WareHouseController extends Controller
{
    public function index()
    {
        $warehouses = WareHouseDetails::all();
        return response()->json([
            'status' => 200,
            'warehouses' => $warehouses
        ]);
    }


    public function add_warehouse(Request $request)
    {
        $warehouse = WareHouseDetails::Create($request->all());
        return response()->json([
            'status' => 200,
            'message' => 'Ware House Saved Successfully!!'
        ]);
    }

    public function edit_warehouse($id)
    {
        $warehouses = WareHouseDetails::find($id);
        return response()->json([
            'status' => 200,
            'warehouses' => $warehouses
        ]);
    }

    public function update_warehouse(Request $request, $id)
    {
        $warehouse = WareHouseDetails::Create()->find($id);
        return response()->json([
            'status' => 200,
            'message' => 'Ware House Updated Successfully!!'
        ]);
    }
}
