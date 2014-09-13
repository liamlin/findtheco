/**
 * Created by WillieTran on 9/13/14.
 */
$(document).ready(function() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    $('.email-form').live ("click", function() {
       if(!email.match(re)) {
         alert('invalid email');
         return false;
       }
       $('<div class="submitBg"></div>').appendTo(".emailEditContainer");
       $('<div class="submitLoadingCont"><img class="submitLoading" src="images/mypreferences/loading.gif" width="50" height="50" />    </div>').appendTo(".emailEditContainer");
    });
});