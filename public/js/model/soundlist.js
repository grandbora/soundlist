define(['model/sound'], function(Sound){
  Soundlist = Backbone.Collection.extend({

    model: Sound
    
   ,getCurrentPlaying: function() {
      var playing = this.where({isPlaying: true})
      if (0 === playing.length) return
      return playing[0]
    }

   ,clearSearchResults: function() {
      var searchResults = this.where({type: Sound.TYPE.SEARCHRESULT})
      this.remove(searchResults)
    }

   ,fill: function(searchModel, keyword) {

    }

  })

  return Soundlist
})