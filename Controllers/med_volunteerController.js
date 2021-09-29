const med_volunteerModel = require("../Models/med_volunteer.js");


exports.med_volunteersPage = (req,res) => {

    const mVolunteers = med_volunteer.getMedVolunteers();

    res.render('med_volunteers.ejs', {med_volunteer: med_volunteers});
}

//hi armon