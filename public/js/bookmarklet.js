function start () {
  debugger
}

(function(d){
  var init = function(event) {
    if( 'undefined' !== typeof(event) && event.target.nodeName === "SCRIPT") start()
  }
  var js, ref = d.getElementsByTagName('script')[0]
  js = d.createElement('script'); js.async = true
  js.src = '//connect.soundcloud.com/sdk.js'
  js.onload = init; ref.parentNode.insertBefore(js, ref)
}(document))
