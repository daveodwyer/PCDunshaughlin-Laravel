<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

// Link to page permalinks


Route::get('/', ['as' => 'home', function() {

	$page = Page::where('slug', '=', '')->firstOrFail();
	return View::make('public.index')->withPage($page);

}]);

Route::get('login', 'SessionsController@create')->before('guest');
Route::get('logout', 'SessionsController@destroy')->before('auth');


Route::get('admin', 'AdminController@index')->before('auth');

Route::resource('admin', 'AdminController');
Route::resource('sessions', 'SessionsController', ['only' => ['create', 'store', 'destroy']]);
Route::resource('page', 'PageController');

Route::get('{page}', array('uses' => 'PageController@show'));

Route::resource('maintheme', 'PageController');

Route::group(['prefix' => 'mainsite'], function() {
	Route::get('{name}', ['uses' => 'PageController@show']);
});

