import mysql from "mysql";

export const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "test",
  password: "Test=123",
  // port: "2222",
  database: "RealEstate",
});
