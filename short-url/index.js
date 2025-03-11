const express=require("express")
const urlRoute=require('./routes/url')
const URL=require('./models/url')
const {connectMongoDb}=require("./connect")
const app=express()

app.set('port',process.env.PORT||3000)
connectMongoDb('mongodb://localhost:27017/short-url').then(()=>console.log("MongoDb connected!"))
app.use(express.json())
app.use("/url",urlRoute)

app.get('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId
    const entry=await URL.findOneAndUpdate({shortId},{$push:{visitHistory:{timestamp:Date.now()}}})
    res.redirect(entry.redirectedURL)
})


app.listen(app.get('port'),()=>console.log("Server is Started!")
)