define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

var assert = require('assert');

var Z = require('sanctuary-type-classes');


//  eq :: (Any, Any) -> Undefined !
module.exports = function eq(actual, expected) {
  assert.strictEqual(arguments.length, eq.length);
  assert.strictEqual(Z.toString(actual), Z.toString(expected));
  assert.strictEqual(Z.equals(actual, expected), true);
};

require = requireOrig;});
