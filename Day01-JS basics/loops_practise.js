//Practise 1

for (let i=1; i<=5;i++)
{
    console.log(i)
}

//practise 2

for (let i=10; i>=6; i--)
{
    console.log(i);
}

//practise 3

for (let i =1 ; i<=10; i+=3)
{
    console.log(i);
}

//challenge (print 20 to 30)

for (let i=20;i<=30;i++)
{
    console.log(i);
}

//challenge (print odd from 1 to 20)

for (let i=1;i<=20;i++)
{
    if (i%2==1){
        console.log(i);
    }
}

//challenge (print sum of numbers 1 to 10)

sum= 0
for (let i=1;i<=10;i++)
{
    sum+=i;
    console.log(sum);
}

//while loops

let i=3;

while (i<=7)
{
    console.log(i);
    i++;
}

//do while

let j=5;

do{
    console.log(j);
    j++;
}

while (j<5);

//break

for (let i=1;i<=6;i++)
{
    if (i==4)
        break;
    console.log(i);
}

//continue

for(let i=1;i<=6;i++)
{
    if(i==4)
        continue;
    console.log(i);
}


//challenge

//Print numbers from 1 to 20, but:

//Skip 7
//Stop completely when you reach 15

for (let i=1;i<=20;i++)
{
    if (i==7)
        continue;
    else if (i==15)
        break;
    else
        console.log(i);
}