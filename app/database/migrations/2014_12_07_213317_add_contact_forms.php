<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddContactForms extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('contact_forms', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name');
			$table->text('email');
			$table->string('phone');
			$table->string('query');
			$table->integer('year');

			$table->timestamps();
		});
		
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('contact_forms');

	}

}
