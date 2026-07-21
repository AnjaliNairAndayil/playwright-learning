//Challenge 1 - Print Your Details

const mydetails=(name,city,experience)=>
{
    console.log("My name is : "+name);
    console.log("My city is: "+city);
    console.log("My experience is: "+experience);
}

mydetails('Anjali','Bangalore',11.5)

//Challenge 2 - Calculate Age

function calcage(birthyear)
{
    if (birthyear>currentyear)
    {
        console.log("You cant be born tomorrow!!");
    }
    else if (birthyear==currentyear)
    {
        console.log("You are just born");
    }
    else
    {
        age=currentyear-birthyear;
        console.log("You are "+ age + " years old");
    }
}

const currentyear=2026;
calcage(2000);

//Challenge 3 - Check Positive or Negative

const pos_neg=(number) =>
{
    if (number<0)
    {
        console.log("negative number");
    }
    else if (number==0)
    {
        console.log("Zero")
    }
    else
    {
        console.log("Positive number");
    }
}
pos_neg(-1);
pos_neg(0);
pos_neg(10);