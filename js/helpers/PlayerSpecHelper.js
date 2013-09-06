chai.Assertion.addMethod('playing', function(expectedSong) {
  var player = this._obj;

  new chai.Assertion(player).to.be.instanceof(Player);

  this.assert(
    player.currentlyPlayingSong === expectedSong && player.isPlaying === true
    , "expected #{this} to play #{exp} but got #{act}"
    , "expected #{this} not to play #{act}"
    , expectedSong // expected
    , player.currentlyPlayingSong // actual
  );
});
