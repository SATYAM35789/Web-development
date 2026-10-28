const os = require('os')


console.log("Cpu Architecture:" + os.arch());
console.log('Free Momory: ' + os.freemem())
console.log('Total Momory: ' + os.totalmem())
console.log('Network interfaces: ' + os.networkInterfaces())
console.log('Network interfaces: ' + JSON.stringify(os.networkInterfaces()))
console.log('Os default temp path/Path:' + os.tmpdir())

 