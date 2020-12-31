//setting up web server
const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//listens for the url+port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})