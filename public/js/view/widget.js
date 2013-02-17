define(function(){
  var Widget = Backbone.View.extend({

    play: function(sound, collection, event) {
      this.stop()
      this.model = sound

      var self = this
      SC.oEmbed(sound.get('permalink_url'), { auto_play: true }, function(oEmbed){
        self.embed.call(self, oEmbed)
      })
    }

   ,stop: function(oEmbed) {
      if(this.model) this.model.stop()
    }

   ,embed: function(oEmbed) {
      this.$el.html(oEmbed.html)
    }

   ,render: function() {
      return this
    }
  })

  return Widget
})