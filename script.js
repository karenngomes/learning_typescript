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
tuple = [30, "1st"];
tuple = [23, "2nd"];
tuple = [70, "3th"];
console.log(tuple);
