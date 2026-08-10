//challenge 1

const mobile={
    brand:"nokia",
    model:"1100",
    price:5000,
    color:"black",
}

console.log(mobile.brand);
console.log(mobile.model);
console.log(mobile.price);
console.log(mobile.color);

//challenge 2

const company={
    name:"Open AI",
    employee:1000
}

company.employee=1200;
console.log(company);

//challenge 3

const browser={
    name:'chrome',
    version:138
}

delete browser.version;
console.log(browser);

//challenge 4
const user = {

    name:"Anjali",

    address:{

        city:"Bangalore",

        pincode:560001

    }

};

console.log(user.address.city);

//challenge 5

const testData = {

    username:"admin",

    password:"Admin123",

    environment:"QA",

    browser:"Chromium"

};

console.log("RUnning Test");
console.log("Environment :", testData.environment);
console.log("Broswer :",testData.browser);
console.log("Username :", testData.username);

//QA challenge
const loginResponse = {
    status: 200,
    message: "Login Successful",
    user: {
        id: 101,
        name: "Anjali",
        role: "QA Engineer"
    }
};

console.log("Status : ", loginResponse.status);
console.log("Message : ", loginResponse.message);
console.log("User ID : ", loginResponse.user.id);
console.log("User Name : ", loginResponse.user.name);
console.log("Role : ", loginResponse.user.role);
