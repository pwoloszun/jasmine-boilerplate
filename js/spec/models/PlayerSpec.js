describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    player.currentlyPlayingSong.should.equal(song);

    //demonstrates use of custom matcher
    player.should.be.playing(song); //TODO
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      player.isPlaying.should.be.false;

      // demonstrates use of 'not' with a custom matcher
      player.should.not.be.playing(song); // TODO
    });

    it("should be possible to resume", function() {
      player.resume();
      player.isPlaying.should.be.true;
      player.currentlyPlayingSong.should.equal(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    var songMethodSpy = sinon.spy(song, "persistFavoriteStatus");

    player.play(song);
    player.makeFavorite();

    songMethodSpy.should.be.calledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);
      (function() {
        player.resume();
      }).should.throw(Error);
    });
  });
});
