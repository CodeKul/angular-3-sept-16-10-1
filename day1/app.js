'use strict'
var gloabalVariable = 1;
var autoGlobalVariable = 2;
//psdjsdlj= 1;

console.log('Global Var - '+gloabalVariable);
console.log('Automatically Global - '+autoGlobalVariable);

myFunction();

function myFunction(){
    var carNum = 2;
    var carName = 'Audi';
    console.log('Car Num - '+carNum);
};
