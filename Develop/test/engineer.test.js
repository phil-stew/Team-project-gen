const Engineer = require('../lib/engineer')


describe("Engineer class", () => {
    it("should have email address", () => {
      const engineer = {}
      expect(new Engineer(engineer).getRole()).toBe(engineer)
    });

    it("getEmployeeName returns email address", () =>{
      const gituser = phillio;
        expect(new Employee(gituser).getGithub()).toBe(gituser)
    })


})