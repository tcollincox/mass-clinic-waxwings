
const express =  require("express");
const router = express.Router();
const referralCtrl = require("../Controllers/referralController");

router.get("/", referralCtrl.referralPage);
router.get("/get" , referralCtrl.getReferralController, );

module.exports =  router;