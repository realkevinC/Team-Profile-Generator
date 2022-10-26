// import
const Employee = require('./Employee')

// Engineer constructor extends
class Engineer extends Employee{
constructor (name, id, email, github) {
    super (name, id, email);

    this.github = this.github
    }

    //  return github from input
    getGithub () {
        return this.github
    }

    // override employee to engineer
    getRole () {
        return "Engineer"
    }
};

// export
module.exports = Engineer