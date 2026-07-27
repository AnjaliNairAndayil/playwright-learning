//Challenge 1

let languages = ["JavaScript", "Python", "Java"];

console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);

//challenge 2

let n=[3,4,5,6,7];

for(let i=0;i<n.length;i++)
{
    console.log(n[i]);
}

//challenge 3

let browser=['mozilla','Opera','Edge',"chrome"]

for (let i=0;i<browser.length;i++)
{
    if (browser[i]!='Edge')
    {
        continue
    }
    else
    {
        browser[i]='Safari';
    }
}
console.log(browser);

//Challenge 4
let environments = ["DEV", "QA", "UAT", "PROD"];

for(let i=0;i<environments.length;i++)
{
    console.log("Running tests in "+environments[i]);
}