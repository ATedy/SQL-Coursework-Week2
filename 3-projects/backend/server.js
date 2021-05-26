const express = require("express");
const {Pool} = require("pg");
const app = express();
const dbConfig = {
  host: "localhost",
  port: 5432,
  user: "DELL",
  password: "87654321",
  database: "cyf_ecommerce",
};
const pool = new Pool(dbConfig);

const customerSelectQuery = `SELECT * FROM customers `;

app.get("/", (req, res) => {
  res.send("first page");
});

app.get("/customers", (req, res) =>
  pool
    .query(customerSelectQuery)
    .then((result) => res.send(result.rows))
    .catch((error) => res.status(500).send(error))
);

app.listen(3000, () => {
  console.log(" Server running on port 3000");
});
