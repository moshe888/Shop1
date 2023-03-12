const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const path = require('path');
const session = require('express-session');

const bodyParser = require("body-parser");
const app = express(); // init express app

const adminC = require('./routes/admin copy')
const home = require('./routes/home');
const admin = require('./routes/admin')
const store  = require('./routes/store');
 
 
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true
  }));

 // app.use(cors())
 
app.use(home);

app.use(admin);
app.use(store);
app.use(adminC)
 

const start = async () => {
    try {
        await mongoose.connect(
            "mongodb://localhost:27017/shop1",{useNewUrlParser:true}
 

          );
         console.log("succsessfuly connected to mongodb");
         app.listen(4000, () => console.log("server listen on port 4000"));
    } catch (err) {
         console.log(err);
    }
};
app.use((req, res) => {
    res.status(404).send("Page not found");
  });

start();