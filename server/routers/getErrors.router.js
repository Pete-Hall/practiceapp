const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const errors = [
  {
    description: "Test description",
    flag: "Test flag",
    comments: "Test comments"
  },
];

router.get('/', (req, res) => {
  console.log("hello from getErrors.router");
  res.send(errors);
});

module.exports = router;