var os = require("os");

var observerFunctions = [];

var run = function(){
    setInterval(function(){
        var freeMem = os.freemem() / 1024 / 1024; // MBs
        console.log(freeMem);
        if (freeMem < 3700){
            notifyAll();
        }
    }, 1000);
};

var notifyAll = function(){
    observerFunctions.forEach(function(element) {
        element("ALERT");
    }, this);
};

var subscribe = function(observer){
    observerFunctions.push(observer);
};

module.exports.run = run;
module.exports.subscribe = subscribe;