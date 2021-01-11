const exercises = require('./reverseString_Start');

// Question 1
test('Question 1: reverseString', () => {
  let str = "hello";
  expect(exercises.reverseString(str)).toBe("olleh");
  expect(str).toEqual("hello");

  let str2 = "friend";
  expect(exercises.reverseString(str2)).toBe("dneirf");

  let str3 = "Let's Go!";
  expect(exercises.reverseString(str3)).toBe("!oG s'teL");

  let str4 = "Game on";
  expect(exercises.reverseString(str4)).toBe("no emaG");
});
