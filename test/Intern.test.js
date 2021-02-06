const Intern = require("../lib/Intern");

test('getSchool() should return Yale', () => {
    const school = 'Yale';
    const e = new Intern('Name', 5, 'test@test.com', school)
    expect(e.getSchool()).toEqual(school);
})

test('getRole() should equal Intern', () => {
    const role = 'Intern'
    const e = new Intern('Nick', 7, 'test@test.com')
    expect(e.getRole()).toEqual(role);
})
