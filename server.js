const express=require("express")
const app=express()
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
res.sendFile(__dirname +"/index.html")
})
app.post("/",(req,res)=>{
    let height=req.body.height
    let weight=req.body.weight
    let result=Math.floor(weight/(Math.pow(height,2)) *10000)
    res.send(`<h1>Your BMI is ${result}</h1>`)
})
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000/")
})