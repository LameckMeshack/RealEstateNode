//node js mysql connection
import express from "express";
import mysql from "mysql";

const app = express()
const port = process.env.PORT || 3000;
const hostname = "127.0.0.1";
//localhost:3000/


app.get('/',(req,res)=>{
    res.send("Hello Rhino")
}

)

app.listen(port, hostname, () => {
  console.log(`Your Server is running at http://${hostname}:${port}/`);
});