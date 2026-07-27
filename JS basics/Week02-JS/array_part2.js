//push - add an item

let browsers = ["Chrome", "Firefox"];

browsers.push("Edge");

console.log(browsers);

//push - add multiple items

let fruits=['Apple','Orange'];

fruits.push('Apple','Kiwi','Banana');
console.log(fruits);

//Pop
let fruit=['Apple','Orange','Banana'];
fruit.pop();
console.log(fruit);

//save and print popped value

let number=[4,2,66,22];
remove=number.pop();
console.log(remove);

//unshift - adds in beginning
let n=[2,4,6,7];
n.unshift(244);
console.log(n);

//shift - removes first element

let ele=['line','circle','square'];
ele.shift();
console.log(ele);

//include - check if item present
let n1=[2,4,6,]
console.log(n1.includes(4));

//indexOf() - returns postion

let n2=[2,7,9,10]
console.log(n2.indexOf(10));
console.log(n2.indexOf(0)); //if not present return -1

//Slice - give the part of the array

let prog=['Java','C','c++','python'];
p1=prog.slice(1,3);
console.log(p1);

//Splice- can add,replace and remove
//remove
let numbers1=[10,20,30,40];

numbers1.splice(1,2);

console.log(numbers1);

//replace
let colors=["Red","Green","Blue"];

colors.splice(1,1,"Yellow");

console.log(colors);

//Add
let colors1=["Red","Blue"];

colors1.splice(1,0,"Green");

console.log(colors1);

//for..of loop
let fruits1=["Apple","Orange","Banana"];

for(const fruit of fruits1){

    console.log(fruit);

}
