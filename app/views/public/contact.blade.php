@extends('public.includes.master')

    @section('content')
        <div id="generic-main" class="container">

            <!-- <form class="form-horizontal"> -->
            {{ Form::open(array('action' => array('contact.store'), 'id' => 'contact-form', 'class' => 'form-horizontal' ) ) }}
                <fieldset>

                    <h1>Contact Us</h1>

                    <!-- Text input-->
                    <div class="form-group">
                        {{ Form::label('name', 'Name:') }}
                        {{ Form::text('name', Input::old('name'), ['class' => 'form-control', 'placeholder' => 'Enter your name']) }}
                        {{ errors_for('name', $errors ) }}
                    </div>

                    <!-- Text input-->
                    <div class="form-group">
                        {{ Form::label('email', 'Email:') }}
                        {{ Form::text('email', Input::old('email'), ['class' => 'form-control', 'placeholder' => 'Enter your email']) }}
                        {{ errors_for('email', $errors ) }}
                    </div>

                    <!-- Text input-->
                    <div class="form-group">
                        {{ Form::label('phone', 'Contact Number:') }}
                        {{ Form::text('phone', Input::old('phone'), ['class' => 'form-control', 'placeholder' => 'Enter your contact number']) }}
                        {{ errors_for('phone', $errors ) }}
                    </div>

                    <!-- Textarea -->
                    <div class="form-group">
                        {{ Form::label('query', 'Enter your Query:') }}
                        {{ Form::textarea('query', Input::old('query'), ['class' => 'form-control', 'placeholder' => 'Enter your query']) }}
                        {{ errors_for('query', $errors ) }}
                    </div>

                    <!-- Submit -->
                    <div class="form-group">
                        {{ Form::submit('Submit', ['class' => 'btn btn-primary']) }}
                    </div>

                </fieldset>
            </form>
        </div>
    
    <div class="" style="height:200px" id="map-canvas"></div>
    @stop


@section('additional_footer_assets')
    {{ HTML::script('js/jquery.validate.min.js') }}
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
    {{ Minify::javascript('/js/googlemaps.js') }}
@stop