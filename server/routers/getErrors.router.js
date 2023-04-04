const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  // https://stackoverflow.com/questions/58450951/blocked-by-cors-policy-error-when-calling-to-mongo-golang-db-with-angular-web-ap/58451189#58451189
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  let queryString = `SELECT * FROM rtkquery ORDER BY id ASC;`
  pool.query(queryString).then((results) => {
    console.log("hello from getErrors.router", results.rows);
    res.send(results.rows);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
});

module.exports = router;