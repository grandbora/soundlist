#Soundlist, a SoundCloud api hack
--
This small app lets you to build a listening queue with any soundcloud tracks.

####Discover tracks 
You can make a keyword search in soundcloud via the gui.   
You can also bookmark the link provided in the gui and use that link on any soundcloud track page (eg. [https://soundcloud.com/{username}/{trackname}](https://soundcloud.com/jjmac047/tron-mix-5)) to store it to your soundlist.

####We don’t keep you waiting 
Your sounds will be added to your list immediately! Just open another window/tab and see it in action.

####We care about your privacy 
You don’t have to login and we don’t store any information on our servers. All your data is stored on your browser.

####Use the app on any device 
We actually did not test this and therefore <b>you can</b> ! If soundlist is not working on your favourite device/browser, try it on your next favourite device/browser. Keep on trying, in one of them it will work. We promise !

####You can’t wait to lay hands on your soundlist
Go to [http://soundlist.herokuapp.com/](http://soundlist.herokuapp.com/) now, and wait until heroku boots up the single web server instance.  

--

You found a “[feature](http://www.troll.me/images/futurama-fry/not-sure-if-its-a-bug-or-a-feature.jpg)” ; report to us at [https://github.com/grandbora](https://github.com/grandbora).   

<b>todos ;  </b>    
as said app is not tested on mobile devices,    
reordering of the soundlist is not persisted to local storage, meaning page refresh creates the list based on the order that is returned by the api,    
ahem, same as reordering; deleting a sound from the soundlist is also not persisted.     
This a critical (cough cough) bug, I am sorry (that is the only excuse I have :) ),    
I tried to implement it in a tdd fashion but had gave to up after first evening, there are still some tests on [/testrunner](http://soundlist.herokuapp.com/testrunner) page,    

<b>under the hood ; </b>    
This is a client side application, backend is used only for serving the assets and the initial page elements. Also for the bookmarklet, a tiny logic is written to backend to make life easier. Backend is built on sinatra.   
Clientside is built with backbone, dom stuff is done with jquery and jqueryui. Since there wasn’t much complexity in the app (no routers etc.), I did not use a framework like chaplin or marionette.   
Soundlist is stored in localstorage, app listens the changes on the local storage therefore it is able sync it self, when a new sound is added either via bookmarklet or via another instance of the app on another window/tab.  
I hope the code is clear enough for another developer to dive in.  

[Are you still reading?](http://cdn.hsmemes.com/2012/3/21/067134281d161892c37f5f150815c66b.jpg) Then have a look at [MashTube](http://mashtube.herokuapp.com/) [<sub>repo</sub>](https://github.com/grandbora/mashtube)   
