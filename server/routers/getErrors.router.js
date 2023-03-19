const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const errors = [
  {
    id: "1",
    description: "Test description",
    flag: "Test flag",
    comments: "Test comments"
  },
];

router.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  console.log("hello from getErrors.router");
  res.send(errors);
});

module.exports = router;