<?php

class ManipulatePageController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */

	public function index()
	{
		$pages = Page::all();

		return View::make('admin.index')->withPages($pages);
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('admin.create');
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		// get all inputs
		$input = Input::all();

		// validate data
		$rules = [
			'title' => 'required',
			'content' => 'required',
			'slug' => 'required',
			'view' => 'required',
		];

		$validator = Validator::make($input, $rules);

		if($validator->fails()) {
			return Redirect::back()->withInput()->withErrors($validator);
		}

		// instantiate the page
		$page = new Page();

		// apply the values to the page object
		$page->title = $input['title'];
		$page->content = $input['content'];
		$page->slug = $input['slug'];
		$page->view = $input['view'];
		$page->show_in_nav = $input['show_in_nav'];

		if($page->show_in_nav === 'yes') {
			$page->nav_order = $input['nav_order'];
		}

		// save the page to the db
		$page->save();

		// redirect to the admin index
		return Redirect::route('admin.page.index');
	}


	/**
	 * Display the specified resource.
 	 *
	 * If not create, edit or delete the below switch statement will
	 * redirect the user accordingly and return the view.
	 *
	 * @param  string  $page_name
	 * @return Response
	 */
	public function show($page_name)
	{

		switch ($page_name) {
		  	default:
		  		throw new NotFoundHttpException;
		  		break;
		}

	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		if($page = Page::findOrFail($id)) {
			return View::make('admin.edit')->withPage($page);
		} 
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		// page exists?
		if($page = Page::findOrFail($id)) {

			$input = Input::all();

			// validate data
			$rules = [
				'title' => 'required',
				'content' => 'required',
				'slug' => 'required',
				'view' => 'required',
			];

			$validator = Validator::make($input, $rules);

			if($validator->fails()) {
				return Redirect::back()->withInput()->withErrors($validator);
			}

			$page->title = $input['title'];
			$page->content = $input['content'];
			$page->view = $input['view'];
			$page->show_in_nav = $input['show_in_nav'];

			if($page->show_in_nav == 'yes') {
				$page->nav_order = $input['nav_order'];
			} else {
				$page->nav_order = '';
			}

			$page->slug = $input['slug'];
			$page->update();

			return Redirect::route('admin.page.index');

		} else {
			die("Nothing to update");
		}
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		if($page = Page::findOrFail($id)) {

			$page->destroy($id);

			return Redirect::route('admin.page.index');

		}
	}

	/**
	 * Display the settings page
	 *
	 * @param  string  $page_name
	 * @return Response
	 */
	public function settings()
	{

		switch ($page_name) {
		  	default:
		  		throw new NotFoundHttpException;
		  		break;
		}

	}

}
