define(['text!template/sound.html'], function(template){
  var Sound = Backbone.View.extend({

    template: _.template(template)

   ,events: {
      'click .removeButton': 'removeFromPlaylist'
     ,'click .playButton': 'play'
    }

   ,initialize: function(){
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