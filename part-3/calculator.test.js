import { test, expect } from '@jest/globals';
import { add, subtract, multiply, divide, square, calculate } from './calculator.js';

test('adding 1 and 2 should return 3', function () {
// Arrange
// variables
const actual = add(1, 2);
const expected = 3;

// Act 

//Assert
expect(actual).toBe(expected);

});

test('adding -11 and 6 should return -5', function () {
    // Arrange
    // variables
    const actual = add(-11, 6);
    const expected = -5;
    
    // Act 
    
    //Assert
    expect(actual).toBe(expected);
    
    });
