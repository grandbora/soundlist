define(['model/sound'], function(Sound){
  Soundlist = Backbone.Collection.extend({

    model: Sound
    
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