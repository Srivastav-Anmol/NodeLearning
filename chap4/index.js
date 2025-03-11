const express=require("express")
const app=express()

//set up handlebars engine
const handlebars=require("express3-handlebars").create({defaultLayout:'main'})
app.engine('handlebars',handlebars.engine)
app.set('view engine','handlebars')

//port
app.set('port',process.env.PORT||3000)
app.use(express.static(__dirname+'/public'))

const fortune=[
    "Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
]

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/about',(req,res)=>{
    const randomFortune=fortune[Math.floor(Math.random()*fortune.length)]
    res.render('about',{fortune:randomFortune})
})

//404 catch-all handlebar
app.use((req,res,next)=>{
    res.status(404)
    res.render('404')
})

//500 catch-all handlebar
app.use((err,req,res,next)=>{
    console.log(err.stack);//error dekhne ke liye
    res.status(500)
    res.render('500')
})

app.listen(app.get('port'),()=>console.log("Server is started"))