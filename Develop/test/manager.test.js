const Manager =  require('../lib/manager')



describe("Intern class", () => {
  it("should intern school name", () => {
    const newManager = new Manager('phil', 5 ,'P@live.nm', '4169854263')
    expect(typeof(newManager)).toBe('object')
  });

  it("getSchool returns school name", () =>{
    const newManager = new Manager('phil', 5 ,'P@live.nm', '4169854263')
      expect(newManager.officen).toBe('4169854263')
  })



})