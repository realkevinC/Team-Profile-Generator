const Employee = require("../lib/Employee");




test("can create an instance of an Employee", () => {
    // set code for exectation
    const newEmployee = new Employee();

    // test our expectation
    expect(typeof newEmployee).toBe("object");
})

it("what are we testing?", () => {
    // code to run test
})