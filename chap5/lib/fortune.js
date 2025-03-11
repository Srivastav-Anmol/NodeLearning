const fortune=[
    "Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
]

function getFortune(){
    const index=Math.floor(Math.random()*fortune.length)
    return fortune[index]  
}
module.exports={
	getFortune
}