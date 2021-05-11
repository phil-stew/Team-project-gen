const Intern = require('../lib/intern')



describe("Intern class", () => {
    it("should intern school name", () => {
      const intern = [{}]
      expect(new Intern(intern)).toBe(intern)
    });

    it("getSchool returns school name", () =>{
      const school = "AMB FGB";
        expect(new Intern(school)).toBe(school)
    })



})