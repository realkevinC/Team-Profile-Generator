const Intern = require("../lib/Intern");

test("can create an instance of an Intern", () => {
    // set code for exectation
    const newIntern = new Intern('Kevin', 23, 'kevin@gmail.com','Columbia');

    // test our expectation
    expect(newIntern.name).toBe(any(String));
    expect(newIntern.id).toBe(any(Number));
    expect(newIntern.email).toBe(any(String));
    expect(newIntern.school).toBe(any(String))
});

it("test intern name", () => {
    // what are we testing? 
    // code to run test
    const newIntern = new Intern('Kevin', 23, 'kevin@gmail.com','Columbia');
    expect(newIntern.name).toBe(any(String));
});
it("test intern id", () => {
    // what are we testing? 
    // code to run test
    const newIntern = new Intern('Kevin', 23, 'kevin@gmail.com','Columbia');
    expect(newIntern.id).toBe(any(Number));
});
it("test intern email", () => {
    // what are we testing? 
    // code to run test
    const newIntern = new Intern('Kevin', 23, 'kevin@gmail.com','Columbia');
    expect(newIntern.email).toBe(any(String));
});
it("test intern school", () => {
    // what are we testing? 
    // code to run test
    const newIntern = new Intern('Kevin', 23, 'kevin@gmail.com','Columbia');
    expect(newIntern.email).toBe(any(String));
});
it("test intern role", () => {
    // what are we testing? 
    // code to run test
    const newIntern = new Intern('Kevin', 23, 'kevin@gmail.com','Columbia');
    expect(newIntern.role).toBe('Intern');
});