<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('', function () {
    return view('welcome');
});

Route::get('/index', 'PagesController@index');
Route::get('/service','PagesController@service');
Route::get('/student','PagesController@student');

Route::resource('posts','PostController');

Route::get('/searchform','SearchController@searchform');
Route::post('/search','SearchController@search');
Auth::routes();

Route::get('/dashboard', 'DashboardController@index');

Route::delete('/dashboard/delete/{id}','DashboardController@destroypost');

Route::post('/continueadd','SearchController@continueadd');

Route::get('/testjQuery','TestController@testjQuery');
