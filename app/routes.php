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

// Include CSRF protection against all POST, PUT and PATCH requests
Route::when('*', 'csrf', ['post', 'put', 'patch']);


// Admin
Route::get('admin', 'AdminController@index')->before('auth');
Route::resource('admin', 'AdminController');

// Pages
Route::resource('page', 'PageController', ['only' => ['show']]);
Route::get('{page}', array('uses' => 'PageController@show'));

// Log and Logout
Route::resource('sessions', 'SessionsController', ['only' => ['create', 'store', 'destroy']]);
Route::get('login', 'SessionsController@create')->before('guest');
Route::get('logout', 'SessionsController@destroy')->before('auth');

// treat / as /home
Route::get('/', ['as' => 'home', function() {

	$page = Page::where('slug', '=', '')->firstOrFail();
	return View::make('public.index')->withPage($page);

}]);