/*
Compiler: tsc script.ts
Run: node script.js

Data Types: boolean, number, string
Declaration:
let <name>: <dataType> = <value>;
*/
let isDone: boolean = false;
let word: string = "hello, world";
console.log(word);
let fullName: string = "Karen Gomes";
let age: number = 19;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;
console.log(sentence);

//array: two ways
let list1: number[] = [1,2,3];
let list2: Array<number> = [4,5,6];
console.log(list1,list2);

let tuple: [number, string];
tuple = [30,"h1"];
console.log(tuple);

enum Color {Yellow = 3, Red = 4, Blue = 8};
let c: Color = Color.Red;
let colorName: string = Color[8];
console.log(c,colorName);

let qualquerCoisa: any = 4;
console.log(qualquerCoisa);
qualquerCoisa = "qualquer coisa";
console.log(qualquerCoisa);
qualquerCoisa = true;
console.log(qualquerCoisa);
//you can have a mix array with any:
let lista: any[] = ["teste", false, 100];
for(let i = 0; i < lista.length; i ++) {
    console.log(lista[i]);
} 

//interfaces
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);