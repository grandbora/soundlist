require.config({
  urlArgs: 'bust=' +  (new Date()).getTime(), // for dev, remove on prod //BDNF
  paths: {
    domReady: 'vendor/require-domReady',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
    jqueryUI: '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/jquery-ui.min',
  },
  shim: {
    'jqueryUI': {
        deps: ['jquery']
    },
    'backbone': {
        deps: ['underscore', 'jquery']
    }
  }
})

require(['app', 'backbone', 'jqueryUI'], function(App){
  'use strict'

  $(function() {
    var app = new App()
    app.start()
  })
})