const Manager = require("../lib/Manager");

test("can create an instance of an Manager", () => {
    // set code for exectation
    const newManager = new Manager('Kevin', 23, 'kevin@gmail.com',7);

    // test our expectation
    expect(newManager.name).toBe(any(String));
    expect(newManager.id).toBe(any(Number));
    expect(newManager.email).toBe(any(String));
    expect(newManager.officeNumber).toBe(any(Number));
});

it("test manager name", () => {
    // what are we testing? 
    // code to run test
    const newManager = new Manager('Kevin', 23, 'kevin@gmail.com',7);
    expect(newManager.name).toBe(any(String));
});
it("test manager id", () => {
    // what are we testing? 
    // code to run test
    const newManager = new Manager('Kevin', 23, 'kevin@gmail.com',7);
    expect(newManager.id).toBe(any(Number));
});
it("test manager email", () => {
    // what are we testing? 
    // code to run test
    const newManager = new Manager('Kevin', 23, 'kevin@gmail.com',7);
    expect(newManager.email).toBe(any(String));
});
it("test manager office number", () => {
    // what are we testing? 
    // code to run test
    const newManager = new Manager('Kevin', 23, 'kevin@gmail.com',7);
    expect(newManager.officeNumber).toBe(any(Number));
});
it("test manager role", () => {
    // what are we testing? 
    // code to run test
    const newManager = new Manager('Kevin', 23, 'kevin@gmail.com',7);
    expect(newManager.role).toBe('Manager');
});