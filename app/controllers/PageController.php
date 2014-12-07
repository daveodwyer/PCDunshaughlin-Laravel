<?php

class PageController extends \BaseController {

	/**
	 * Display the specified resource.
	 *
	 * @param  string  $path
	 * @return Response
	 */
	public function show($path)
	{
		//dd($path);
		$page = Page::where('slug', '=', $path)->firstOrFail();

		Return View::make($page->view)->withPage($page);

	}

}
