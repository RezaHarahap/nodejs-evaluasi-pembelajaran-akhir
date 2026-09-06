const assert = require('assert');
const { generateRandomString } = require('./utils');

let completed = 0;
function done() {
  completed += 1;
  if (completed === 3) process.exitCode = 0;
}

generateRandomString(10, (error, result) => {
  assert.strictEqual(error, null);
  assert.strictEqual(typeof result, 'string');
  assert.strictEqual(result.length, 10);
  done();
});

generateRandomString('10', (error) => {
  assert.ok(error instanceof Error);
  assert.strictEqual(error.message, 'Length must be a number');
  done();
});

generateRandomString(0, (error) => {
  assert.ok(error instanceof Error);
  assert.strictEqual(error.message, 'Length must be greater than 0');
  done();
});
