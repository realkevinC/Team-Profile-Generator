// import employee
const Employee = require('./Employee')

// extend
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // override employee to manager 
    getRole () {
        return "Manager";
    }
}

// export
module.exports = Manager;