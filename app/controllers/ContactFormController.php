<?php

class ContactFormController extends \BaseController {

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function store($id)
	{
		// get all inputs
		$input = Input::all();

		// instatiate the contact_form
		$contact_form = new ContactForm();

		// apply the values to the contact_form object
		$contact_form->title = $input['name'];
		$contact_form->content = $input['email'];
		$contact_form->slug = $input['phone'];
		$contact_form->view = $input['query'];
		$contact_form->show_in_nav = date('Y');


		// save the contact_form to the db
		$contact_form->save();

		// Send an email to the email address in the env files
		
	}


	
}
