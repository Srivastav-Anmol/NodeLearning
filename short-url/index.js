const express=require("express")
const path=require("path")
const cookieParser=require("cookie-parser")

const URL=require('./models/url')
const {checkForAuthentication,restrictTo}=require('./middlewares/auth')
const {connectMongoDb}=require("./connect")

const urlRoute=require('./routes/url')
const staticRoute=require('./routes/staticRoutes')
const userRoute=require('./routes/user')

const app=express()

app.set('port',process.env.PORT||3000)
connectMongoDb('mongodb://localhost:27017/short-url').then(()=>console.log("MongoDb connected!"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(checkForAuthentication)

app.set("view engine","ejs") 
app.set("views",path.resolve("./views"))


app.use("/url",restrictTo(["NORMAL","ADMIN"]),urlRoute)
app.use('/user',userRoute)
app.use('/',staticRoute)

app.get('/url/test',async(req,res)=>{
    const allUrls= await URL.find({})
    return res.render('home',{
        urls:allUrls
    })
})

app.get('/url/:shortId',async(req,res)=>{
    const shortId=req.params.shortId
    const entry=await URL.findOneAndUpdate({shortId},{$push:{visitHistory:{timestamp:Date.now()}}})
    res.redirect(entry.redirectedURL)
})


app.listen(app.get('port'),()=>console.log("Server is Started!")
)