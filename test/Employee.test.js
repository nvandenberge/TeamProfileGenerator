const Employee = require("../lib/Employee");

test("getName() should return Nick", () => {
  const name = "Nick";
  const e = new Employee(name, 5, "test@test.com");
  expect(e.getName()).toEqual(name);
});

test("getId() should return 5", () => {
  const id = 5;
  const e = new Employee("Name", id, "test@test.com");
  expect(e.getId()).toEqual(id);
});

test("getEmail() should return test@test.com", () => {
  const email = "test@test.com";
  const e = new Employee("Name", 5, "test@test.com");
  expect(e.getEmail()).toEqual(email);
});

test("getRole() should equal Employee", () => {
  const role = "Employee";
  const e = new Employee("Nick", 7, "test@test.com");
  expect(e.getRole()).toEqual(role);
});
