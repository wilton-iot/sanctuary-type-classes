define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
'use strict';

var FL = require('fantasy-land');

var Z = require('sanctuary-type-classes');


//  Lazy :: (() -> a) -> Lazy a
function Lazy(f) {
  if (!(this instanceof Lazy)) return new Lazy(f);
  this.run = f;
}

Lazy['@@type'] = 'sanctuary-type-classes/Lazy';

Lazy[FL.of] = function(a) {
  return Lazy(function() { return a; });
};

Lazy.prototype[FL.map] = function(f) {
  return Z.ap(Z.of(Lazy, f), this);
};

Lazy.prototype[FL.ap] = function(other) {
  var task = this;
  return Lazy(function() { return other.run()(task.run()); });
};

module.exports = Lazy;

return module.exports;});
