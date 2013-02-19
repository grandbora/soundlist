define(['model/sound'], function(Sound){
  Soundlist = Backbone.Collection.extend({

    model: Sound

   ,getLocalData: function() {
      return localStorage.getItem('bookmarked')
    }

   ,loadLocalData: function() {
      var ids = this.getLocalData()
      if (null == ids) return

      SC.get('/tracks', { ids: ids}, (function(self) {
        return function(tracks){
          _.each(tracks, self.addPlaylistItem, self);
        }
      } )(this))

    }

   ,getPlaylistItems: function() {
      return this.where({type: Sound.TYPE.PLAYLIST})
    }

   ,getSearchResultItems: function() {
      return this.where({type: Sound.TYPE.SEARCHRESULT})
    }

   ,resetSearchResults: function(searchModel, keyword) {
      this.clearSearchResults()
      this.fillSearchResults(keyword)
    }
    
   ,clearSearchResults: function() {
      var searchResults = this.getSearchResultItems()
      this.remove(searchResults)
    }

   ,fillSearchResults: function(keyword) {
      SC.get('/tracks', { q: keyword}, (function(self) {
        return function(tracks){
          _.each(tracks, self.addSound, self);
        }
      } )(this))
    }

   ,addPlaylistItem: function(track) {
      var playlistItem = new this.model(track)
      this.add(playlistItem, {silent : true})
      playlistItem.addToPlaylist()
    }

   ,addSound: function(track) {
      this.add(new this.model(track))
    }
  })

  return Soundlist
})