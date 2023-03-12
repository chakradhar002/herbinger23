const reserveString = require("./reverseString");

test("reserveString function exists", () => {
  expect(reserveString).toBeDefined();
});

test("String reserves", () => {
  expect(reserveString("hello")).toEqual("olleh");
});

test("String reserves", () => {
  expect(reserveString("Hello")).toEqual("olleh");
});
