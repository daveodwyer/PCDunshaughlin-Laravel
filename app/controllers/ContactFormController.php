<?php

class ContactFormController extends \BaseController {

	/**
	 * Update the specified resource in storage.
	 *
	 * @return Response
	 * @todo Send an email to the email address in the env files
	 */
	public function store()
	{
		// get all inputs
		$input = Input::all();

		// validate data
		$rules = [
			'name' => 'required',
			'email' => 'required|email',
			'query' => 'required',
			'phone' => 'digits_between:4,15'
		];

		$validator = Validator::make($input, $rules);

		if($validator->fails()) {
			return Redirect::back()->withInput()->withErrors($validator);
		}

		// instantiate the contact_form
		$contact_form = new ContactForm();

		// apply the values to the contact_form object
		$contact_form->name = $input['name'];
		$contact_form->email = $input['email'];
		$contact_form->phone = $input['phone'];
		$contact_form->query = $input['query'];
		$contact_form->year = date('Y');

		$mailer = new Mailer();
		$mailer->sendTo('email-dave@hotmail.com', 'PCDunshaughlin Query', 'emails.enquiry', $input);

		// save the contact_form to the db
		if($contact_form->save()) {
			return Redirect::to('/contact_success');
		}

	}

	
}
