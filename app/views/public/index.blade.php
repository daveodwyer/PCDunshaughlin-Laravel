@extends('public.includes.master')

    @section('additional_header_assets')
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
        {{ HTML::script('js/googlemaps.js') }}
    @stop

    @section('content')
    	<div class="container">
			<div id="homepage-main">
					<div class="col-xs-12 col-md-6 col-lg-6" id="homepage-featured-txt">
						<h1>{{ $page['title'] }} </h1>
						{{ $page['content'] }}

						<a class="btn btn-primary" id="services-btn">View our Services</a>
					</div>

					<div class="col-xs-12 col-md-6 col-lg-6">
						
						<div id="img-container">          
						  	<div class="item">
						  		<img src="http://www.pcdunshaughlin.com/wp-content/uploads/2014/03/ID-10094995-Custom.jpg" alt="">
						  	</div>
							
							<div class="item">
						  		<img src="http://www.pcdunshaughlin.com/wp-content/uploads/2014/03/ID-10094995-Custom.jpg" alt="">
						  	</div>

						  	<div class="item">
						  		<img src="http://www.pcdunshaughlin.com/wp-content/uploads/2014/03/ID-10094995-Custom.jpg" alt="">
						  	</div>
							
							<div class="item">
						  		<img src="http://www.pcdunshaughlin.com/wp-content/uploads/2014/03/ID-10094995-Custom.jpg" alt="">
						  	</div>

						</div>
					</div>
			</div>
		</div>


		<div class="container">
			    <div class="col-lg-12" style="height:200px" id="map-canvas"></div>
		</div>
	@stop