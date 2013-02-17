define(['model/soundlist', 'model/search', 'view/playlist', 'view/search', 'view/searchResult'], function(Soundlist, Search, PlaylistView, SearchView, SearchResultView){
    
  App = function(){}

  App.prototype.start = function(){

    var soundlist = new Soundlist()
    var search = new Search()

    var playlistView = new PlaylistView({collection : soundlist})
    var searchView = new SearchView({model : search})
    var searchResultView = new SearchResultView({collection : soundlist})

    var playlistElm = playlistView.render().$el
    var searchElm = searchView.render().$el
    var searchResultElm = searchResultView.render().$el
    
    $('body').append(
      playlistElm
     ,searchElm
     ,searchResultElm
    )

    search.bind('change:keyword', soundlist.resetSearchResults, soundlist)
    search.startPolling()
  }

  return App
})