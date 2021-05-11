const Employee = require('../lib/employee')

describe("Employee class", () => {
    it("should have name, Id and email of employees", () => {
      const employees = {}
      expect(new Employee(employees)).toBe('{}')
    });

    it("getEmployeeName returns name string only", () =>{
      const name = "Phil";
        expect(new Employee(name)).toBe(name)
    })

    it("getEmployeeName returns the Id", () =>{
      const id = 4578;
        expect(new Employee(id)).toBe(id)
    })

    it("getEmployeeName returns email address", () =>{
      const email = "pca";
        expect(new Employee(email)).toBe(email)
    }

)})

    









