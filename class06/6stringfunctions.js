// console.log("We are at tut 6");
// const name = "Durgesh";
// const surname = "Rai";
// console.log(name + surname);
// console.log(name + ' ' + surname);

let html;
html = "<h2> this is a heading</h2>" + "<span> this is a para</span>";
console.log(html);
// html = html.concat(' but now', ' span');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

// console.log(html[0]);
// console.log(html[1]);
// console.log(html.indexOf('this'));
// console.log(html.lastIndexOf('this'));
// console.log(html.charAt(3));
// console.log(html.endsWith("abcd"));
// console.log(html.includes("he"));
// console.log(html.includes("fg"));
console.log(html.substring(0, 6));
console.log(html.slice(0, 6));
console.log(html.split(" ")); // it will split the whole html in an array as here we gauven space so where it found spcae it will split.
// console.log(html.replace('this', "This"));

let fruit1 = "ORANGE'";
let fruit2 = `APPLE'`;
let myhtml = `Hello Durgesh You like ${fruit1} or ${fruit2}`;

console.log(myhtml);
n = "DURGESH " + "RAI";
console.log(n);

console.log("hii");

let a = "Durgesh";
let b = "Rai";
console.log(`${a} ${b} `.repeat(10));

let n1 = 5;
let n2 = 8;

[n1, n2] = [n2, n1];
console.log(n1);
console.log(n2);
