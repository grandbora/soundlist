define(['view/sound/sound'], function(Sound){

  /**
  * View for the sounds in the search results
  */
  var SearchResult = Sound.extend({

    className: "ui-state-active"

   ,events: function(){
      return _.extend({}, Sound.prototype.events, {
        'click .addButton': 'addToPlaylist'
      })
    }

   ,initialize: function(){
      this.listenTo(this.model, {
        'remove': this.remove
      })

      Sound.prototype.initialize.call(this);
    }

   ,addToPlaylist: function() {
      this.model.addToPlaylist()
      this.model.saveToLocalData()
      this.remove()
    }

   ,render: function() {
      this.$el.html(this.template(this.model.attributes))
      return this
    }
  })

  return SearchResult
})