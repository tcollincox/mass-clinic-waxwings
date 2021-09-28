const express =  require("express");
const router = express.Router();
const patientCTRL = require("../controllers/indexController.js");

router.get('/', patientCTRL.homepage);

module.exports =  router;