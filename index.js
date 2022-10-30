// classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const Employee = require("./lib/Employee")
const inquirer = require("inquirer");
const fs = require("fs");
// const generateSite = require("./src/generate-site.js")

var team = [];
// var arrayOfIDs = [];

// ES5 styling
function start() {
// create manager
// createManager()
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Manager',
            validate: (answer) => {
                if (answer !== ' ') 
                {
                    return true
                }
                return "please enter a name"
            },
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the Manager',
            validate: (answer) => {
                if (isNaN(answer)) 
                {
                    return "please enter an id"
                }
                return true
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Manager',
            validate: (answer) => {
                if (answer !== ' ') 
                {
                    return true
                }
                return "please enter a email"
            },
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the Manager',
            validate: (answer) => {
                if (isNaN(answer)) 
                {
                    return "please enter an office number"
                }
                return true
            },
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
        createTeam()

        // where do we go from here(?) --> a choice option 
            // we could add an engineer  -->  addEngineer()
            // we could add an intern    -->  addIntern()
            // we could end our team and build the HTML page

    })
    .catch(error => {
        console.log(error)
    });
};

function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberType',
            message: 'Which team member are you adding?',
            choices: ['Engineer', 'Intern', 'not adding another team member',]
        },
    ])
    .then((choice) => {
        switch(choice.memberType) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern()
                break;
            default:
                buildTheTeam()
        }
    })
}

// ES6+ styling
// const addEmployee = () => {

//     return inquirer.prompt ([
//     {
//         type: 'input',
//         name: 'role',
//         message: 'What is your role?',
//         choice:['Engineer', 'Intern'],
//     },
//     {
//         type: 'input',
//         name: 'name',
//         message: "What's your name?",
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: "What's your ID?",
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: "What's your email?",
//     },
//     {
//         type: 'input',
//         name: 'github',
//         message: "What's your Github account?",
//       //  when: (input) => input.role === ('Engineer'),
    
//     },
//     {
//         type: 'input',
//         name: 'school',
//         message: "What school are you from?",
//         validate: (answer) => {
//             if (answer !== ' ') {
//                 return true
//             }
//             return "please enter a school"
        // }
       // when: (input) => input.role === ('Intern'),
    // },
    // {
    //     type: 'confirm',
    //     name: 'addTeamMember',
    //     message: 'Would you like to add another team member',
    //     default: false
    // }
    // ])
    // .then(results => {
    //     console.log(results);
    //     let employee;

    //     if(role === "Engineer"){
    //         employee = new Engineer (results.name, results.id, results.email, results.github)
    //     }
    //     else if(role === "Intern"){
    //         employee = new Intern (results.name, results.id, results.email, results.school)
    //     }
        // else{
        //     employee = new Employee(results.name, results.id, results.email)
        // }
//         team.push(employee);

//         if (addEmployee){
//             return addEmployee(team);
//         }
//         else{
//             return team
//         }
//     })
//     .catch(error => {
//         console.log(error)
//     });
// };


const addEngineer = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What's your name?",
            validate: (answer) => {
                if (answer !== ' ') 
                {
                    return true
                }
                return "please enter a name"
            },
        },
        {
            type: 'input',
            name: 'id',
            message: "What's your ID?",
            // check id isnt already taken
            validate: (answer) => {
                // add variable to check if id doesn't match an existing id
                if (isNaN(answer)) 
                {
                    return "please enter an id"
                }
                return true
            },
        },
        {
            type: 'input',
            name: 'email',
            message: "What's your email?",
            validate: (answer) => {
                // we need to check if email is unique
                if (answer !== ' ') 
                {
                    return true
                }
                return "please enter a email"
            },
        },
        {
            type: 'input',
            name: 'github',
            message: "What's your Github account?",
            validate: (answer) => {
                if (answer !== ' ') 
                {
                    return true
                }
                return "please enter a github account"
            },
          //  when: (input) => input.role === ('Engineer'),
        
        },
    ]).then((results) => {
        const engineer = new Engineer (
            results.name, 
            results.id, 
            results.email, 
            results.github
            )

        team.push(engineer);
        // arrayOfIDs.push(results.id)
        console.log(team);
        createTeam()

    })
    .catch(error => {
        console.log(error)
    });
};

const addIntern = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What's your name?",
            validate: (answer) => {
                if (answer !== ' ') 
                {
                    return true
                }
                return "please enter a name"
            },
        },
        {
            type: 'input',
            name: 'id',
            message: "What's your ID?",
            // check id isnt already taken
            validate: (answer) => {
                // add variable to check if id doesn't match an existing id
                if (isNaN(answer)) 
                {
                    return "please enter an id"
                }
                return true
            },
        },
        {
            type: 'input',
            name: 'email',
            message: "What's your email?",
            validate: (answer) => {
                // we need to check if email is unique
                if (answer !== ' ') 
                {
                    return true
                }
                return "please enter a email"
            },
        },
        {
            type: 'input',
            name:'school',
            message:'What school did you go to?',
            validate: (answer) => {
                // we need to check if email is unique
                if (answer !== ' ') 
                {
                    return true
                }
                return "please enter a school"
            },
        },
    ]).then ((results) => {
        const intern = new Intern (
            results.name, 
            results.id, 
            results.email, 
            results.school
            )

        team.push(intern);
        // arrayOfIDs.push(results.id)
        console.log(team);
        createTeam()

    })
    .catch(error => {
        console.log(error)
    });
};

// create the HTML page
const buildTheTeam = results => {
 fs.watchFile('./dist/teamBuilt.html', results, error => {
    if (error) {
        console.log(error);
        return;
    }
    else {
        console.log("Your team page is built. Check the teamBuilt.html")
    }
 })
};

start()