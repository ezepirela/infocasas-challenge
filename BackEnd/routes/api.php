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
Route::get('/todos', 'App\Http\Controllers\TodosController@index');
Route::get('/todos/{title}', 'App\Http\Controllers\TodosController@getBytitle');
Route::get('/todos/complete/{complete}', 'App\Http\Controllers\TodosController@getByStatus');
Route::post('/todos', 'App\Http\Controllers\TodosController@store');
Route::patch('/todos/{todo}/complete', 'App\Http\Controllers\TodosController@updateComplete');
Route::delete('/todos/{todo}', 'App\Http\Controllers\TodosController@destroy');
