const generateTeamPage = (team) =>{

    var cardArray = [];
    for (let i = 0; i < team.length; i++) {
        const employee = team[i];
        console.log(employee);
        const role = employee.getRole();
        console.log(role);

        switch(role){
            case 'Manager':
                const managerCard = generateManager(employee)
                cardArray.push(managerCard)
                break;
            case 'Engineer':
                const engineerCard = generateEngineer(employee)
                cardArray.push(engineerCard)
                break;
            case 'Intern':
                const internCard = generateIntern(employee)
                cardArray.push(internCard)
                break;
            default:
                break;
        }   
    }

    console.log(cardArray);

    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    </head>
    <body>
        <header>
            <nav class="navbar bg-danger">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 fs-1 w-100 text-center text-white">My Team</span>
                </div>
          </nav>
        </header>
        <main>
        <div class="container">
            <div class="row justify-content-center">
    
                ${cardArray}
                
        </main>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script> 
    </body>
    </html>
    `;
};

const generateManager = (manager) => {

    return`
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary">
                <p class="text-white fs-3">${manager.name}</p>
                <span class="text-white fs-3"><p><i class="bi bi-cup-hot-fill"></i> Manager</p></span>
            </div>
            <div class="card-body">
                <p id="id">ID: ${manager.id}</p>
                <p id="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p id="office">Office Number: ${manager.id}</p>
            </div>
        </div>
    </div>
    `;
};

const generateEngineer = (engineer) => {
    return`
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary">
                <p class="text-white fs-3">${engineer.name}</p>
                <span class="text-white fs-3"><p><i class="bi bi-github"></i> Engineer</p></span>
            </div>
            <div class="card-body">
                <p id="id">ID: ${engineer.id}</p>
                <p id="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p id="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

const generateIntern = (intern) => {
    return`
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary">
                <p class="text-white fs-3">${intern.name}</p>
                <span class="text-white fs-3"><p><i class="bi bi-mortarboard-fill"></i> Intern</p></span>
            </div>
            <div class="card-body">
                <p id="id">ID: ${intern.id}</p>
                <p id="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p id="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}






// export
module.exports = generateTeamPage;