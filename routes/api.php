<?php

use App\Http\Controllers\Access\UserController;
use App\Http\Controllers\Agenda\AgendaController;
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


Route::group(['namespace' => 'Access', 'prefix' => 'api'], function () {
    
    Route::post('/search-user', [UserController::class, 'searchUser']);
    Route::post('/cadastrar', [UserController::class, 'store']);
})->middleware(['auth:sanctum']);


Route::group(['prefix' => 'api'], function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/agenda/form-info', [AgendaController::class, 'formInfo']);
    
    Route::resource('agenda', AgendaController::class);
})->middleware(['auth:sanctum']);