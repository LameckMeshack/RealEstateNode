//node js mysql connection
import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import { houseRouter } from "./routes.js";

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const hostname = "127.0.0.1";

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "test",
  password: "Test=123",
  // port: "2222",
  database: "RealEstate",
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    console.log(err);
    return;
  }
  console.log("Connection established");
});

app.get("/houses", houseRouter);

app.listen(port, hostname, () => {
  console.log(`Your Server is running at http://${hostname}:${port}/`);
});
