@extends('public.includes.master')

    @section('additional_header_assets')
		<link rel="stylesheet" href="{{ asset('css/footable.core.min.css') }}" />

		{{ HTML::script('js/FooTable/footable.js') }}
		{{ HTML::script('js/FooTable/footable.filter.js') }}
		{{ HTML::script('js/FooTable/footable.paginate.js') }}
		{{ HTML::script('js/FooTable/footable.plugin.template.js') }}
		{{ HTML::script('js/FooTable/footable.sort.js') }}
		{{ HTML::script('js/footable.custom.js') }}
    @stop

    @section('content')
	<div id="generic-main" class="container">
			<div class="col-xs-12 col-md-12 col-lg-12">
				<h1>{{ $page['title'] }}</h1>
				{{ $page['content'] }}
			</div>
	</div>
	@stop