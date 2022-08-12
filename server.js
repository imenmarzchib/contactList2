
const express=require("express");
const app=express();
const db_connect=require("./db_connect") ;
require("dotenv").config();
db_connect();
/* app.get('/fatma',(req,res)=>res.send("hello")) */
app.use(express.json());
app.use("/user",require("./routes/user"))
app.listen(process.env.PORT, (err)=>err?console.log(err):console.log("server is runnig" ));



