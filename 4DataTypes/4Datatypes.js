// NOTE:- The functions date object and array memory store in heap.

// PRIMITIVE DATA TYPES
// string

let name1 = "DENVER";
console.log(name1);
console.log("my name is " + name1); // two concat string use +
console.log(typeof name1);

// Numbers

let marks = 34;
console.log(marks);
console.log(typeof marks);
console.log(`See below here`);
console.log(typeof marks);

// Boolean

let isDriver = true;
console.log(isDriver);
console.log(typeof isDriver);

// NULL

let nullVar = null;
console.log(nullVar);
console.log(typeof nullVar);

// UNDEFINED
let undef = undefined;
console.log(undef);
console.log(typeof undef);

// REFERENCE DATA TYPES

// ARRAY

let myArr = [1, 2, 3, 4, "durgesh", true];
console.log(myArr);
console.log(typeof myArr);

// OBJECT LITERALS

let marks2 = {
  denver: 40,
  tokyo: 99,
  rio: 85,
};

console.log(marks2);
console.log(typeof marks2);

// FUNCTION

function myFunc1() {}
console.log(typeof myFunc1);

// DATE TYPE

let date = new Date();
console.log(typeof date);
