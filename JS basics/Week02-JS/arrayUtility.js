//Mini Project
let fruits=['Apple',"Banana"];
console.log(fruits);

const addfruit=(fruits)=>
{
    fruits.push("kiwi");
    return fruits;
}

newfruit=addfruit(fruits);
console.log(newfruit)

const removelast=(fruits)=>fruits.pop()

remove=removelast(fruits);
console.log(fruits);

const findfruit=(fruits)=>fruits.includes("Banana");
if (findfruit)
{
    console.log("Exists");
}
else
{
    console.log("Not found");
}

const replacefruit=(fruits)=>fruits.splice(1,1,"Kiwi");
replacefruit(fruits);
console.log(fruits);

const print=(fruits)=> console.log(fruits);
print(fruits);