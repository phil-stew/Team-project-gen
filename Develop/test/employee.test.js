const Employee = require('../lib/employee')

describe("Employee class", () => {
    it("should have name, Id and email of employees", () => {
      const newEmployee = new Employee('phil', 5 ,'P@live.nm', 'role')
      expect(typeof(newEmployee)).toBe('object')
    });

    it("getEmployeeName returns name string only", () =>{
      const newEmployee = new Employee('phil', 5 ,'P@live.nm', 'role')
        expect(newEmployee.name).toBe('phil')
    })

    it("getEmployeeName returns the Id", () =>{
      const newEmployee = new Employee('phil', 5 ,'P@live.nm', 'role')
        expect(newEmployee.Id).toBe(5)
    })

    it("getEmployeeName returns email address", () =>{
      const newEmployee = new Employee('phil', 5 ,'P@live.nm', 'role')
        expect(newEmployee.email).toBe('P@live.nm')
    }

)})

    









