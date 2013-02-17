define(['text!template/sound.html'], function(template){
  var Sound = Backbone.View.extend({

    template: _.template(template)

   ,events: {
      'click .playButton': 'play'
    }

   ,initialize: function(){
      this.render()
    }

   ,play: function() {
      this.model.play()
    }
  })

  return Sound
})