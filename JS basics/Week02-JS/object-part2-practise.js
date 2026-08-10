//Object.keys() - get all the property names
//Object.values() - get all the values in object
//Object. entries()- both key and value


 
const user = {
    name: "Anjali",
    role: "QA Engineer",
    experience: 11
};

console.log(Object.keys(user));

console.log(Object.values(user));
console.log(Object.entries(user));

//Looping through keys

const keys=Object.keys(user);
for (const key of keys)
{
    console.log(key);
}

//using bracket notation

for (const key of keys)
{
    console.log(key + ":" + user[key]);
}

//using Object.enteries
for (const [key,value] of Object.entries(user)) //destructuring
{
    console.log(key+":"+value);
}
//Array of Objects
const users = [
    {
        username: "admin",
        role: "Admin"
    },
    {
        username: "trainer",
        role: "Trainer"
    },
    {
        username: "student",
        role: "Student"
    }
];

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);

console.log(users[0].username);
console.log(users[0].role);

//Looping through Array

for (const user of users)
{
    console.log(user.username);
}

//Destructing

const user1 = {
    name: "Anjali",
    role: "QA Engineer",
    city: "Bangalore"
};

const {name,role,city}=user1

console.log(name);

const browsers = ["Chrome", "Firefox", "Edge"];

const [first, second, third] = browsers;

console.log(first);
console.log(second);
console.log(third);

//Spread operator - copy all from one array to another
const browsers1 = ["Chrome", "Firefox"];

const browsers2 = [...browsers1, "Edge"];

console.log(browsers2);

const user2 = {
    name: "Anjali",
    role: "QA Engineer"
};

const updatedUser = {
    ...user,
    experience: 11
};

console.log(updatedUser);