//Challenge 1

//Create an array of 5 employee names.
let emp=['Rahul','Anjali','Ravi','Vijay','Mihira'];

//Add one employee.
emp.push("Girija");
console.log(emp);

//Remove the last employee.
emp.pop()
//Print the final array.
console.log(emp);

//challenge 2
let brow=['google','email','inbox'];
if (brow.includes("googles"))
{
    console.log("broswer found");
}
else
{
    console.log("browser not found");

}

//challenge 3
let brow1=['google','email','inbox','firefox'];
in1=brow1.indexOf('firefox');
console.log(in1);
newbro=brow1.splice(in1,in1,"Safari");
console.log(brow1);

//challenge4
let cities=['Mumbai','Chennai','Bangalore'];
for(const city of cities)
{
    console.log(city);
}
//challenge 5
let users=[
"admin",
"trainer",
"student",
"manager"
];

for (const user of users)
{
    console.log("Logging in as : "+ user);
}