// // require('./logger.js');
// // require('./logger.js');

// const logger1 = require('./logger.js');
// const logger2 = require('./logger.js');

// console.log(logger1 === logger2);

// -------------------------------------------

// const logger = require('./logger');
// const logger = require('./logger/myLogger');
// const logger = require('./logger/index');
// const logger = require('./logger');


// ---------------------------------------------

// const loggerSingle = require('./loggerSingle');

// let l1 = loggerSingle.getLogger();
// l1.log("Hello from App Module");

// let l2 = loggerSingle.getLogger();
// l2.log("Hello from App Module");

// console.log(l1 === l2);

// --------------------------------------------

const loggerFactory = require('./loggerFactory');

// let dbLogger = loggerFactory.DBLFactory.getLogger();
// let flLogger = loggerFactory.FLFactory.getLogger();

// dbLogger.log("Hello from App Module");
// flLogger.log("Hello from App Module");

let dbLogger1 = loggerFactory.DBLFactory.getLogger();
let dbLogger2 = loggerFactory.DBLFactory.getLogger();

console.log(dbLogger1 === dbLogger2);