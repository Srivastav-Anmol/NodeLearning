const express=require("express")
const fortune=require('./lib/fortune.js')
const app=express()
const handlebars=require("express3-handlebars").create({defaultLayout:'main'})
app.engine('handlebars',handlebars.engine)
app.set('view engine','handlebars')
//port
app.set('port',process.env.PORT||3000)

app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/about',(req,res)=>{
    res.render('about',{fortune:fortune.getFortune()})
})

app.use((req,res,next)=>{
    res.status(404)
    res.render('404')
})

app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500)
    res.render('500')
    
})
app.listen(app.get('port'),()=>console.log("Server is started!"))