import { connection } from "./connection.js";

export const getHouses = (req, res) => {
  let sqlQuery = "SELECT * FROM houses";

  let query = connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    // console.log(results);
    res.send(results);
  });
};

export const getHouse = (req, res) => {
  let sqlQuery = "SELECT * FROM houses WHERE id = ?";
  let query = connection.query(sqlQuery, [req.params.id], (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

export const addHouse = (req, res) => {
  let data = { name: req.body.name, price: req.body.price };
  let sqlQuery = "INSERT INTO houses SET ?";
  let query = connection.query(sqlQuery, data, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

export const updateHouse = (req, res) => {
  let sqlQuery =
    "UPDATE houses SET name='" +
    req.body.name +
    "', price='" +
    req.body.price +
    "' WHERE id=" +
    req.params.id;
  let query = connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

export const deleteHouse = (req, res) => {
  let sqlQuery = "DELETE FROM houses WHERE id=" + req.params.id + "";
  let query = connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

/**
 * API Response
 *
 * @return response()
 */
// function apiResponse(results) {
//   return JSON.stringify({ status: 200, error: null, response: results });
// }
