//return

function add(a,b)
{
    return a+b;
}

let total=add(3,4);

console.log(total);

// example 2

function square(n)
{
    return n*n;
}
let square_n=square(5);
console.log(square_n);

//Multiple returns

function age(a)
{
    if (a>18)
    {
        return true;
    }
    else 
    {
        return false;
    }
}
let age1=age(20);

if (age1)
{
    console.log("Adult");
}
else 
{
    console.log("Minor");
}

//const

const greet = function()
{
    console.log("Hello");
}

greet()

//Arrow

const greet1 = () =>
{
    return ("Hello");
}

let gr=greet1();
console.log(gr);

//Arrow with parameters

const add1 = (a1,b) =>
{
    return (a1+b);
}

let sum=add1(10,20);
console.log(sum);

//short arrow

const mul = (a2,e) =>  (a2*e)

console.log (product=mul(2,5));

// global variable

let company="AI";
const showcompany=()=> company
console.log(showcompany());

//Practise1

function multiply(a,b)
    {
        return a*b;
    }
let ans=multiply(6,4);
console.log(ans);

//Practise2

const gr1=()=>
{
    console.log("Welcome");
}
gr1();

//Pracrtise 3

let city='Delhi';

function show()
{
    console.log(city);
}

show();

//Challenge

const subtract=(a,b)=> a-b;

console.log(subtract(20,5));

//Challenge 2

const isEven=(num) => 
{
    if (num%2==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
even = isEven(24)
if (even)
{
    console.log("Even");
}
else
{
    console.log("False");
}

//challenge 3

const largest=(n1,n2)=>{
    if (n1>n2)
    {
        console.log("the largest is: ", n1);
    }
    else{
        console.log("the largest is: ", n2);
    }
}

largest(50,100)