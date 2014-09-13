/**
 * Created by WillieTran on 9/13/14.
 */
$(document).ready(function() {

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validate() {
        var emailInput = $('.email-form');
        var email = emailInput.val();
        var button = $('.submit-btn');
        if (validateEmail(email)) {

        } else {
            emailInput.addClass('animated shake');
            button.addClass('animated shake');
            emailInput.css('background-color', '#e2373f');
        }
    }

    $('.submit-btn').on('click', function(){
        validate();
        return false;
    })
});