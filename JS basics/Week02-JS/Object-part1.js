//creating an object

const employee = {

    id: 101,
    name: "John",
    designation: "QA Engineer",
    salary: 5000

};

console.log(employee);

//Accessing object

console.log(employee.designation);
console.log(employee['name']);
//updating the object
employee.salary=6000;
console.log(employee);

// add new property

employee.department='QA';
console.log(employee.department);
console.log(employee);
//remove property
delete employee.salary;
console.log(employee);

//Nested objects
const employee1 = {

    id:101,

    name:"John",

    address:{

        city:"Bangalore",

        state:"Karnataka"

    }

};

console.log(employee1.address.city);

//with arrays
const employee2 = {

    name:"Anjali",

    skills:["JavaScript","Playwright","API Testing"]

};

console.log(employee2.skills[1]);