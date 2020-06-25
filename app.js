const express = require("express");
const path = require("path");

const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.resolve('\html/index.html'));
});

app.get("/image/Cu1",(req,res) => {
    res.sendFile(path.resolve("\src/Cu2.png"))
})

app.get("/image/Cu2",(req,res) => {
    res.sendFile(path.resolve("\src/Cu1.png"))
})

app.get("/image/Home1",(req,res) => {
    res.sendFile(path.resolve('\src/Home1.png'))
})

app.get("/image/Home2",(req,res) => {
    res.sendFile(path.resolve('\src/Home2.png'))
})

app.get("/home", (req,res) => {
    res.sendFile(path.resolve('\html/home.html'));
})

app.listen(3000, () => {
    console.log("Listening on PORT 3000");
}) 