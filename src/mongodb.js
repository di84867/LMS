const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LMS")
.then(() => {
    console.log("Connected to MongoDB...");
})
.catch(()=>{
    console.log("Error connecting to MongoDB");
})

const LogInSchema=new mongoose.Schema({
    ID:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const user = mongoose.model("user", LogInSchema);

const collection=new mongoose.model("Collection1", LogInSchema)

module.exports=collection