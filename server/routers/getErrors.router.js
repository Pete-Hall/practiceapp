const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const errors = [
  {
    id: "1",
    description: "Test 1 description",
    flag: "True",
    comments: "Test 1 comments"
  },
  {
    id: "2",
    description: "Test 2 description",
    flag: "False",
    comments: "Test 2 comments"
  },
];

router.get('/', (req, res) => {
  // https://stackoverflow.com/questions/58450951/blocked-by-cors-policy-error-when-calling-to-mongo-golang-db-with-angular-web-ap/58451189#58451189
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  console.log("hello from getErrors.router");
  res.send(errors);
});

module.exports = router;