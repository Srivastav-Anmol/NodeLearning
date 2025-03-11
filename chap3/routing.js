const http=require("http")
const myServer=http.createServer((req,res)=>{
    const path=req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch(path){
        case "":
            //res.writeHead() is a method in Node.js used to send status codes (like 200 for success or 404 for "Not Found") 
            // and headers (such as the type of content being sent) back to the client (e.g., browser).
            res.writeHead(200,{"content-type":"text/plain"})
            res.end('Homepage')
            break
        case "/about":
            res.writeHead(200,{"content-type":'text/plain'})
            res.end("About us page")
            break
        default:
            res.writeHead(404,{"content-type":"text/plain"})
            res.end("Not Found")
            break
    }
})
myServer.listen(3000,()=>console.log("server is Started!"))
