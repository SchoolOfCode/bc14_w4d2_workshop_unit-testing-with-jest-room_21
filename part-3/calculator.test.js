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
    // Subtracting 

        test('subtracting 11 and 6 should return 5', function () {
        // Arrange
        // variables
        const actual = subtract(11, 6);
        const expected = 5;
        
        // Act 
        
        //Assert
        expect(actual).toBe(expected);
        
        }); 
    
        // test two 

        test('subtracting 6 and -26 should return -20', function () {
            // Arrange
            // variables
            const actual = subtract(6, -26);
            const expected = 32;
            
            // Act 
            
            //Assert
            expect(actual).toBe(expected);
            
            });

    // adding multiply to the calculator

    test('multiplying 6 and 6 should return 36', function () {
        // Arrange
        // variables
        const actual = multiply(6, 6);
        const expected = 36;
        
        // Act 
        
        //Assert
        expect(actual).toBe(expected);
        
        });

        test('multiplying 9 and 10 should return 90', function () {
            // Arrange
            // variables
            const actual = multiply(9, 10);
            const expected = 90;
            
            // Act 
            
            //Assert
            expect(actual).toBe(expected);
            
            });

            test('dividing 36 and 6 should return 6', function () {
                // Arrange
                // variables
                const actual = divide(36, 6);
                const expected = 6;
                
                // Act 
                
                //Assert
                expect(actual).toBe(expected);
                
                });
        
                test('dividing 90 and 10 should return 9', function () {
                    // Arrange
                    // variables
                    const actual = divide(90, 10);
                    const expected = 9;
                    
                    // Act 
                    
                    //Assert
                    expect(actual).toBe(expected);
                    
                    });
                    
test('squaring 9 should return 81', function () {
 // Arrange
//variables    
 const actual = square(9);
const expected = 81;
 // Act     
                    
 //Assert
 expect(actual).toBe(expected);
                    
});

test('squaring 5 should return 25', function () {
    // Arrange
   //variables    
    const actual = square(5);
   const expected = 25;
    // Act     
                       
    //Assert
    expect(actual).toBe(expected);
                       
   });

// Calculate

test('adding 2 and 3 should give 5', function () {
    // Arrange
   //variables    
const actual = calculate("+", 2, 3);
const expected = 5;
    // Act     
                       
    //Assert
    expect(actual).toBe(expected);
                       
   });

test('expecting error message', function () {
    // Arrange
   //variables    
const operator = ".";
const actual = calculate(operator, 2, 3);
//const expected = `Unsupported operator ${operator}`;
    // Act     
                       
    //Assert
expect(calculate(".", 2, 3)).toThrow(/^Unsupported operator ${operator}$/);
expect(calculate(".", 2, 3)).toThrow(new Error(`Unsupported operator ${operator}`));
                       
   });

   