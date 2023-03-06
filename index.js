const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
 const path = require('path');
const bodyParser = require("body-parser");
const app = express(); // init express app
const home = require('./routes/home');
const router = require('./routes/admin')
 
 
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

 // app.use(cors())
 
app.use(home)
// Mount the router at the /admin URL
app.use( router);

const start = async () => {
    try {
        await mongoose.connect(
            "mongodb://localhost:27017/shop1",{useNewUrlParser:true}
            // "mongodb+srv://moshe:228822@cluster0.eaaqo9b.mongodb.net/test" 


          );
         console.log("succsessfuly connected to mongodb");
         app.listen(4000, () => console.log("server listen on port 4000"));
    } catch (err) {
         console.log(err);
    }
};

start();