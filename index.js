
require('dotenv').config();
const express = require("express");
const home = require("./Routes/index.routes.js");
const referrals = require("./Routes/referral.routes.js");
const patients = require("./Routes/patient.routes.js")
const bodyParser =  require("body-parser");
const ejs = require("ejs");


const app = express();
const port = 8000;

//body-parser config;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("/", (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});

//register the enpoints
app.use("/home", home);
app.use("/referrals", referrals);
app.use("/patients", patients);
