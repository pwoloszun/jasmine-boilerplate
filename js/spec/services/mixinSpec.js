xdescribe("mixin", function() {
  var Encryptable;

  beforeEach(function() {
    Encryptable = {
      encrypt: function(propertyName) {
      },
      getEncrypted: function(propertyName) {
      }
    };
  });

  describe("extend class prototype", function() {
    var User, user;

    beforeEach(function() {
      User = function() {
      };
      mixin(User.prototype, Encryptable);
    });

    it("should extend User prototype", function() {
      user = new User();
      for (var propertyName in Encryptable)
        user[propertyName].should.equal(Encryptable[propertyName]);
    });
  });

  describe("extend instance", function() {
    var bob;

    beforeEach(function() {
      bob = {name: "Bob"};
      mixin(bob, Encryptable);
    });

    it("should extend object instance", function() {
      for (var propertyName in Encryptable)
        bob[propertyName].should.equal(Encryptable[propertyName]);
    });
  });
});
