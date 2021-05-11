const Employee = require('./employee')

class Manager extends Employee{
    constructor(name, Id, email, officen){
        super(name, Id, email)
        this.officen = officen
    }
getRole(){
    return "Manager"
}
getOfficen(){
    return this.officen
}


}

module.exports = Manager

/*switch(choices){
    case 'Engineer' : getName(), getId(), getEmail(), getGithub();
    break;

    case 'Intern' : getName(), getId(), getEmail(), getSchool();
    break;

    case 'Manager' : getName(), getId(), getEmail(), getOfficen();
    break;

    case 'No More' : document.write("finished <br />")
    break;

    default : document.write("try again should only have one role selected<br/>")
}*/