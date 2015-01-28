$(document).ready(function() {

    if($('#contact-form').length > 0) {

        $('#contact-form').validate({

            errorLabelContainer: "#error-cont ol",
            wrapper: 'li',
            onfocusout: false,
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

            }

        });

    }

});