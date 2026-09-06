const assert = require('assert');
const { generateRandomStringProm } = require('./utils');

(async () => {
  const result = await generateRandomStringProm(10);
  assert.strictEqual(typeof result, 'string');
  assert.strictEqual(result.length, 10);

  await assert.rejects(
    generateRandomStringProm('10'),
    /Length must be a number/
  );

  await assert.rejects(
    generateRandomStringProm(0),
    /Length must be greater than 0/
  );
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
