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

  describe("#setName", function() {

    it("should call setName with 'Bob' argument", function() {
      var bob = new Person();
      spyOn(bob, "setName");

      bob.setName('Bob');

      expect(bob.setName).toHaveBeenCalled();
      expect(bob.setName).toHaveBeenCalledWith('Bob');
    });

    it("should call setName with all passed args", function() {
      var person = jasmine.createSpyObj("person", ["setName"]);

      person.setName('Bob', 123, []);

      expect(person.setName).toHaveBeenCalledWith('Bob', 123, []);
    });

  });

});
