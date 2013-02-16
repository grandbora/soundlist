describe("soundlist test suite", function() {

  var sound0 = new Sound({title:0})
  var sound1 = new Sound({title:1})
  var sound2 = new Sound({title:2})
  var sound3 = new Sound({title:3})
  
  it("play a sound", function() {
    var many = new Soundlist()
    many.push(sound0)
    many.push(sound1)
    many.push(sound2)
    many.push(sound3)

    expect(many.getCurrentPlaying()).toEqual(null)

    sound2.play()
    expect(many.getCurrentPlaying()).toEqual(sound2)

    many.getCurrentPlaying().stop()
    expect(many.getCurrentPlaying()).toEqual(null)

    sound0.play()
    expect(many.getCurrentPlaying()).toEqual(sound0)

  })



})