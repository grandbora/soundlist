define(function(){
  var Playlist = Backbone.View.extend({
  
    template: _.template('AA')

   ,render: function() {
      this.$el.html(this.template())
      return this
    }
  })

  return Playlist
})