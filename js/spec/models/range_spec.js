describe("RocketMind.Range", function() {
  var range;
  var rangeMin = 1;
  var rangeMax = 10;

  beforeEach(function() {
    range = new RocketMind.Range(rangeMin, rangeMax);
  });

  describe("#include(value)", function() {

    describe("given value is in range", function() {
      it("should be true", function() {
        range.include(5).should.be.true;
      });
    });

    describe("given value is out of range", function() {
      it("should be false", function() {
        range.include(-99).should.be.false;
      });
    });

    describe("given value equal to range max", function() {
      it("should be false", function() {
        range.include(rangeMin).should.be.false;
      });
    });
  });

});
