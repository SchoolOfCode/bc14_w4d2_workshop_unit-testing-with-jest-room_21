/* PLAN

import functions to test 
Test the add, subtract, multiply and divide functions
Test the calculator function?

test("description", () => {
 ARRANGE
 ACT 
 ASSERT
})

*/

import { test, expect } from "@jest/globals";
import { add, subtract, multiply, divide, square, calculate } from "./calculator";

// Add function
test("1+2 should equal 3", () => {
  // ARRANGE
  const actual = add(1, 2);
  const expected = 3;
  // ACT

  // ASSERT
  expect(actual).toBe(expected);
});

test("-10 + 9 should equal -1", () => {
  // ARRANGE
  const actual = add(-10, 9);
  const expected = -1;
  // ACT

  // ASSERT
  expect(actual).toBe(expected);
});

// Subtract function
test("10 - 9 should equal 1", () => {
  // ARRANGE
  const actual = subtract(10, 9);
  const expected = 1;
  // ACT

  // ASSERT
  expect(actual).toBe(expected);
});

test("1 - 9 should equal -8", () => {
  // ARRANGE
  const actual = subtract(1, 9);
  const expected = -8;
  // ACT

  // ASSERT
  expect(actual).toBe(expected);
});

// Multiply function
test("2 * 9 should equal 18", () => {
  // ARRANGE
  const actual = multiply(2, 9);
  const expected = 18;
  // ACT

  // ASSERT
  expect(actual).toBe(expected);
});

test("10 * 5 should equal 50", () => {
  // ARRANGE
  const actual = multiply(10, 5);
  const expected = 50;
  // ACT

  // ASSERT
  expect(actual).toBe(expected);
});

// Divide function
test("10 / 5 should equal 2", () => {
  // ARRANGE
  const actual = divide(10, 5);
  const expected = 2;
  // ACT

  // ASSERT
  expect(actual).toBe(expected);
});

test("100 / 25 should equal 4", () => {
  // ARRANGE
  const actual = divide(100, 25);
  const expected = 4;
  // ACT

  // ASSERT
  expect(actual).toBe(expected);
});

// Square function
test("9 squared should equal 81", () => {
  // ARRANGE
  const actual = square(9);
  const expected = 81;
  // ACT

  // ASSERT
  expect(actual).toBe(expected);
});

test("5 squared should equal 25", () => {
  // ARRANGE
  const actual = square(5);
  const expected = 25;
  // ACT

  // ASSERT
  expect(actual).toBe(expected);
});

test("still works with two arguments", () => {
  // ARRANGE
  const actual = square(5, 9);
  const expected = 25;
  // ACT

  // ASSERT
  expect(actual).toBe(expected);
});

// Calculate function - add
test("2+3 on calculate equals 5", () => {
  // ARRANGE
  const actual = calculate("+", 2, 3);
  const expected = 5;
  // ACT

  // ASSERT
  expect(actual).toBe(expected);
});

// Calculate function - subtract
test("2-3 on calculate equals -1", () => {
  // ARRANGE
  const actual = calculate("-", 2, 3);
  const expected = -1;
  // ACT

  // ASSERT
  expect(actual).toBe(expected);
});

// Calculate function - multiply
test("2*3 on calculate equals 6", () => {
  // ARRANGE
  const actual = calculate("*", 2, 3);
  const expected = 6;
  // ACT

  // ASSERT
  expect(actual).toBe(expected);
});

// Calculate function - divide
test("2/3 on calculate is close to 0.666", () => {
  // ARRANGE
  const actual = calculate("/", 2, 3);
  const expected = 0.66667;
  // ACT

  // ASSERT
  expect(actual).toBeCloseTo(expected);
});

// Calculate function - square
test("4 squared is 16", () => {
  // ARRANGE
  const actual = calculate("sq", 4);
  const expected = 16;
  // ACT

  // ASSERT
  expect(actual).toBeCloseTo(expected);
});

// test error message
test("checking error message when given wrong operator arg", () => {
  // ARRANGE

  // ACT

  // ASSERT
  expect(() => calculate(".", 2, 3)).toThrow('Unsupported operator .');
});
