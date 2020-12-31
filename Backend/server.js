//setting up web server
const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');

// cors allows you to make a req to a dif domain
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Connection for the database
const myConnectionString = 'mongodb+srv://brian:welcome20@cluster0.wvvof.mongodb.net/MusicDB?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema;

//what type of data im going to store
const    MusicSchema = new Schema({
    Album: String,
    Band: String,
    Cover: String
});

const MusicModel = mongoose.model("music", MusicSchema);

//sending json data
app.get('/api/albums', (req, res) => {
    MusicModel.find((err, data) => {
        res.json(data);
    });

});

// show album by id
app.get('/api/albums/:id', (req, res)=>{
    console.log(req.bodyParser.id);

    MusicModel.findById(req.params.id, (err, data) =>{
        res.json(data);
    });
})

// deleting by id
app.delete('/api/albums/:id', (req,res)=>{
    console.log("delete Album:"+ req.params.id);

    MusicModel.findByIdAndDelete(req.params.id, (err, data)=> {
        res.send(data);
    })
})


// writes to the db
app.post('/api/albums', (req, res) => {
    console.log("Album Received");
    console.log(req.body.Album);
    console.log(req.body.Band);
    console.log(req.body.Cover);

    MusicModel.create({
        Album: req.body.Album,
        Band: req.body.Band,
        Cover: req.body.Cover
    });
    res.send('Album added');

})

//listens for the url+port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})