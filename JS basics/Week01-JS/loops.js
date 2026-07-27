// example 1

for(let i=1;i<=5;i++)
{
    console.log("Hello");
}

//Example 2

for(let i=1; i<=10;i++)
{
    console.log(i);
}

//Example 3 (even number)

for (let i=0; i<=10;i+=2)
{
    console.log(i);
}

//Example 4 (countdown)

for (let i=5;i>=0;i--)
{
    console.log(i);
}

//Example 5 (Multiplication table)

let number =5;

for (let i=1;i<=10;i++)
{
    console.log(number +"*" + i +"="+ (number*i));
}

// While loops

//example 1 (print 1 to 10 using while)

let i=1;
while (i<=10)
{
    console.log(i);
    i++
}


//Do while loops (print 1 to 5)

let j=1;

do 
{
    console.log(j);
    j++
}
while (j<=5)

// Break



for(let i=1;i<=5;i++)
{
    if (i==3)
    {
        break;
    }
    console.log(i);
}

//Continue

for (let i=1; i<=5; i++)
{
    if(i==3)
    {
        continue;
    }
    console.log(i);
}