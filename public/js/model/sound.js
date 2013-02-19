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

   ,saveToLocalData:function () {
      currentList = localStorage.getItem('bookmarked')
      localStorage.setItem('bookmarked', (currentList ? currentList + ',' : '') + this.get('id'))
    }

   ,removeFromPlaylist:function () {
      this.set('type', Sound.TYPE.SEARCHRESULT, {silent: true})
    }

  }, {
    TYPE:{
      PLAYLIST : 'TYPE_PLAYLIST'
     ,SEARCHRESULT : 'TYPE_SEARCHRESULT'
    }
  })

  return Sound;
})