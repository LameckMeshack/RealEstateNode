//node js mysql connection
import express from "express";

import bodyParser from "body-parser";
import houseRouter from "./routes.js";
import { connection } from "./connection.js";

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const hostname = "127.0.0.1";

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    console.log(err);
    return;
  }
  console.log("Connection established");
});

app.use("/houses", houseRouter);

app.listen(port, hostname, () => {
  console.log(`Your Server is running at http://${hostname}:${port}/`);
});
