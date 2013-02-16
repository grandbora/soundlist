describe("sound test suite", function() {

  it("play and stop", function() {

    var sound = new Sound()
    expect(sound.get('isPlaying')).toBe(false)

    sound.play()
    expect(sound.get('isPlaying')).toBe(true)

    sound.stop()
    expect(sound.get('isPlaying')).toBe(false)

  })

  it("add to playlist", function() {
    var sound = new Sound()
    expect(sound.get('type')).toBe(Sound.TYPE.SEARCHRESULT)

    sound.addToPlaylist()
    expect(sound.get('type')).toBe(Sound.TYPE.PLAYLIST)

    sound.removeFromPlaylist()
    expect(sound.get('type')).toBe(Sound.TYPE.SEARCHRESULT)
  })

})