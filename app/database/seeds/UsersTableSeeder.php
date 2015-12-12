<?php

class UsersTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('users')->delete();
        
		\DB::table('users')->insert(array (
			0 => 
			array (
				'id' => 1,
				'email' => 'dave@dave.com',
				'password' => '$2y$10$k3bmprXttJJI023x3OIZ/uMsPqaDSInGZkRcDJj4QHfSrvEOrWMKi',
				'remember_token' => '',
				'created_at' => '2015-12-12 00:00:00',
				'updated_at' => '2015-12-12 00:00:00',
			),
		));
	}

}
