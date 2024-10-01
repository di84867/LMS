const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")

const templatePath=path.join(__dirname,'../tempelates')

app.use(express.json())
app.use('/templates', express.static(path.join(__dirname, '../tempelates')));
app.set("view engine","hbs")
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post('/login',async (req,res)=>{
    
const data={
    ID:req.body.ID,
    password:req.body.password
}

app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body); // Ensure req.body has ID and password
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error); // This will send back the validation error
    }
});
await collection.insertMany([data])

res.render("home")
})

app.listen(3000, () => {
    console.log(`Server is running on: localhost:${3000}`);
})