define(['model/soundlist', 'model/search', 'view/playlist', 'view/search'], function(Soundlist, Search, PlaylistView, SearchView){
    
  App = function(){}

  App.prototype.start = function(){

    var soundlist = new Soundlist()
    var search = new Search()

    var playlistView = new PlaylistView({collection : soundlist})
    var searchView = new SearchView({collection : soundlist})

    var playlistElm = playlistView.render().$el
    var searchElm = searchView.render().$el
    
    $('body').append(
      playlistElm
     ,searchElm
    )
  }

  return App
})