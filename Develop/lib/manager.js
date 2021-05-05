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