const Manager =  require('../lib/manager')


describe("Manager class", () => {
    it("should have managers office number", () => {
      const manager = [{}]
      expect(new Manager(manager).getRole()).toBe(manager)
    });

    it("getEmployeeName returns office number", () =>{
      const officeNum = "001";
        expect(new Manager(officeNum).getOfficeNumber()).toBe(officeNum)
    })


})