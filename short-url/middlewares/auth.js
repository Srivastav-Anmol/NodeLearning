const {getUser}=require('../service/auth')

// this is not a clean code

/* async function restrictToLoggedInUserOnly(req,res,next){
    const userUid=req.headers['authorization']
    if(!userUid) return res.redirect("/login")
    const token =userUid.split("Bearer ")[1] //Bearer ewjoijreofnoiewjfoi

    const user=getUser(token)
    if(!user) return res.redirect('/login')
    req.user=user
    next()
}

async function checkAuth(req,res,next){
    //const userUid=req.cookies?.uid
    const userUid=req.headers['authorization']
    const token =userUid.split("Bearer ")[1] //Bearer ewjoijreofnoiewjfoi
    const user=getUser(token)
    req.user=user
    next()
}

module.exports={
    restrictToLoggedInUserOnly,
    checkAuth
} */

//after refracting the code which will do both authorizarion and authentication

function checkForAuthentication(req,res,next){
    const tokenCookie=req.cookies?.token //check if header is present
    req.user=null //initial value
    if(!tokenCookie) //no token
        return next()
    const token=tokenCookie
    const user=getUser(token)
    req.user=user //set it to current user
    return next()
}

function restrictTo(roles=[]){
    return function (req,res,next){
        if(!req.user) return res.redirect("/login")
        if(!roles.includes(req.user.role)) return res.end("UnAuthorized")
        return next()
    }
}

module.exports={
    checkForAuthentication,
    restrictTo
}