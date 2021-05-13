const Engineer = require('../lib/engineer')


describe("Engineer class", () => {
    it("should have email address", () => {
      const newEngineer = new Engineer('phil', 5 ,'P@live.nm', 'phillo')
      expect(typeof(newEngineer)).toBe('object')
    });

    it("getEmployeeName returns email address", () =>{
      const newEngineer = new Engineer('phil', 5 ,'P@live.nm', 'phillo')
        expect(newEngineer.github).toBe('phillo')
    })


})


