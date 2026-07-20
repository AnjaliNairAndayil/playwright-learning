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
