a1('b: a1');
a2('b: a2');
global.a1('b: global.a1');
global.a2('b: global.a2');

b1 = console.log;  // Will be accessed from a.js
global.b2 = console.log;  // Will be accessed from a.js