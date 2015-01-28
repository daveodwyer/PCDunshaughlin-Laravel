@extends('admin.template')

@section('content')

	<div class="alert-box admin-title">
		<h3>Add a Page</h3>
	</div>


	<div class="large-11 small-11 small-centered columns large-centered">

		{{ Form::open(['route' => 'admin.page.store', 'id' => 'page_form']) }}

			<div class="row">
				<div class="small-3 large-2 columns">
					{{ Form::label('Enter a Title:') }}
				</div>
				<div class="small-9 large-10 columns">
					{{ Form::text('title') }}
					{{ errors_for('title', $errors ) }}
				</div>
			</div>

			<div class="row">
				<div class="small-3 large-2 columns">
					{{ Form::label('Enter your content')}}
				</div>
				<div class="small-9 large-10 columns">
					{{ Form::textarea('content', null, ['name' => 'content']) }}
					{{ errors_for('content', $errors ) }}

				</div>
			</div>

			<br />

			<div class="row">
				<div class="small-3 large-2 columns">
					{{ Form::label('Choose a view')}}
				</div>
				<div class="small-9 large-10 columns">
					{{ Form::select('view', ViewLibrary::getViewListNames() ) }}
					{{ errors_for('view', $errors ) }}

				</div>
			</div>

			<div class="row">
				<div class="small-3 large-2 columns">
					{{ Form::label('Enter a slug')}}
				</div>
				<div class="small-9 large-10 columns">
					{{ Form::text('slug') }}
					{{ errors_for('slug', $errors ) }}

				</div>
			</div>

			<div class="row">
				<div class="small-3 large-2 columns">
					{{ Form::label('Show in Navigation?')}}
				</div>
				<div class="small-9 large-10 columns">
					{{ Form::select('show_in_nav', ['no' => 'No', 'yes' => 'Yes'], null, ['id' => 'show_in_nav'] ) }}
				</div>
			</div>

			<div class="row" id="nav_order">
				<div class="small-3 large-2 columns">
					{{ Form::label('Navigation Order')}}
				</div>
				<div class="small-9 large-10 columns">
					{{ Form::select('nav_order', Page::getNavigationOrders() ) }}
				</div>
			</div>
		{{ Form::submit('Add Page', ['class' => 'alert-box success right']) }}
		{{ Form::close()}}
	</div>
@endsection

@section('footer_scripts')

	{{ HTML::script('admin-assets/js/custom.admin.pages.js') }}

@endsection