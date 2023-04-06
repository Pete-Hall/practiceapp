const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {

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