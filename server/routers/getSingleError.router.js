const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res) => {

  let queryString = `SELECT * FROM rtkquery WHERE id=${req.params.id};`

  pool.query(queryString).then((results) => {
    console.log("hello from getSingleError.router", results.rows);
    res.send(results.rows);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })

});

// router.get('/multiple/:id&:flag', (req, res) => {
//   // https://stackoverflow.com/questions/58450951/blocked-by-cors-policy-error-when-calling-to-mongo-golang-db-with-angular-web-ap/58451189#58451189
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

//   console.log(`hello from getSingleError.router for multiple params: id is ${req.params.id} and flag is ${req.params.flag}`);
//   res.send(errors.filter(error => error.id == req.params.id && error.flag == req.params.flag));
// });

router.get('/', (req, res) => {

  let queryString = `SELECT * FROM rtkquery WHERE id=${req.query.id} AND flag=${req.query.flag};`

  pool.query(queryString).then((results) => {
    console.log("hello from getSingleError.router with multiple params", results.rows);
    res.send(results.rows);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })

});

module.exports = router;