define(function(){
  var Search = Backbone.Model.extend({

    defaults:{
      keyword : ''
     ,interval : null
    }

   ,startPolling: function(){
      var interval = setInterval((function(self) {
        return function() {
          self.trigger('updateKeyword')
        }
      } )(this), 500)

      this.set('interval', interval)
    }
  })

  return Search
})