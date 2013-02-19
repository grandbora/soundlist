define(['text!template/sound.html'], function(template){

  /**
  * Parent view for the sounds
  */
  var Sound = Backbone.View.extend({

    tagName: "li"
   ,className: "ui-state-highlight"
   ,template: _.template(template)

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