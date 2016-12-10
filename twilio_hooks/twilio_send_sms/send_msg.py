# Download the twilio-python library from http://twilio.com/docs/libraries
from twilio.rest import TwilioRestClient
from keys import account_sid, auth_token, out_number


def send(target_number, message_body):
    client = TwilioRestClient(account_sid, auth_token)
    message = client.messages.create(to=target_number, from_=out_number, body=message_body)
