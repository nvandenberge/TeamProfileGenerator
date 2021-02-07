const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const school = "Harvard";
  const e = new Intern("Name", 1, "test@test.com", school);
  expect(e.school).toEqual(school);
});

test("getSchool() should return Yale", () => {
  const school = "Yale";
  const e = new Intern("Name", 5, "test@test.com", school);
  expect(e.getSchool()).toEqual(school);
});

test("getRole() should return Intern", () => {
  const role = "Intern";
  const e = new Intern("Name", 7, "test@test.com");
  expect(e.getRole()).toEqual(role);
});
