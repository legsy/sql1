var arr = [1, 1];
arr[4] = 1;
console.log(arr[7] = undefined);

function f() {
    var a = 1;
    return function () {
        console.log(a);
    };
}

(new f)();

function verySlowFunction() { 
    var dim = [];
    for(var i = 0;i < 100000000; i++)
    {
        dim[i] = Math.random();
    }
    return dim;
} 


function slow_guard(period, innerFunction) {
    return function(){
        var timerId = setTimeout(() => {console.log('slow function detected');}, period);
        innerFunction();
        clearTimeout(timerId);
    };
}

Array.prototype.sort = slow_guard(1000, Array.prototype.sort);
var func = slow_guard(1000, verySlowFunction);

console.log('slow function begin');
var dim = func();
console.log('slow function1 end');
dim.sort();
console.log('slow function end');
