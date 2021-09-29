const med_volunteer = {
    userId: {
        type: "string",
        required: true,
    },
    name: {
        fName: "string",
        lName: "string",
        required: true,
    },
    year: {
        type: "string",
        required: true,
    }
}

exports.getMedVolunteers = () => {return med_volunteers} ; 