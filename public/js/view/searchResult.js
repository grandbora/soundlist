define(['view/sound/searchResult'],function(SoundView){
  var SearchResult = Backbone.View.extend({

    initialize: function(){
      this.listenTo(this.collection, {
       'add': this.addItem
      ,'change:type': this.removeFromSearchResults
      })
    }

   ,addItem: function(addedModel, collection, event) {
      var view = new SoundView({model: addedModel})
      this.$el.append(view.$el)
    }

    ,removeFromSearchResults: function(changedModel, collection, event) {
      changedModel.trigger('removeFromSearchResults')
    }

   ,render: function() {
      return this
    }
  })

  return SearchResult
})