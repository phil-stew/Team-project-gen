const inquirer = require("inquirer");
const Intern = require("./Develop/lib/intern");
const Manager = require("./Develop/lib/manager");
const Engineer = require("./Develop/lib/engineer");



// Start playing





const getRole = () => {
    return inquirer.prompt([
   {
    type: 'checkbox',
    message: 'Please select the role of the empolyee!',
    name: 'role',
    choices: ['Engineer', 'Intern','Manger',]

    }
])
} 

const getName = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the employee?',
            name: 'name', 
        },
])

}

const getId = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the id of the employee?',
            name: 'Id', 
        },
])

}

const getEmail = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the email of the employee?',
            name: 'Id', 
        },
])

}

const getOfficen = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the offiec number for employee?',
            name: 'officen', 
        },
])

}

const getGithub = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the GITHUB of the employee?',
            name: 'github', 
        },
])

}

const getSchool = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What school does the employee belong too?',
            name: 'school', 
        },
])

}









const init = () =>{
 getRole()
 .then(choices) 
 switch(choices){
     case 'Engineer' : getName(), getId(), getEmail(), getGithub();
     break;

     case 'Intern' : getName(), getId(), getEmail(), getSchool();
     break;

     case 'Manager' : getName(), getId(), getEmail(), getOfficen();
     break;

     case 'No More' : document.write("finished <br />")
     break;

     default : document.write("try again should only have one role selected<br/>")
 }

}

init()