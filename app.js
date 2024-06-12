const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {teachermodel}=require("./models/teacher")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://snehatk:6282011259@cluster0.jd3vcot.mongodb.net/trdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let teacher =new teachermodel(input)
    teacher.save()
    console.log(teacher)
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("server started")
    })
    
    