define(['model/sound', 'model/soundlist'], function(Sound, Soundlist){
    
  describe("soundlist test suite", function() {

    var sound0 = new Sound({title:0})
    var sound1 = new Sound({title:1})
    var sound2 = new Sound({title:2})
    var sound3 = new Sound({title:3})
    
    it("clear search results", function() {
      var many = new Soundlist()
      many.push(sound0)
      many.push(sound1)
      many.push(sound2)
      many.push(sound3)

      many.clearSearchResults()
      expect(many.length).toEqual(0)

      many.push(sound0)
      many.push(sound1)
      many.push(sound2)
      many.push(sound3)

      sound1.addToPlaylist()
      sound2.addToPlaylist()
      sound3.addToPlaylist()
      many.clearSearchResults()

      expect(many.length).toEqual(3)
      expect(many.at(0)).toEqual(sound1)
      expect(many.at(1)).toEqual(sound2)
      expect(many.at(2)).toEqual(sound3)

      sound1.removeFromPlaylist()
      sound3.removeFromPlaylist()
      many.clearSearchResults()
      expect(many.length).toEqual(1)
      expect(many.at(0)).toEqual(sound2)

    })
  })
})
