const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {

  console.log('hello from addError!', req.body);

  // let queryString = `SELECT * FROM rtkquery ORDER BY id ASC;`
  
  // pool.query(queryString).then((results) => {
  //   console.log("hello from getErrors.router", results.rows);
  //   res.send(results.rows);
  // }).catch((err) => {
  //   console.log(err);
  //   res.sendStatus(500);
  // })

});

module.exports = router;