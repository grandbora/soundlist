define(['view/sound/sound'], function(Sound){

  /**
  * View for the sounds in the playlist
  */
  var Playlist = Sound.extend({

    events: function(){
      return _.extend({}, Sound.prototype.events, {
        'click .removeButton': 'removeFromPlaylist'
      })
    }

    /**
    * Removes sound from playlist
    */
   ,removeFromPlaylist: function() {
      this.model.removeFromPlaylist() //TODO : here the id should be deleted from the local storage
      this.remove()
    }

   ,render: function() {
      this.$el.html(this.template(this.model.attributes))
      return this
    }
  })

  return Playlist
})