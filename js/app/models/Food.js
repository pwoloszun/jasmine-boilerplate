var Food = (function() {

  var Food = function(name, calorie) {
    this._name = name;
    this._calorie = calorie;
  };

  Food.prototype.getCalorie = function() {
    return this._calorie;
  };

  return Food;
})();
