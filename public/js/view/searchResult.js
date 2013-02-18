define(['view/sound/searchResult'],function(SoundView){
  var SearchResult = Backbone.View.extend({

    tagName: 'ul'
   ,className: 'ui-sortable'
   ,id: 'sortable'

   ,initialize: function(){
      this.listenTo(this.collection, {
       'add': this.addItem
      })
    }

   ,addItem: function(addedModel, collection, event) {
      var view = new SoundView({model: addedModel})
      this.$el.append(view.$el)
    }

   ,render: function() {
      return this
    }
  })

  return SearchResult
})