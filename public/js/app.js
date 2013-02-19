define(['model/soundlist', 'model/search', 'view/widget', 'view/playlist', 'view/search', 'view/searchResult'], function(Soundlist, Search, WidgetView, PlaylistView, SearchView, SearchResultView){
  App = function(){}

  App.prototype.start = function(){
    var soundlist = new Soundlist()
    soundlist.listenLocalData()
    var search = new Search()

    var widgetView = new WidgetView()
    var playlistView = new PlaylistView({collection : soundlist})
    var searchView = new SearchView({model : search})
    var searchResultView = new SearchResultView({collection : soundlist})

    var widgetEl = widgetView.render().$el
    var playlistEl = playlistView.render().$el
    var searchEl = searchView.render().$el
    var searchResultEl = searchResultView.render().$el
    
    $('body').append(
      widgetEl
     ,playlistEl
     ,searchEl
     ,searchResultEl
    )

    soundlist.bind('change:isPlaying', widgetView.play, widgetView)
    search.bind('change:keyword', soundlist.resetSearchResults, soundlist)
    search.startPolling()
  }

  return App
})