<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('pages', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('title')->unique();
			$table->text('content');
			$table->string('view');
			$table->string('path');

			$table->timestamp('created_at')->default(\DB::raw('CURRENT_TIMESTAMP'));
			$table->timestamp('updated_at')->default(\DB::raw('CURRENT_TIMESTAMP'));
		});

		// Insert some stuff
	    DB::table('pages')->insert(
	        array(
	            'title' => 'PCDUNSHAUGHLIN',
	            'view' => 'public.index',
	            'content' => 'hello world!',
	            'path' => 'home'
	        )
	    );
		}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('pages');
	}

}
