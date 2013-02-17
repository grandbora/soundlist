define(function(){
  var Search = Backbone.Model.extend({

    defaults:{
      keyword : ''
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
      if (this.get('keyword') === keyword) return
      this.set('keyword', keyword)
    }
  })

  return Search
})