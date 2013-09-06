describe("Person", function() {

  describe("#getName", function() {
    describe("name is defined", function() {

      it("should return name", function() {
        var name = "Bob";
        var person = new Person(name);
        person.getName().should.equal(name);
      });

    });

    describe("name is undefined", function() {

      it("should return undefined", function() {
        var person = new Person();
        expect(person.getName()).to.be.undefined;
      });

    });
  });

  describe("#eat(food)", function() {
    // TODO pending("not implemented");
  });

});
