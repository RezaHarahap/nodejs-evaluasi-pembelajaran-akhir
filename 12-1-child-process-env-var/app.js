/**
 * @TODO
 * 1. Kembalikan fungsi `main` dengan child process yang menjalankan berkas `run-me.js`.
 * 2. Di mana, child process tersebut **hanya** menetapkan environment variable dengan nama `MY_ENV_VAR`.
 * 3. Nilai dari environment variable tersebut diambil dari argumen `myEnvVar`.
 */

const { spawn } = require('child_process');
const { join } = require('path');

function main(myEnvVar) {
  return spawn(process.execPath, [join(__dirname, 'run-me.js')], {
    env: { MY_ENV_VAR: myEnvVar },
  });
}

module.exports = main;
