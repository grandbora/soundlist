require.config({
  //urlArgs: globalConfig.isDev ? 'bust=' +  (new Date()).getTime() : undefined
  urlArgs: 'bust=' +  (new Date()).getTime() //BDNF
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
    client_id: globalConfig.soundcloud.clientId
   ,redirect_uri: globalConfig.soundcloud.callbackUrl
  });

  var app = new App()
  
  $(function() {
    app.start()
  })
})