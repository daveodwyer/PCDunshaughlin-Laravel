$(document).ready(function() {

    if($('#page_form').length > 0) {

        showHideNavOrder();

        $('#show_in_nav').change(function() {

            showHideNavOrder();

        });

    }

});

function showHideNavOrder() {

    if($('#show_in_nav').val() == 'yes') {

        $('#nav_order').show();

    } else {

        $('#nav_order').hide();
    }

}
