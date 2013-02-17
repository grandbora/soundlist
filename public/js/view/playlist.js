define(['model/sound', 'view/sound/playlist'],function(Sound, SoundView){
  var Playlist = Backbone.View.extend({

    initialize: function(){
      this.listenTo(this.collection, {
       'change:type': this.resetItem
      })
    }

    ,resetItem: function(changedModel, collection, event) {
      switch (changedModel.get('type'))
      {
        case Sound.TYPE.PLAYLIST:
          this.addItem(changedModel)
          break;
        case Sound.TYPE.SEARCHRESULT:
        this.removeItem(changedModel)
          break;
      }
    }

   ,addItem: function(changedModel) {
      var view = new SoundView({model: changedModel})
      this.$el.append(view.$el)
    }

   ,removeItem: function(changedModel) {
    this.collection.remove(changedModel)
    }

   ,render: function() {
      return this
    }
  })

  return Playlist
})