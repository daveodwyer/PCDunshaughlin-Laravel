<?php

class Page extends Eloquent {


	/**
	*	Function used to return pages and their paths, in order
	*
	*	@return array
	*/
	public static function getNavigation() {

		$navigation = [];

		$pagesForNavigation = self::where('show_in_nav', '=', 'yes')->orderBy('nav_order')->get();

		foreach($pagesForNavigation as $page_nav) {
			$navigation[$page_nav->title] = '/' . $page_nav->slug;
		}

		return $navigation;

	}

	/**
	*	 Function used to return numbers between 1 and 10 that haven't already been chosen for a navigation order
	*
	*   @param $max_order - maximum order to return
	*   @param $selected_val - the selected value from the order list
	*	@return array
	*/
	public static function getNavigationOrders($max_order = 10, $selected_val = '') {

		$navigation_orders_taken = [];

		$navigation_orders_taken_orm = self::where('nav_order', '>=', 1)->get();

		foreach($navigation_orders_taken_orm as $order) {
			if($order->nav_order !== $selected_val) {
				$navigation_orders_taken[] = $order->nav_order;	
			}	
		}

		$number_array = [];
		for($i = 1; $i <= $max_order; $i++) {
			$number_array[$i] = $i;
		}

		$navigation_orders = array_diff($number_array, $navigation_orders_taken);

		return $navigation_orders;


	}

	/**
	 * Function used to return validation rules to controller for Page
	 */



}