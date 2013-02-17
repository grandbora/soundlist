define(function(){
  var Sound = Backbone.Model.extend({

    defaults: function(){
      return {
        type: Sound.TYPE.SEARCHRESULT
       ,isPlaying: false   
      }
    }

   ,play:function () {
      this.set('isPlaying', true)
    }

   ,stop:function () {
      this.set('isPlaying', false, {silent: true})
    }

   ,addToPlaylist:function () {
      this.set('type', Sound.TYPE.PLAYLIST)
    }

  }, {
    TYPE:{
      PLAYLIST : 'TYPE_PLAYLIST'
     ,SEARCHRESULT : 'TYPE_SEARCHRESULT'
    }
  })

  return Sound;
})