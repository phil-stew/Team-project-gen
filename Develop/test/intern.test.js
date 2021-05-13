const Intern = require('../lib/intern')



describe("Intern class", () => {
    it("should intern school name", () => {
      const newIntern = new Intern('phil', 5 ,'P@live.nm', 'OUV')
      expect(typeof(newIntern)).toBe('object')
    });

    it("getSchool returns school name", () =>{
      const newIntern = new Intern('phil', 5 ,'P@live.nm', 'OUV')
        expect(newIntern.school).toBe('OUV')
    })



})