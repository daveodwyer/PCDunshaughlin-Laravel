@extends('admin.template')

@section('content')

	<div class="alert-box admin-title">
		<h3>Add a Page</h3>
	</div>


	<div class="large-11 small-11 small-centered columns large-centered">

		{{ Form::open(['route' => 'admin.page.store']) }}

			<div class="row">
				<div class="small-3 large-2 columns">
					{{ Form::label('Enter a Title:') }}
				</div>
				<div class="small-9 large-10 columns">
					{{ Form::text('title') }}
				</div>
			</div>

			<div class="row">
				<div class="small-3 large-2 columns">
					{{ Form::label('Enter your content')}}
				</div>
				<div class="small-9 large-10 columns">
					{{ Form::textarea('content', null, ['name' => 'content']) }}
				</div>
			</div>

			<br />

			<div class="row">
				<div class="small-3 large-2 columns">
					{{ Form::label('Choose a view')}}
				</div>
				<div class="small-9 large-10 columns">
					{{ Form::select('view', ViewLibrary::getViewListNames() ) }}
				</div>
			</div>

			<div class="row">
				<div class="small-3 large-2 columns">
					{{ Form::label('Enter a slug')}}
				</div>
				<div class="small-9 large-10 columns">
					{{ Form::text('slug') }}
				</div>
			</div>

			<div class="row">
				<div class="small-3 large-2 columns">
					{{ Form::label('Show in Navigation?')}}
				</div>
				<div class="small-9 large-10 columns">
					{{ Form::select('show_in_nav', ['no' => 'No', 'yes' => 'Yes'] ) }}
				</div>
			</div>

			<div class="row">
				<div class="small-3 large-2 columns">
					{{ Form::label('Show in Navigation?')}}
				</div>
				<div class="small-9 large-10 columns">
					{{ Form::select('nav_order', Page::getNavigationOrders() ) }}
				</div>
			</div>
		{{ Form::submit('Add Page', ['class' => 'alert-box success right']) }}
		{{ Form::close()}}
	</div>
@endsection