beforeEach(function() {
  this.addMatchers({
    toBePlaying: function(expectedSong) {
      var player = this.actual;
      return player.currentlyPlayingSong === expectedSong && player.isPlaying;
    }
  });
});

it("should call setName with 'Bob' argument", function() {
  spyOn(bob, "setName");
  bob.setName('Bob');

  expect(bob.setName).toHaveBeenCalled();
  expect(bob.setName).toHaveBeenCalledWith('Bob');
});
