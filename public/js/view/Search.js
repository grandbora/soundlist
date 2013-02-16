define(function(){
  var Search = Backbone.View.extend({

    template: _.template('search')

   ,render: function() {
      this.$el.html(this.template())
      return this
    }
  })

  return Search
})