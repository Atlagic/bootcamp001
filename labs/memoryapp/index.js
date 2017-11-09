var worker = require("./worker");
var observer = require("./observer");

worker.subscribe(observer.notify);

worker.run();