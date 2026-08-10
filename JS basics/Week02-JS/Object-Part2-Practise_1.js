//Part 1
const browser = {
    name: "Chrome",
    version: 138,
    company: "Google"
};

console.log(Object.keys(browser));

//part 2
const browser1 = {
    name: "Chrome",
    version: 138
};

console.log(Object.values(browser1));
//part 3
const user = {
    name: "Anjali",
    role: "QA"
};

for (const key of Object.keys(user)) {
    console.log(key + " : " + user[key]);
}

//Challenge 1
const employees = [
    {
        name: "Anjali",
        role: "QA",
        experience: 11
    },
    {
        name: "Rahul",
        role: "Developer",
        experience: 5
    },
    {
        name: "Priya",
        role: "Manager",
        experience: 8
    }
];

for (const emp of employees)
{
    console.log("Name :" + emp.name);
    console.log("Role :" + emp.role);
    console.log("Experience :"+ emp.experience);
}

for (const emp1 of employees)
{
    if (emp1.role=="QA")
    {
        console.log(emp1.name);
    }
}

//Challenge 3

const users = [
    {
        username: "admin",
        password: "Admin123",
        role: "Admin"
    },
    {
        username: "trainer",
        password: "Trainer123",
        role: "Trainer"
    },
    {
        username: "student",
        password: "Student123",
        role: "Student"
    }
];

for (const user of users)
{
    console.log("Testing "+ user.role+" login");
    console.log("Username : " + user.username);
}

//Challenge 4
const employee = {
    name: "Anjali",
    designation: "QA Engineer",
    department: "Automation"
};

const {name,designation,department}=employee

console.log(name);
console.log(designation);
console.log(department);

//Challenge 5

const testCases = [
    {
        name: "Valid Login",
        browser: "Chrome",
        status: "Pass"
    },
    {
        name: "Invalid Login",
        browser: "Firefox",
        status: "Fail"
    },
    {
        name: "Logout",
        browser: "Chrome",
        status: "Pass"
    }
];

for (const test of testCases)
{
    if(test.status=="Fail")
    {
        console.log("Test :" + test.name);
        console.log("Browser :" + test.browser);
        console.log("Status :" + test.status);
    }
}