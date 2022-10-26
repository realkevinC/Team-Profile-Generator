// classes
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const inquirer = require("inquirer");

var team = [];

// ES5 styling
function start() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Manager',
            validation: ''
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the Manager'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Manager'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the Manager'
        },
    ]).then(results => {
        console.log(results);
        // we have new data from the USER
        // we create a new Manager Object INSTANCE
        var newManager = new Manager(results.name, results.id, results.email, results.officeNumber);

        // we have a new instance so we add it to our team
        team.push(newManager);
        console.log(team);

        // where do we go from here(?) --> a choice option 
            // we could add an engineer  -->  addEngineer()
            // we could add an intern    -->  addIntern()
            // we could end our team and build the HTML page

    }).catch(error => {
        console.log(error)
    });
}

start();

// ES6+ styling
const addEngineer = () => {

}

function addIntern() {

}


// create the HTML page
function createTeam(team) {

}