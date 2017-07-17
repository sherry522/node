// console.log("Hello world");

'use strict';

var name = 'Node.js';
var s = `Hello, ${name}!`;
var tt = 'test';
var a = `${name},${s}`
console.log(a);
function gree(sss){
    console.log(s + ',' + sss + a);
}

function bd(aa){
    console.log(aa + tt);
}

// module.exports = gree
module.exports = {
    gg:gree,
    bb:bd
};