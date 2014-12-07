<?php

class ViewLibrary {
	
	public static function getViewListNames() {

		$full_path = app_path().'/views/public/';

		$sub_path = 'public';
 
		if(!is_dir($full_path)) {
			$files = array();
			$files['error'] = 'View path not found!';
			return $files;;

		}

		$available_views = [];

		foreach(File::allFiles($full_path) as $partial) {

			$relative_path = $partial->getRelativePath();

			if($relative_path !== 'includes') {

				$view_file_name = $partial->getRelativePathname();
				$view_file_name = str_replace('.blade.php', '', $view_file_name);
				$view_file_name = $sub_path . '.' . $view_file_name;

				$display_name = explode('.', $view_file_name);
				$display_name = $display_name[1];

				$available_views[$view_file_name] = $display_name;

			}

		}


		return $available_views;


	}

}