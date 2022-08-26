//node js mysql connection
import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
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

app.get("/", (req, res) => {
  let sqlQuery = "SELECT * FROM houses";

  let query = connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(port, hostname, () => {
  console.log(`Your Server is running at http://${hostname}:${port}/`);
});
