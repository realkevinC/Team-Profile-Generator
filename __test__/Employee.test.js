const Employee = require("../lib/Employee");

test("can create an instance of an Employee", () => {
    // set code for exectation
    const newEmployee = new Employee('Kevin', 23, 'kevin@gmail.com');

    // test our expectation
    expect(newEmployee.name).toBe(any(String));
    expect(newEmployee.id).toBe(any(Number));
    expect(newEmployee.email).toBe(any(String));
});

it("test employee name", () => {
    // what are we testing? 
    // code to run test
    const newEmployee = new Employee('Kevin', 23, 'kevin@gmail.com');
    expect(newEmployee.name).toBe(any(String));
});
it("test employee id", () => {
    // what are we testing? 
    // code to run test
    const newEmployee = new Employee('Kevin', 23, 'kevin@gmail.com');
    expect(newEmployee.id).toBe(any(Number));
});
it("test employee email", () => {
    // what are we testing? 
    // code to run test
    const newEmployee = new Employee('Kevin', 23, 'kevin@gmail.com');
    expect(newEmployee.email).toBe(any(String));
});
it("test employee role", () => {
    // what are we testing? 
    // code to run test
    const newEmployee = new Employee('Kevin', 23, 'kevin@gmail.com');
    expect(newEmployee.role).toBe('Employee');
});