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
app.post("/view",(req,res)=>{
    teachermodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/search",(req,res)=>{
    let input=req.body
    teachermodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/delete",(req,res)=>{
    let input=req.body
    teachermodel.findByIdAndDelete(input._id).then(
        (response)=>{
        res.json({"status":"success"})
        }
        ).catch(
        (error)=>{
        res.json("error")
        }
        )
        
    })



app.listen(8080,()=>{
    console.log("server started")
    })
    
    