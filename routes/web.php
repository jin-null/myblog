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

//Route::get('/', function () {
//    return view('welcome');
//});

Auth::routes();

Route::get('/', 'TopicsController@index')->name('home');
Route::resource('/user','UserController',['only'=>['edit','update','show']]);
Route::resource('/topic','TopicsController');
Route::resource('replies', 'RepliesController', ['only' => ['store', 'destroy']]);

Route::resource('categories', 'CategoriesController', ['only' => ['show']]);
Route::post('upload_image', 'TopicsController@uploadImage')->name('topic.upload_image');

Route::resource('notifications', 'NotificationsController', ['only' => ['index']]);

Route::group(['prefix' => 'admin','namespace'=>'Admin'], function ($router) {

    $router->get('login', 'LoginController@showLoginForm')->name('admin.login');
    $router->post('login', 'LoginController@login');
    $router->post('logout', 'LoginController@logout');
    $router->post('getuser', 'Admincontroller@user');
    $router->post('users', 'UserController@users');


    Route::get('{path?}', 'Admincontroller@index')->where('path', '[\/\w\.-]*');
});