require.config({
  urlArgs: 'bust=' +  (new Date()).getTime() // for dev, remove on prod //BDNF
 ,paths: {
    underscore: 'vendor/underscore'
   ,backbone: 'vendor/backbone'
   ,jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min'
   ,jqueryUI: '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/jquery-ui.min'
   ,soundcloud: '//connect.soundcloud.com/sdk'
   ,text: 'vendor/text'
  },
  shim: {
    'jqueryUI': {
      deps: ['jquery']
    }
   ,'backbone': {
      deps: ['underscore', 'jquery']
    }
   ,'app': {
      deps: ['backbone', 'jqueryUI', 'soundcloud', 'text']
    }
  }
})

require(['app'], function(App){
  'use strict'

  SC.initialize({
    client_id: "YOUR_CLIENT_ID",
    redirect_uri: "http://example.com/callback.html",
  });
  
  var app = new App()
  
  $(function() {
    app.start()
  })
})