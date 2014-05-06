// describe(descriptionStr, groupingFn);
// it(descriptionStr, testFn);

describe("Person", function() {

  describe("getname()", function() {

    describe("case when name is undefined", function() {
      it("should be undefined", function() {
        var bob = new Person();
        expect(bob.getName()).to.be.undefined;
      });
    });

    describe("case when name is undefined", function() {
      it("should return name if name was defined", function() {
        var name = "Bob";
        var bob = new Person(name);
        bob.getName().should.equal(name);
      });
    });

  });

});
