function sayHi() {
  console.log( "Привет" );
}

//console.log( sayHi ); // выведет код функции

//function declaration
function sum(a, b) {
    return a + b;
}

//function expression
var sum = function (a, b) {
    return a + b;
}

var currentCount = 12;

function makeCounter() {
    var currentCount = 1;
    
    console.log(global.currentCount);

    // var r1 = function() {
    //   var currentCount;
    //   console.log(window);
    //   // можно ли здесь вывести currentCount из внешней функции (равный 1)?
    // };
    // r1();
}

makeCounter();
