const express=require("express")

const userRouter=require('./routes/user')
const {connectMongoDb}=require('./connection.js')
const {logReqRes}=require('./middlewares/index.js')

const users=require('./MOCK_DATA.json')
const app=express()
app.set('port',process.env.PORT||3000)

//connection of mongodb
connectMongoDb("mongodb://127.0.0.1:27017/app-1").then(()=>{
    console.log("MongoDb Connected!");
    
})

//middleware plugin used for giving data to body of HTML post request
app.use(express.urlencoded({extended:false})) //its next is pointing to custom middleware
//custom middleware
app.use(logReqRes("logs.txt"))

//ROUTES
app.use('/api/users',userRouter)

app.listen(app.get('port'),()=>console.log("Server is started!"))