// classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const Employee = require("./lib/Employee")
const inquirer = require("inquirer");
const fs = require("fs");

var team = [];

// ES5 styling
function start() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Manager'
            // validation: ''
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
    ])
    .then(results => {
        console.log(results);
        // we have new data from the USER
        // we create a new Manager Object INSTANCE
        const newManager = new Manager(results.name, results.id, results.email, results.officeNumber);

        // we have a new instance so we add it to our team
        team.push(newManager);
        console.log(team);
        addEmployee()

        // where do we go from here(?) --> a choice option 
            // we could add an engineer  -->  addEngineer()
            // we could add an intern    -->  addIntern()
            // we could end our team and build the HTML page

    })
    .catch(error => {
        console.log(error)
    });
};

// ES6+ styling
const addEmployee = () => {

    return inquirer.prompt ([
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choice:['Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'name',
        message: "What's your name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What's your ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your email?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What's your Github account?",
        when: (input) => input.role === ('Engineer'),
    },
    {
        type: 'input',
        name: 'school',
        message: "What school are you from?",
        when: (input) => input.role === ('Intern'),
    },
    {
        type: 'confirm',
        name: 'addTeamMember',
        message: 'Would you like to add another team member',
        default: false
    }
    ])
    .then(results => {
        console.log(results);
        let employee;

        if(role === "Engineer"){
            employee = new Engineer (results.name, results.id, results.email, results.github)
        }
        else if(role === "Intern"){
            employee = new Intern (results.name, results.id, results.email, results.school)
        }
        // else{
        //     employee = new Employee(results.name, results.id, results.email)
        // }
        team.push(employee);

        if (addEmployee){
            return addEmployee(team);
        }
        else{
            return team
        }
    })
    .catch(error => {
        console.log(error)
    });
};


// const addEngineer = () => {
// }
// const addIntern = () => {
// }


// create the HTML page
function createTeam(team) {

}

start()
