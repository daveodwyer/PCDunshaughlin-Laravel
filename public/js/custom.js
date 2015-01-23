$(document).ready(function() {

    if($('#contact-form').length > 0) {

        $('#contact-form').validate({

            rules: {
                name : 'required',
                email : {
                    'required' : true,
                    'email' : true
                },

                query : 'required'

            },

            messages: {

                name : 'Please enter your name',
                email : {
                    'required' : 'Please enter your email address',
                    'email' : 'Please enter a valid email address'
                },

                query : 'Please enter a query'

            },

            errorPlacement: function(error, element) {
                var element_id = $(element).attr('id');
                error.prependTo(element.parent('div'));
            },

            invalidHandler: function(event, validator) {

                var errors = validator.numberOfInvalids();
                if(errors) {
                    return false;
                }

            }

        });


    }

});