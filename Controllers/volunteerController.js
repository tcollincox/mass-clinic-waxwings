const volunteerModel = require("../Models/volunteer.js");


exports.volunteersPage = (req,res) => {

    const volunteers = volunteerModel.getvolunteers();
    res.render('volunteers.ejs', {volunteers: volunteers});
}
