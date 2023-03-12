/*
Just simply installing jest in our directory, the comand npm run jest will run all the files
with the .test.js sufix. ( npm install -D jest )
*/
const functions = require("./functions");

// fake functions to emulate API
const initDataBase = () => console.log('Database initialized...')
const closeDataBase = () => console.log('Database closed...')

beforeEach(() => initDataBase());
afterEach(() => closeDataBase());
// with describe we can create blocks of testing

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4); //expect() is an assertion and toBe() is a matcher
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test("should be falsy", () => {
  expect(functions.checkValue(2)).toBeTruthy();
});

test("User should be Silvestre Vivo user", () => {
  //here we can not use toBe() because that is only for primitive values
  expect(functions.createUser()).toEqual({
    firstName: "Silvestre",
    lastName: "Vivo"
  });
});

test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  // even we can write the functions here, jest is flexible enough.
  expect(load1 + load2).toBeLessThan(1600);
});

test("There is no I in team", () => {
  // we can test RegEXP on this way with match() matcher
  expect("team").not.toMatch(/I/i);
});

test("Admin should be in usernames", () => {
  const usernames = ["silvestre", "evelien", "elena"];
  // with contain() matcher we can test arrays
  expect(usernames).toContain("evelien");
});

test("User fetched name should be Leanne Graham", () => {
  // assertions() is used in async test to ensure that que API is at least once called
  expect.assertions(1);
  return functions
    .fetchUser()
    .then(data => expect(data.name).toEqual("Leanne Graham"));
});

test("should do the same with asyn await", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
