const mongoose  =require("mongoose")
const schema =mongoose.Schema(
{
"teacherid":{type:String,required:true},
"teachername":{type:String,required:true},
"emailid":{type:String,required:true},
"mobile":{type:String,required:true},
"address":{type:String,required:true},
"salary":{type:String,required:true},
"subject":{type:String,required:true}

}
)
let teachermodel=mongoose.model("teachers",schema)
module.exports={teachermodel}
