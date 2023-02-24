const express = require('express');
const app = express();

let PORT = 4800;
const sendMail = require("./controllers/sendMail");


app.get("/", (req,res) => {
    res.send("The Server");
});

app.get("/mail", sendMail);

const start = async () => {
    try{
        app.listen(PORT, () => {
            console.log(`Running server at ${PORT}`);
        })
    }
    catch(err){
        console.log(err);
    }
}

start()

