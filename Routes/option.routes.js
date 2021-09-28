const express =  require("express");
const router = express.Router();
const referralCtrl = require("../Controllers/optionsController");

router.get("/", optionCtrl.optionPage);

module.exports = router;

//test comment