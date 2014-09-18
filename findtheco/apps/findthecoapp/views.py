import requests, json

from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import render
from django.conf import settings
from django.views.decorators.csrf import ensure_csrf_cookie


@ensure_csrf_cookie
def home(request):
    return render(request, 'landing2.html')


def collect_mail(request):
    """
    This view collects the email sent from the landing page and
    add the email to our subscription list via SendGrid's API
    """
    if request.method == "POST":
        api_user = settings.SENDGRID_APIUSER
        api_key = settings.SENDGRID_APIKEY
        if api_user and api_key:
            mail_list = "FindTheCoPre-launchList"
            email = request.POST.get("email")
            if not email:
                return HttpResponseBadRequest(content="Email address is not valid")

            payload = { "api_key": api_key, "api_user": api_user, "list": mail_list,
                        "data": json.dumps({"email": email, "name": email})}
            r = requests.post("https://sendgrid.com/api/newsletter/lists/email/add.json", data=payload)
            return HttpResponse(content=r.text, status=r.status_code)
        else:
            # local environment, skip calling the sendgrid API
            return HttpResponse(status=200)
    else:
        return HttpResponse(status=405)