const os = require('os');

var totlaMemory = os.totalmem();

var freeMemory = os.freemem();

console.log(`Total Meory:${totlaMemory}`);
console.log(`Total FreeMeory:${freeMemory}`);