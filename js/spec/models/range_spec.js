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
        expect(range.include(5)).toBe(true);
      });
    });

    describe("given value is out of range", function() {
      it("should be false", function() {
        expect(range.include(-99)).toBe(false);
      });
    });

    describe("given value equal to range max", function() {
      it("should be false", function() {
        expect(range.include(rangeMin)).toBe(false);
      });
    });
  });

});
