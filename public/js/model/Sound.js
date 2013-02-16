Sound = Backbone.Model.extend({

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
    this.set('isPlaying', false)
  }

 ,addToPlaylist:function () {
    this.set('type', Sound.TYPE.PLAYLIST)
  }

 ,removeFromPlaylist:function () {
    this.set('type', Sound.TYPE.SEARCHRESULT)
  }

}, {

  TYPE:{
    PLAYLIST : 'TYPE_PLAYLIST'
   ,SEARCHRESULT : 'TYPE_SEARCHRESULT'
  }
})