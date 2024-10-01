const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/LMS")
.then(() => {
    console.log("Connected to MongoDB...");
})
.catch(()=>{
    console.log("Error connecting to MongoDB");
})

const userSchema=new mongoose.Schema({
    ID: {
        type:String,
        required:true
    },
    Password:       {
        type:String,
        required:true
    }
})
const user = mongoose.model('user', userSchema);

const collection=new mongoose.model("Collection1",userSchema)

module.exports=collection