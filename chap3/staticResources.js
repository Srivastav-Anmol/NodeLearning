const http=require("http")
const file=require("fs")

function staticFiles(res,path,contentType,responseCode){
    if(!responseCode) responseCode=200
    file.readFile(__dirname+path,(err,data)=>{
        if(err){
            res.writeHead(500,{"Content-type":"text/plain"})
            res.end("500 - Internal Error")
        }else {
            res.writeHead(responseCode,{"Content-type":"text/plain"})
            res.end(data)
        }
    })
}

const myServer=http.createServer((req,res)=>{
    const path=req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch(path){
        case "":
            staticFiles(res,'/public/home.html','text/plain')
            break
        case "/about":
            staticFiles(res,'/public/about.html','text/plain')
            break
        default :
            staticFiles(res,'/public/404.html','text/plain')
            break
    }
})

myServer.listen(3000,()=>console.log("Server is Started"))