const Engineer = require("../lib/Engineer");

test("Can set github via constructor", () => {
  const github = "githubUser";
  const e = new Engineer("Name", 1, "test@test.com", github);
  expect(e.github).toEqual(github);
});

test("getGithub() should return testing1234", () => {
  const github = "testing1234";
  const e = new Engineer("Name", 5, "test@test.com", github);
  expect(e.getGithub()).toEqual(github);
});

test("getRole() should retern Engineer", () => {
  const role = "Engineer";
  const e = new Engineer("Name", 7, "test@test.com");
  expect(e.getRole()).toEqual(role);
});
