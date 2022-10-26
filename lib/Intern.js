// import
const Employee = require('./Employee');

// employee extend Interns
class Intern extends Employee {
    constructor (name, id, email, school){
        super (name, id, email);

        this.school = school;
    }

    // return school from input
    getSchool () {
        return school;
    }

    // overide employee to intern
    getRole () {
        return "Intern";
    }
}

// export
module.exports = Intern;