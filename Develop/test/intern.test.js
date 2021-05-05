const Intern = require('../lib/intern')



describe("Intern class", () => {
    it("should intern school name", () => {
      const intern = [{}]
      expect(new Intern(intern).getRole()).toBe(intern)
    });

    it("getSchool returns school name", () =>{
      const school = "AMB FGB";
        expect(new Intern(school).getSchool()).toBe(school)
    })



})