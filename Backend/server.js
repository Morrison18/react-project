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

app.get('/', (req, res) => {
  res.send('Brians Music App');
})
// gets json data from albums
app.get('/api/show', (req, res)=>{
    const albums = [
        {
            "Band": "The Stone Roses",
            "Album": "The Stone Roses",
            "Year": "1989",
            "Cover": "https://www.clashmusic.com/sites/default/files/field/image/R-156092-1534078946-7723.jpeg.jpg"
        },
        {
            "Band": "The Stone Roses",
            "Album": "The Stone Roses",
            "Year": "1989",
            "Cover": "https://www.clashmusic.com/sites/default/files/field/image/R-156092-1534078946-7723.jpeg.jpg"
        },
        {
            "Band": "The Stone Roses",
            "Album": "The Stone Roses",
            "Year": "1989",
            "Cover": "https://www.clashmusic.com/sites/default/files/field/image/R-156092-1534078946-7723.jpeg.jpg"
        },
        {
            "Band": "The Stone Roses",
            "Album": "The Stone Roses",
            "Year": "1989",
            "Cover": "https://www.clashmusic.com/sites/default/files/field/image/R-156092-1534078946-7723.jpeg.jpg"
        }
    ]
    res.json({myalbums: albums})
})

// goes to html form in hello.html
app.get('/test', (req, res)=>{
    res.sendFile(__dirname + "/hello.html");
})

// take fname + lname from form and wites it to the page
app.get('/name', (req, res)=>{
    res.send("hi " + req.query.fname + ' ' + req.query.lname)
})

app.post('/name', (req,res)=> {
    res.send("Hello " + req.body.fname + " " + req.body.lname)
})

//listens for the url+port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})