const http=require("http")
const file=require("fs")
const url=require("url") //playing with url
const express=require("express")
const path=require("path")
const app=express()

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'/first.html'))
})

app.get("/about",(req,res)=>{
    /* return res.send(`Hello ${req.query.name} your age is ${req.query.age}`) */
    res.sendFile(path.join(__dirname,'/about.html'))
})


app.listen(8000,()=>console.log("Server is started!!"))

/* const myServer=http.createServer(app) */

/* const myServer=http.createServer((req,res)=>{

    if(req.url=="/favicon.ico") return res.end()
    const log=`${Date.now()}: ${req.url} New Request Received\n`
    const myUrl=url.parse(req.url,true)
    console.log(myUrl);
    
    file.appendFile('logs.txt',log,(err,data)=>{
        switch(myUrl.pathname){
            case "/":
            res.end("It is a Homepage")
            break
            case "/about":
                const username=myUrl.query.name
                res.end(`Hi, ${username}`)
            break
            case "/search":
                const search=myUrl.query.search_query
                res.end("Your search result is "+search)
            break
            default:
                res.end("404 Not Found")
                break
        }
    })
}) */


/* myServer.listen(8000,()=>console.log('Server is Started!')) */

