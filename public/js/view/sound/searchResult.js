define(['text!template/sound/searchResult.html'], function(template){
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

   ,addToPlaylist: function() {
      this.model.addToPlaylist()
      this.remove()
    }

   ,play: function() {
      this.model.play()
    }

   ,render: function() {
      this.$el.html(this.template(this.model.attributes))
      return this
    }
  })

  return Sound
})