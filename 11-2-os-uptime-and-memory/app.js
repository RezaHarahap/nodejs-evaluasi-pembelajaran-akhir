const os = require('os');
const v8 = require('v8');

setTimeout(() => {
  console.log(process.uptime());
  console.log(os.uptime());
  console.log(os.totalmem());
  console.log(v8.getHeapStatistics().total_heap_size);
}, 1000);
