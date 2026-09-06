const assert = require('assert');
const { generateRandomStringSync } = require('./utils');

const length = 10;
const result = generateRandomStringSync(length);
assert.strictEqual(typeof result, 'string');
assert.strictEqual(result.length, length);

assert.throws(
  () => generateRandomStringSync('10'),
  /Length must be a number/
);

assert.throws(
  () => generateRandomStringSync(0),
  /Length must be at least 1/
);
