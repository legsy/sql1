a1 = console.log;  // Will be accessed from b.js
global.a2 = console.log;  // Will be accessed from b.js

require('./b.js');

b1('a: b1');
b2('a: b2');
global.b1('a: global.b1');
global.b2('a: global.b2');