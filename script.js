/*
Compiler: tsc script.ts
Run: node script.js

Data Types: boolean, number, string
Declaration:
let <name>: <dataType> = <value>;
*/
var isDone = false;
var word = "hello, world";
console.log(word);
var fullName = "Karen Gomes";
var age = 19;
var sentence = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old next month.";
console.log(sentence);
//array: two ways
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
console.log(list1, list2);
var tuple;
tuple = [30, "h1"];
console.log(tuple);
var Color;
(function (Color) {
    Color[Color["Yellow"] = 3] = "Yellow";
    Color[Color["Red"] = 4] = "Red";
    Color[Color["Blue"] = 8] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
var colorName = Color[8];
console.log(c, colorName);
var qualquerCoisa = 4;
console.log(qualquerCoisa);
qualquerCoisa = "qualquer coisa";
console.log(qualquerCoisa);
qualquerCoisa = true;
console.log(qualquerCoisa);
//you can have a mix array with any:
var lista = ["teste", false, 100];
for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
//interfaces
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label1: "Size 10 Object" };
printLabel(myObj);
