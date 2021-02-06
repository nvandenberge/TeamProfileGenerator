const Engineer = require("../lib/Engineer");

test('getGithub() should return testing1234', () => {
    const github = 'testing1234';
    const e = new Engineer('Name', 5, 'test@test.com', github)
    expect(e.getGithub()).toEqual(github);
})

test('getRole() should equal Engineer', () => {
    const role = 'Engineer'
    const e = new Engineer('Nick', 7, 'test@test.com')
    expect(e.getRole()).toEqual(role);
})
