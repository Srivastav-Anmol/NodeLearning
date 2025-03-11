function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}
const Pi=3.14
function circleArea(r){
    return Pi*r*r
}
//if we have multiple functions that need to be import then we can put all function in object.
module.exports={
    addFunction:add,
    subtractFunction:sub,
    circleArea,
}