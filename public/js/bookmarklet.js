function start () {
  SC.initialize({
    client_id: SOUNDLIST_SC_DATA.clientId
   ,redirect_uri: SOUNDLIST_SC_DATA.callbackUrl
  });

  SC.get('/resolve', { url: document.URL}, function(res){
  //BDNF//SC.get('/resolve', { url: 'https://soundcloud.com/dj-fl-oz/tron-mix'}, function(res){
    if(!res || 'track' != res.kind ) return alert('We could not find a track')

    ifrm = document.createElement('IFRAME')
    ifrm.setAttribute('src', 'http://' + SOUNDLIST_HOST + '/bookmarklet/' + res.id)
    ifrm.style.width = '0px'
    ifrm.style.height = '0px'
    document.body.appendChild(ifrm)
  })
}

(function(d){
  var init = function(event) {
    if( 'undefined' !== typeof(event) && event.target.nodeName === 'SCRIPT') start()
  }
  var js, ref = d.getElementsByTagName('script')[0]
  js = d.createElement('script'); js.async = true
  js.src = '//connect.soundcloud.com/sdk.js'
  js.onload = init; ref.parentNode.insertBefore(js, ref)
}(document))