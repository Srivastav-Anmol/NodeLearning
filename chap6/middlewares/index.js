const file=require("fs")
function logReqRes(fileName){
    return ((req,res,next)=>{
        file.appendFile(fileName,`\n${Date.now()}:${req.method}:${req.path}`,(err,data)=>{
            next()//this is pointing to .get('/api/users')
            //read about res also
        })
    })
}
module.exports={logReqRes}