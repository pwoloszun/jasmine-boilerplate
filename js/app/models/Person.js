function Person(name) {
  this._name = name;
}

Person.prototype.getName = function() {
  return this._name;
};
