define(['text!template/sound/playlist.html'], function(template){
  var Sound = Backbone.View.extend({

    template: _.template(template)

   ,events: {
      'click .removeButton': 'removeFromPlaylist'
     ,'click .playButton': 'play'
    }

   ,initialize: function(){
      this.listenTo(this.model, {
        'remove': this.remove
      })

      this.render()
    }

   ,play: function() {
      this.model.play()
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

  return Sound
})