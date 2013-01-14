describe("Person", function() {

  describe("#getName", function() {
    describe("name is defined", function() {

      it("should return name", function() {
        var name = "Bob";
        var person = new Person(name);
        expect(person.getName()).toEqual(name);
      });

    });

    describe("name is undefined", function() {

      it("should return undefined", function() {
        var person = new Person();
        expect(person.getName()).toBeUndefined();
      });

    });
  });

  describe("#eat(food)", function() {
    // TODO pending("not implemented");
  });

});
