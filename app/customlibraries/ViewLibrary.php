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

		$files = scandir($full_path);
		
		// unset first and second items, ('.', '..')
		unset($files[0]);
		unset($files[1]);

		if(($key = array_search('includes', $files)) !== false) {
			unset($files[$key]);
		}

		foreach($files as $name => $file) {
			// unset original name
			unset($files[$name]);

			// obtain name from the filename
			$view_title = str_replace('.blade.php', '', $file);
			$view_title = ucfirst($view_title);

			$file = str_replace('.blade.php', '', $file);

			// set new name to the files array
			$files[$sub_path . '.' . $file] = $view_title;
		}


		return $files;


	}

}