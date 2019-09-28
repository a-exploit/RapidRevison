from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
import requests
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, mixins, status, viewsets
from youtube_transcript_api import YouTubeTranscriptApi
from rest_framework.decorators import api_view

# class AddMembers(APIView):
#     def post(request,id):
#     	list2=[]
# 		list2=YouTubeTranscriptApi.get_transcript("E8lWqYvdCjQ")
# 		with open('/home/Untitled_2.txt', 'w+') as f:
#     	for item in list2:
#         f.write("%s\n" % item.get("text"))
#         print(request.POST)
#         return Response( status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
def transcript(request):
	if request.method == 'POST':
		list2=[]
		list3=[]
		subs=''
		summary=''
		list2=YouTubeTranscriptApi.get_transcript(request.data.get('id'))
		# with open('/home/Untitled_2.txt', 'w+') as f:
		for item in list2:
			subs=subs+"\n"+item.get("text")
		import requests
		r = requests.post(
		"https://api.deepai.org/api/summarization",
		data={
        	'text': subs,
		},
		headers={'api-key': 'bf8f2858-977c-4111-9331-48a15f4201bd'}
		)
		print(r.json().get('output'))
		summary=r.json().get('output')
		return Response(subs,status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
def summary(request):
	if request.method == 'POST':
		list2=[]
		list3=[]
		subs=''
		summary=''
		list2=YouTubeTranscriptApi.get_transcript(request.data.get('id'))
		# with open('/home/Untitled_2.txt', 'w+') as f:
		for item in list2:
			subs=subs+"\n"+item.get("text")
		import requests
		r = requests.post(
		"https://api.deepai.org/api/summarization",
		data={
        	'text': subs,
		},
		headers={'api-key': 'bf8f2858-977c-4111-9331-48a15f4201bd'}
		)
		print(r.json().get('output'))
		summary=r.json().get('output')
		return Response(summary,status=status.HTTP_200_OK)
@api_view(['GET', 'POST'])
def keywords(request):
	if request.method == 'POST':
		list2=[]
		list3=[]
		subs=''
		summary=''
		list2=YouTubeTranscriptApi.get_transcript(request.data.get('id'))
		# with open('/home/Untitled_2.txt', 'w+') as f:
		for item in list2:
			subs=subs+"\n"+item.get("text")
		import requests
		r = requests.post(
    	"https://api.deepai.org/api/text-tagging",
    	data={
        'text': subs,
    	},
    	headers={'api-key': 'bf8f2858-977c-4111-9331-48a15f4201bd'}
		)
		print(r.json().get('output'))
		keywords=r.json().get('output')
		return Response(keywords,status=status.HTTP_200_OK)