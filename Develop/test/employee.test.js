const Employee = require('../lib/employee')

describe("Employee class", () => {
    it("should have name, Id and email of employees", () => {
      const Employees = {}
      expect(new Employee(employees).getRole()).toBe(employees)
    });

    it("getEmployeeName returns name string only", () =>{
      const name = "Phil";
        expect(new Employee(name).getName()).toEqualto(name)
    })

    it("getEmployeeName returns the Id", () =>{
      const id = 4578;
        expect(new Employee(id).getId()).toBe(id)
    })

    it("getEmployeeName returns email address", () =>{
      const email = "p.s@live.ca";
        expect(new Employee(email).getEmail()).toBe(email)
    }

)})

    









