@extends('public.includes.master')

    @section('additional_header_assets')
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
        {{ HTML::script('js/googlemaps.js') }}
    @stop

    @section('content')
        <div id="generic-main" class="container">

            <!-- <form class="form-horizontal"> -->
            {{ Form::open(array('action' => array('contact.store'), 'class' => 'form-horizontal' ) ) }}
                <fieldset>

                    <h1>Contact Us</h1>

                    <!-- Text input-->
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="name">Name:</label>  
                        <div class="col-md-5">
                            <input id="name" name="name" type="text" placeholder="Enter your name" class="form-control input-md" required="">
                        </div>
                    </div>

                    <!-- Text input-->
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="email">Email:</label>  
                        <div class="col-md-5">
                            <input id="email" name="email" type="text" placeholder="Enter your email" class="form-control input-md"> 
                        </div>
                    </div>

                    <!-- Text input-->
                    <div class="form-group">
                      <label class="col-md-4 control-label" for="phone">Contact Number:</label>  
                        <div class="col-md-5">
                            <input id="phone" name="phone" type="text" placeholder="Enter your contact number" class="form-control input-md" required="">
                        </div>
                    </div>

                    <!-- Textarea -->
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="query">Enter your query:</label>
                        <div class="col-md-4">                     
                            <textarea class="form-control" id="query" name="query" placeholder="Enter your query here"></textarea>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-4"></div>
                        <div class="col-md-4">                     
                            <input type="submit" name="submit" value="Send" />
                        </div>
                    </div>

                </fieldset>
            </form>
        </div>
    
    <div class="" style="height:200px" id="map-canvas"></div>
    @stop