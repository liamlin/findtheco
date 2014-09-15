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
        var thanks = $('.thanks');
        if (validateEmail(email)) {
            $('#email-form').css('display', 'none');
            thanks.addClass('animated flipInX');
            thanks.css('display', 'inline-block');
        } else {
            emailInput.addClass('animated shake');
            button.addClass('animated shake');
            emailInput.css('background-color', '#e2373f');
            emailInput.css('border-color', '#e2373f');
        }
    }

    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

    $('.submit-btn').on('click', function(){
        validate();
        var url = "/subscribe/";
        var emailInfo = {"email":$('.email-form').val()};
        $.ajax ({
            url: url,
            type: "POST",
            data: emailInfo,
            success: function(response) {
                console.log(response);
            },
            error: function(response) {
                console.log("This is not good");
                console.log(response);
            }
        });
        return false;
    })
});