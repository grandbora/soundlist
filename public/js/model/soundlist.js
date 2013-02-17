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

    ,fillSearchResults: function(keyword) {
      SC.get('/tracks', { q: keyword}, (function(self) {
        return function(tracks){
          _.each(tracks, self.addSound, self);
        }
      } )(this))
    }

   ,resetSearchResults: function(searchModel, keyword) {
      this.clearSearchResults()
      this.fillSearchResults(keyword)
    }

   ,addSound: function(track) {
      this.add(new this.model(track))
    }
  })

  return Soundlist
})