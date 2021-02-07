const Manager = require("../lib/Manager");

test("Can set officeNumber via constructor", () => {
  const officeNum = 9000;
  const e = new Manager("Name", 1, "test@test.com", officeNum);
  expect(e.officeNum).toEqual(officeNum);
});

test("getOfficeNum() should return 25", () => {
  const officeNum = "25";
  const e = new Manager("Name", 5, "test@test.com", officeNum);
  expect(e.getOfficeNum()).toEqual(officeNum);
});

test("getRole() should equal Manager", () => {
  const role = "Manager";
  const e = new Manager("Name", 7, "test@test.com");
  expect(e.getRole()).toEqual(role);
});
