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

    // Post request we need to make to add an e-mail to our list:
    // curl -X POST https://sendgrid.com/api/newsletter/lists/email/add.json -d api_user=findtheco -d api_key=XXXXXXXX -d list=FindTheCoPre-launchList -d data={"email":"willie@gmail.com"}

    $('.submit-btn').on('click', function(){
        validate();
        var url = "https://sendgrid.com/api/newsletter/lists/email/add.json";
        var api_user = "findtheco";
        var api_key = "willie1026";
        var list = "FindTheCoPre-launchList";
        var data = {"email":$('.email-form').val()};
        var emailInfo = {"api_user": api_user, "api_key": api_key, "list":list, "data": data};
        var emailInfoJSON = JSON.stringify(emailInfo);
        $.ajax ({
            url: url,
            type: "POST",
            crossDomain: true,
            dataType: "json",
            data: emailInfoJSON,
            success: function(response) {
                console.log(response);
            },
            error: function(response) {
                console.log("This is not good");
            }
        });
        return false;
    })
});