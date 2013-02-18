define(['view/sound/playlist'],function(SoundView){
  var Playlist = Backbone.View.extend({

    tagName: 'ul'
   ,className: 'ui-sortable'
   ,id: 'sortable'

   ,initialize: function(){
      this.listenTo(this.collection, {
       'change:type': this.addItem
      })
    }

   ,addItem: function(changedModel, collection, event) {
      var view = new SoundView({model: changedModel})
      this.$el.append(view.$el)
    }

   ,render: function() {
      this.$el.sortable()
      this.$el.disableSelection()
      return this
    }
  })

  return Playlist
})