const Employee = require("../lib/Employee");

test("Can set name via constructor arguments", () => {
  const name = "Nick";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const id = 10;
  const e = new Employee("Name", id);
  expect(e.id).toBe(id);
});

test("Can set email via constructor argument", () => {
  const email = "test@test.com";
  const e = new Employee("Name", 1, email);
  expect(e.email).toEqual(email);
});

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

test("getRole() should return Employee", () => {
  const role = "Employee";
  const e = new Employee("Name", 7, "test@test.com");
  expect(e.getRole()).toEqual(role);
});
