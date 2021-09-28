const referralModel = require("../Models/referral");
exports.getReferralController = (req, res, next) => {
    const referrals = referralModel.getReferrals();
    res.json(referrals);
}

exports.referralPage = (req,res) => {
        const referrals = referralModel.getReferrals();
        res.render('referrals.ejs', {referrals: referrals});
}


