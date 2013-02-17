define(['text!template/sound.html'], function(template){
  var Sound = Backbone.View.extend({

    template: _.template(template)

   ,events: {
      'click .addButton': 'addToPlaylist'
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

   ,addToPlaylist: function() {
      this.model.addToPlaylist()
      this.remove()
    }

   ,render: function() {
      this.$el.html(this.template(this.model.attributes))
      return this
    }
  })

  return Sound
})