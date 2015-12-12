<?php

class ContactFormsTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('contact_forms')->delete();
        
		\DB::table('contact_forms')->insert(array (
			0 => 
			array (
				'id' => 1,
				'name' => 'Dave',
				'email' => 'dave@dave.com',
				'phone' => '234234',
				'query' => 'This is my query!',
				'year' => 2015,
				'created_at' => '2015-01-28 01:10:05',
				'updated_at' => '2015-01-28 01:10:05',
			),
			1 => 
			array (
				'id' => 2,
				'name' => 'Dave',
				'email' => 'dave@dave.com',
				'phone' => '234234',
				'query' => 'This is my query!',
				'year' => 2015,
				'created_at' => '2015-01-28 01:10:36',
				'updated_at' => '2015-01-28 01:10:36',
			),
			2 => 
			array (
				'id' => 3,
				'name' => 'dave',
				'email' => 'dave@dave.com',
				'phone' => '234234',
				'query' => 'dave',
				'year' => 2015,
				'created_at' => '2015-01-28 01:23:57',
				'updated_at' => '2015-01-28 01:23:57',
			),
		));
	}

}
