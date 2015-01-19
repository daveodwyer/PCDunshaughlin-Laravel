<!DOCTYPE>
<html>
	<head>
		<title>{{ $page->title }} | PCDunshaughlin</title>
		<link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}" />
		{{ Minify::stylesheet('/css/custom.css') }}
		<link rel="stylesheet" href="{{ asset('css/owl.carousel.css') }}" />
		{{ HTML::script('js/jquery-1.11.1.min.js') }}
		{{ HTML::script('js/bootstrap.min.js') }}
		{{ Minify::javascript(array('/js/owl.carousel.js', '/js/custom.js')) }}

		@yield('additional_header_assets')

	</head>

	<body>
		<!-- THANKS FOR PEEKING! :) -->
	    <nav class="navbar navbar-inverse navbar-static-top" role="navigation">
	      <div class="container">
	        <div class="navbar-header">
		          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		            <span class="sr-only">Toggle navigation</span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		          </button>
		          <a class="navbar-brand" href="/"><img class="img-responsive" src="{{ asset('imgs/pc-logo.png') }}" /></a> 

	        </div>

	        <div id="navbar" class="collapse navbar-collapse">
	          <ul class="nav navbar-nav">
	          	@foreach( Page::getNavigation() as $page_name => $path )
	          		<li><a href="{{ $path }}">{{ $page_name }}</a></li>
	          	@endforeach
	            <!-- <li class="active"><a href="#">Home</a></li>
	            <li><a href="">About</a></li>
	            <li><a href="">Services and Pricing</a></li>
	            <li><a href="">Location</a></li>

	            <li><a href="">Contact</a></li>
	            -->
	          </ul>
	        </div><!--/.nav-collapse -->
	      	<script>
	      	
      		$(document).ready(function() {
      			      		positionFB();

      		});

	      </script>
	      </div>
	    </nav>

	    <div class="clearfix"></div>

	    @yield('content')


		<div id="footer">

			<div class="container">

				<div id="footer-icons">

					<div id="built-with" class="col-lg-6 col-md-1 col-sm-6 ">
						<a href="http://www.laravel.com" target="_BLANK" alt="Laravel Link"><img alt="Built with love using Laravel" src=" {{ asset('/imgs/laravel-logo.png') }}"/></a>
						<!-- Hi there! This site was built and designed with Bootstrap and Laravel by Dave O'Dwyer :: http://daveodwyer.ie -->
					</div>

					<div id="social-icons" class="col-lg-1 col-md-1 col-sm-6 col-lg-offset-5">
						<a href="#facebook"><img src="{{ asset('imgs/facebook_footer.png')}}" alt="PCDunshaughlin Facebook Page" /></a>
					</div>

				</div>

			</div>

		</div>

		<div id="fb-root"></div>
		<script>(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.0";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));</script>
	</body>
</html>

	      	<!-- <div class="fb-like fb-like-desktop" data-href="http://www.pcdunshaughlin.com" data-layout="box_count" data-action="like" data-show-faces="true" data-share="true"></div> -->