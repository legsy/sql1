var Threads = require('webworker-threads');
var t = Threads.create();

function verySlowFunction() { 
    console.log('slow function begin');
    var dim = [];
    for(var i = 0;i < 100000; i++)
    {
        dim[i] = Math.random();
    }
    console.log('slow function end');
    return dim;
} 

function slow_guard(period, innerFunction) {
    console.log('init thread');
    t.eval(innerFunction);
    var fName = innerFunction.name + '()';
    return function(){
        console.log('init timeout');
        
        var timerId = setTimeout(() => {
            console.log('slow function detected');
            t.destroy();
        }, period);

        // console.log('exec ' + fName);
        // t.eval(fName, function(err, result) {
        //      if (err) throw err; // something abnormal
        //      clearTimeout(timerId);
        //      t.destroy();
        //      console.log('destroy thread');
        // });

        //innerFunction();
        //clearTimeout(timerId);
    };
}



//Array.prototype.sort = slow_guard(1000, Array.prototype.sort);
var func = slow_guard(1000, verySlowFunction);

var dim = func();
//console.log('slow function end');

// dim.sort();
// console.log('slow function end');
