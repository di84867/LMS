const express = require("express");
const app = express();
const path = require("path");
const exphbs = require('express-handlebars');
const collection = require("./mongodb"); 

const templatePath = path.join(__dirname, '../templates'); 


app.use(express.json())
app.use('/templates', express.static(path.join(__dirname, '../tempelates')));
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set("view engine","hbs")
app.set("views", templatePath);
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("login");
})

app.get("/signup",(req,res)=>{
    res.render("signup");
})

app.post("/signup",async (req,res)=>{
    
const data={
    ID:req.body.ID,
    password:req.body.password
    };

app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body); // Ensure req.body has ID and password
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error); // This will send back the validation error
    }
});
try{
    await collection.insertMany([data])
    res.render("home")
    } catch (error){
        console.error(error); // Log error for debugging
        res.status(500).send("Internal Server Error"); // Send error response
    }
});

app.listen(3000,()=>{
    console.log(`Server is running on: http://localhost:3000`);
})
