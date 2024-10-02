const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")

const tempelatePath=path.join(__dirname,'../tempelates/layouts')

// Middleware setup
app.use(express.json())
app.set("view engine", "hbs")
app.set("views", tempelatePath)

// Routes
app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup", async (req, res) => {
    const data = {
        ID: req.body.ID,
        password: req.body.password
    };

    try {
        await collection.insertMany([data]); // Insert user data into MongoDB collection
        res.render("home"); // Render home after successful signup
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).send("Internal Server Error"); // Send error response
    }
});

// Start server
app.listen(3000, ()=>{
    console.log(`Server is running on: http://localhost:3000`);
});