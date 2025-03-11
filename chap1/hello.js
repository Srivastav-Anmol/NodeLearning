const math=require('./math')
const data=require('./data.json')
console.log(data.name);

//we can also destructure the math object 
const {addFunction,subtractFunction,circleArea}=require('./math')
console.log("Hey there! I am JavaScript")
console.log(addFunction(1,5));
console.log(subtractFunction(10,7));
//here we will discuss about scope of module i.e we only export the function defined in math.js but if we try to
//access Pi var it will give error because it is not exported
//console.log(Pi); this will throw error

console.log(circleArea(5));


const path=require('path')
console.log(path.dirname('./math.js'));
console.log(path.basename('C:\Users\ASUS\Desktop\Node-Js\01helloworld\math.js'));








