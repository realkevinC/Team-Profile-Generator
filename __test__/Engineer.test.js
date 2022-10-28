const Engineer = require("../lib/Engineer");

test("can create an instance of an Engineer", () => {
    // set code for exectation
    const newEngineer = new Engineer('Kevin', 23, 'kevin@gmail.com','kevinGithub');

    // test our expectation
    expect(newEngineer.name).toBe(any(String));
    expect(newEngineer.id).toBe(any(Number));
    expect(newEngineer.email).toBe(any(String));
    expect(newEngineer.github).toBe(any(String));
});
it("test engineer name", () => {
    // what are we testing? 
    // code to run test
    const newEngineer = new Engineer('Kevin', 23, 'kevin@gmail.com','kevinGithub');
    expect(newEngineer.name).toBe(any(String));
});
it("test engineer id", () => {
    // what are we testing? 
    // code to run test
    const newEngineer = new Engineer('Kevin', 23, 'kevin@gmail.com','kevinGithub');
    expect(newEngineer.id).toBe(any(Number));
});
it("test engineer email", () => {
    // what are we testing? 
    // code to run test
    const newEngineer = new Engineer('Kevin', 23, 'kevin@gmail.com','kevinGithub');
    expect(newEngineer.email).toBe(any(String));
});
it("test engineer github", () => {
    // what are we testing? 
    // code to run test
    const newEngineer = new Engineer('Kevin', 23, 'kevin@gmail.com','kevinGithub');
    expect(newEngineer.github).toBe(any(String));
});
it("test engineer role", () => {
    // what are we testing? 
    // code to run test
    const newEngineer = new Engineer('Kevin', 23, 'kevin@gmail.com','kevinGithub');
    expect(newEngineer.role).toBe('Engineer');
});