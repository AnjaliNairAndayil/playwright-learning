// And Or and Not operators

//AND (all conditions should match for getting true)
let usernamecorrect=true;
let passwordcorrect=true;

if (usernamecorrect && passwordcorrect)
{
    console.log("Login successful");
}
else
{
    console.log("Login Failed");
}

let usernamecorrect1=true;
let passwordcorrect1=false;

if (usernamecorrect1 && passwordcorrect1)
{
    console.log("Login successful");
}
else
{
    console.log("Login Failed");
}




// OR (any one condition should match for getting true)

let knowsjava=true;
let knowspython=false;

if (knowsjava || knowspython)
{
    console.log("Eligible");
}
else
{
    console.log("not eligible");
}

//Not (reverses the value)
let login=true;

console.log(!login);
