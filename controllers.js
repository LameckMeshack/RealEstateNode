export const getData = (req, res) => {
  let sqlQuery = "SELECT * FROM houses";

  let query = connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

export const getHouse = (req, res) => {
  let sqlQuery = "SELECT * FROM houses WHERE id = ?";
  let query = connection.query(sqlQuery, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

export const addHouse = (req, res) => {
  let data = { name: req.body.name, price: req.body.price };
  let sqlQuery = "INSERT INTO houses SET ?";
  let query = connection.query(sqlQuery, data, (err, result) => {
    if (err) throw err;
    res.send(result);
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
  let query = connection.query(sqlQuery, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

export const deleteHouse = (req, res) => {
  let sqlQuery = "DELETE FROM houses WHERE id=" + req.params.id + "";
  let query = connection.query(sqlQuery, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
