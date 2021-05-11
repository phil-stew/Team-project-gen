const inquirer = require("inquirer");
const Intern = require("./Develop/lib/intern");
const Manager = require("./Develop/lib/manager");
const Engineer = require("./Develop/lib/engineer");
const teamArr = [];
const fs = require('fs');
const util = require('util');




const getRole = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Please select the role of the empolyee!',
            name: 'role',
            choices: ['Engineer', 'Intern', 'Manager', 'No one to add']

        }
    ])
}


// Start playing
const contine = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            message: 'Do you wish to add more empolyee!',
            name: 'ok',

        }
    ]).then((res) => {
        if (res.ok) {
            init()
        } else {
            try {
                finished()
            } catch (err) {
                return console.error(err);
            }
        }
    })
}

const getEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of your engineer?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the id of the employee?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the email of the employee?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the GITHUB of the employee?',
            name: 'github',
        }
    ]).then(res => {
        const engineer = new Engineer(res.name, res.id, res.email, res.github)
        teamArr.push(engineer)
        console.log("engineer", engineer)
        console.log("teamArr", teamArr)
        contine();
    })
}


const getIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of your intern?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the id of the intern?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the email of the intern?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What school does your intern go to?',
            name: 'school',
        }
    ]).then(res => {
        const intern = new Intern(res.name, res.id, res.email, res.school)
        teamArr.push(intern)
        console.log("intern", intern)
        console.log("teamArr", teamArr)
        contine()
    })

}

const getManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of your Manager?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the id of the Manager?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the email of the Manager?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the office number for Manager?',
            name: 'officen',
        }
    ]).then(res => {
        const manager = new Manager(res.name, res.id, res.email, res.officen)
        teamArr.push(manager)
        console.log("manager", manager)
        console.log("teamArr", teamArr)
        contine()
    })

}


const init = () => {
    getRole()
        .then((answer) => {

            if (answer.role === 'Intern') {
                getIntern()


            } else if (answer.role === 'Engineer') {

                getEngineer()

            } else if (answer.role === 'Manager') {
                getManager()


            } else {
                finished()

                console.log('Thank you')
            }

        })

}



let htmlCards = (res) => {


    const internCard = (res) => {

        return `
        <div style=" border: black; border:solid; margin: 10px; padding: 5px;" class="row-sm b m">
           <div class="col" style="font-size: 15px; background-color: blue; color:yellow; align-content: center; ">
            <h1  style="font-size: 21px; text-align: left; padding: 10px; margin: 5px;" >${res.name}</h1>
            <h1  style="font-size: 21px; text-align:right; padding: 10px; margin: 5px;">  Intern </h1>
           </div>
            <div class="col" style=" border: black; border: solid .5px; ">
               ID: ${res.Id}
              </div>
              <div class="col" style=" border: black; border:solid .5px; ">
               Email: ${res.email}
              </div>
              <div class="col" style=" border: black; border:solid .5px; ">
                School: ${res.school}
              </div>
              </div>`

    }

    const managerCard = (res) => {

        return `
 
        <div style=" border: black; border:solid; margin: 10px; padding: 5px;" class="row-sm b m">
           <div class="col" style="font-size: 15px; background-color: blue; color:yellow; align-content: center; ">
            <h1  style="font-size: 21px; text-align: left; padding: 10px; margin: 5px;" >${res.name}</h1>
            <h1  style="font-size: 21px; text-align:right; padding: 10px; margin: 5px;">  Manager </h1>
           </div>
            <div class="col" style=" border: black; border: solid .5px; ">
               ID: ${res.Id}
              </div>
              <div class="col" style=" border: black; border:solid .5px; ">
               Email: ${res.email}
              </div>
              <div class="col" style=" border: black; border:solid .5px; ">
                Office Num: ${res.officen}
              </div>
              </div>
              `
    }

    const engineerCard = (res) => {

        return `
    
        <div style=" border: black; border:solid; margin: 10px; padding: 5px;" class="row-sm b m">
           <div class="col" style="font-size: 15px; background-color: blue; color:yellow; align-content: center; ">
            <h1  style="font-size: 21px; text-align: left; padding: 10px; margin: 5px;" >${res.name}</h1>
            <h1  style="font-size: 21px; text-align:right; padding: 10px; margin: 5px;">  Engineer </h1>
           </div>
            <div class="col" style=" border: black; border: solid .5px; ">
               ID: ${res.Id}
              </div>
              <div class="col" style=" border: black; border:solid .5px; ">
               Email: ${res.email}
              </div>
              <div class="col" style=" border: black; border:solid .5px; ">
                GitHub: ${res.github}
              </div>
              </div> `
    }

    const page = []

    page.push(res.filter(role => role.getRole() === "Engineer").map(engineer => engineerCard(engineer)))
    page.push(res.filter(role => role.getRole() === "Intern").map(intern => internCard(intern)))
    page.push(res.filter(role => role.getRole() === "Manager").map(manager => managerCard(manager)))
    return page.join(" ")

}

const htmlpage = teamArr => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
        <title>Employee Setup Page</title>
    </head>
    
    <body style="background-color: rgb(188, 181, 218);">
    
    <h1 style="background-color: blue; color:yellow; padding: 20px; border: 15px; text-align: center; ">Employee</h1>
    
    
        <div class=" container  ">
        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3"  style="margin: .5rem; padding: .5rem;" >

    ${htmlCards(teamArr, ) }
    
       </div>   
       </div> 
    
    </body>
    </html>
    `
}

const finished = () => {
    fs.writeFileSync('Team-EX.html', htmlpage(teamArr), "utf-8")
    console.log("finished creating team page")
}





init()