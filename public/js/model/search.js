define(function(){
  var Search = Backbone.Model.extend({

    defaults:{
      lastKeyword : ''
     ,interval : null
    }

   ,startPolling: function(){
      var interval = setInterval((function(self) {
        return function() {
          self.trigger('checkKeyword')
        }
      } )(this), 500)

      this.set('interval', interval)
    }

   ,checkKeyword: function(keyword){
      if (this.get('lastKeyword') === keyword) return
      this.set('lastKeyword', keyword)
    }
  })

  return Search
})