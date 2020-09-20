<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('frontend')->group(function () {
    Route::namespace('api')->group(function () {
        Route::post('/auth/UserLogin', 'AuthController@UserLogin')->name("auth/UserLogin");
    });
});

Route::namespace('WareHouse')->group(function () {

        Route::post('/save-warehouse', 'WareHouseController@add_warehouse')->name('save-warehouse');
        Route::get('/all-warehouse', 'WareHouseController@index')->name('all-warehouse');
        Route::get('/all-warehouse', 'WareHouseController@index')->name('all-warehouse');
        Route::get('/edit-warehouse/{id}', 'WareHouseController@edit_warehouse')->name('edit-warehouse');
        Route::patch('/update-warehouse/{id}', 'WareHouseController@update_warehouse')->name('edit-warehouse');
  
});


