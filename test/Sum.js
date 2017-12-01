define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

var FL = require('fantasy-land');

var Z = require('sanctuary-type-classes');


//  Sum :: Number -> Sum
function Sum(value) {
  if (!(this instanceof Sum)) return new Sum(value);
  this.value = value;
}

Sum['@@type'] = 'sanctuary-type-classes/Sum';

Sum[FL.empty] = function() { return Sum(0); };

Sum.prototype[FL.equals] = function(other) {
  return Z.equals(this.value, other.value);
};

Sum.prototype[FL.concat] = function(other) {
  return Sum(this.value + other.value);
};

Sum.prototype[FL.invert] = function() {
  return Sum(-this.value);
};

Sum.prototype.inspect =
Sum.prototype.toString = function() {
  return 'Sum(' + Z.toString(this.value) + ')';
};

module.exports = Sum;

require = requireOrig;});
