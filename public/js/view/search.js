define(['text!template/search.html'], function(template){
  var Search = Backbone.View.extend({

    template: _.template(template)

   ,initialize: function(){
      this.listenTo(this.model, 'updateKeyword', this.updateKeyword)
    }

   ,updateKeyword: function(){
      this.model.set('keyword', this.getKeyword())
    }

   ,getKeyword: function(){
      return this.$el.find('.searchBox input').val()
    }

   ,render: function() {
      this.$el.html(this.template())
      return this
    }
  })

  return Search
})