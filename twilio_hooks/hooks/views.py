from django.http import HttpResponse
from django.shortcuts import render, HttpResponseRedirect, redirect
from twilio_send_sms import send_msg
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods, require_POST
def index(request):
    return render(request, 'index.html')


def ingress(request):
    print request
    if request.method == 'POST':
        message = request.POST.get("Body")
        number = request.POST.get("")
        #send data to js server
        #push


    # todo send post request to requered place with data
    # get data from twilio_send_sms hook
    print "foo"

@csrf_exempt
def egress(request):
    if request.method == 'POST':
        print request.POST
        target_number = request.POST.get("target_number")
        message_body = request.POST.get("message")
        print target_number
        print message_body
        send_msg.send(target_number=target_number, message_body=message_body)

    else:
        print "non post request"
    # return HttpResponseRedirect('/')
    return HttpResponse("askdha")