Sound = Backbone.Model.extend({

  TYPE:{
    PLAYLIST : 'TYPE_PLAYLIST'
   ,SEARCHRESULT : 'TYPE_SEARCHRESULT'
  }
  
  ,defaults: function(){
    return {
      type: this.TYPE.SEARCHRESULT
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
    this.set('type', this.TYPE.PLAYLIST)
  }

 ,removeFromPlaylist:function () {
    this.set('type', this.TYPE.SEARCHRESULT)
  }

})