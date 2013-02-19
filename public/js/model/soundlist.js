define(['model/sound'], function(Sound){
  Soundlist = Backbone.Collection.extend({

    model: Sound

   ,getPlaylistItems: function() {
      return this.where({type: Sound.TYPE.PLAYLIST})
    }

   ,getSearchResultItems: function() {
      return this.where({type: Sound.TYPE.SEARCHRESULT})
    }

   ,listenLocalData: function() {
      this.loadById(this.getLocalData())

      $(window).bind('storage', (function(self) {
        return function (e) {
          self.handleNewLocalData(e)
        }
      })(this))
    }

   ,getLocalData: function() {
      return localStorage.getItem('bookmarked')
    }

   ,getNewData: function() {
      return this.getLocalData().split(',').pop()
    }

   ,handleNewLocalData: function(e) {
      this.loadById(this.getNewData())
    }

   ,loadById: function(ids) {
      if (null == ids) return

      SC.get('/tracks', { ids: ids}, (function(self) {
        return function(tracks){
          _.each(tracks, self.addPlaylistItem, self);
        }
      } )(this))
    }

   ,addPlaylistItem: function(track) {
      var playlistItem = new this.model(track)
      this.add(playlistItem, {silent : true})
      playlistItem.addToPlaylist()
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
          _.each(tracks, self.addSearchResultItem, self);
        }
      } )(this))
    }

   ,addSearchResultItem: function(track) {
      this.add(new this.model(track))
    }
  })

  return Soundlist
})