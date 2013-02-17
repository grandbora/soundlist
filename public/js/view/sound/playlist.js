define(['view/sound/sound'], function(Sound){
  var Playlist = Sound.extend({

    events: function(){
      return _.extend({}, Sound.prototype.events, {
        'click .removeButton': 'removeFromPlaylist'
      })
    }

   ,removeFromPlaylist: function() {
      this.model.removeFromPlaylist()
      this.remove()
    }

   ,render: function() {
      this.$el.html(this.template(this.model.attributes))
      return this
    }
  })

  return Playlist
})