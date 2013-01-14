var RocketMind = {};

RocketMind.Range = function(min, max) {
  this._min = min;
  this._max = max;
}

RocketMind.Range.prototype.include = function(value) {
  return value > this._min && value < this._max;
};
