const jwt=require("jsonwebtoken")
const secretKey="12345@abcdefgh%^&*("

function setUser(user){
    return jwt.sign({
        _id:user._id,
        email:user.email,
    },secret)
}
function getUser(token){
    if(!token) return null
    try{
        return jwt.verify(token,secret)
    }catch(error){
        return null
    }
}
module.exports={
    setUser,
    getUser
}