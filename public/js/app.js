define(['model/Soundlist', 'model/Search', 'view/Playlist', 'view/Search'], function(Soundlist, Search, PlaylistView, SearchView){
    
  App = function(){}

  App.prototype.start = function(){

    var soundlist = new Soundlist()
    var search = new Search()


    var playlistView = new PlaylistView({collection : soundlist})
    var searchView = new SearchView({collection : soundlist})

    playlistView.render()
    searchView.render()
    
  }

  return App
})