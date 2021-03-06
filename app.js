const express = require("express");
const path = require("path");
var indexroutes = require("./routes");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/carbonOffset");
const bodyParser = require("body-parser");
const session = require('express-session');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // httpOnly: true,
    secure: true
    //cookie: { maxAge: 60000 }
}))


app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexroutes);

app.listen(3000, () => console.log("App listening on port 3000!"));
