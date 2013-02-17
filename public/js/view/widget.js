define(function(){
  var Widget = Backbone.View.extend({

    play: function(sound, collection, event) {
      var self = this
      SC.oEmbed(sound.get('permalink_url'), { auto_play: true }, function(oEmbed){
        self.embed.call(self, oEmbed)
      })
    }

   ,embed: function(oEmbed) {
    debugger
      this.$el.html(oEmbed.html)
    }

   ,render: function() {
      return this
    }
  })

  return Widget
})