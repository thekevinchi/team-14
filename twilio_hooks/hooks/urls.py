from django.conf.urls import url, patterns

from hooks import views

urlpatterns = patterns('',
                       url(r'^$', views.index),
                       url(r'^egress/$', views.egress, name="egress"),
                       url(r'^ingress/$', views.ingress),
                       )
