// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Create function that will:
// Evaluate inputs to determine the length
// Output the sentence: input(x) is longer than input(y)
// x and y are just being used to show how the sentence should read
// Steps in process
    // 1.  create function called longerFruitName
    // 2.  determine length of each constant
    // 3.  store length of each constant entered into parameter
    // 4.  returns a statement showing longer of the two inputs
    // 5.  call and execute the function
    // BONUS POINTS for determining length is the same, or error if parameter is omitted

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

const longerFruitName = (value1, value2) => {
    if (value1.length > value2.length) {
            return console.log(`${value1} is a longer fruit name than ${value2}.`) //checks length of the two parameters to see which is longer
    } else { 
        return console.log(`${value2} is a longer fruit name than ${value1}.`) 
    }
}
// longerFruitName(fruit1, fruit2)
// // output is "banana is a longer fruit name than apple"
// longerFruitName(fruit3, fruit4)
// // output is "cherry is a longer fruit name than kiwi"

//  if I add more parameters to the challenge above what is required, where I check to see if the fruit names are the same length, or if a parameter is missing, I would use the following code:
// } else if (value1 = value2) {
    // return console.log(`${value1} is the same length name as ${value2}.`)
    // }
    // longerFruitName(fruit2,fruit3) would be used to test the additional condition with parameters of equal length
// if a parameter is omitted, make line 36 an else if statement returning the sentence requested, and create a new else statement that reads "ERROR"

// const longerFruitName = (value1, value2) => {
//     if (value1.length > value2.length) {
//             return console.log(`${value1} is a longer fruit name than ${value2}.`)
//     } else if (value1 = value2) {
//         return console.log(`${value1} is the same length as ${value2}`)
//     } else if (value2 > value1) { 
//         return console.log(`${value2} is a longer fruit name than ${value1}.`) 
//     } else {
//         return console.log(`ERROR:  You did not enter the correct number of parameters!!`)
//     }
// }
// longerFruitName(fruit1, fruit2)
    // output is "banana is a longer fruit name than apple"
// longerFruitName(fruit3, fruit4)
    // output is "cherry is a longer fruit name than kiwi"
// longerFruitName(fruit2, fruit3)
    // output is "banana is the same length as cherry"
// longerFruitName(fruit1, 0)
    // output is "ERROR: You did not enter the correct number of parameters"
// ONLY CONDITION NOT CHECKED FOR IS UNDEFINED, WHERE I DO NOT ENTER 2 PARAMETERS INTO THE FUNCTION CALL!


// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
    // Create a function that will
        // 1. takes an given input temperature
        // 2. compares the input temperature and compares it to the boiling point of water
        // 3. outputs whether the temperature is below, at, or above the boiling point of water 

// const temp1 = 42
// // // Expected output: "42 is below boiling point"
// const temp2 = 350
// // // // Expected output: "350 is above boiling point"
// const temp3 = 212
// // // // Expected output: "212 is at boiling point"

// const tempGiven = (temp1) => {
//     if (tempGiven < 212) {
//         return (`${tempGiven} is at the boiling point of water`)
//     // } else if (tempsGiven > 212) {
//     //     return (`${tempGiven} is below the boiling point of water`)
//     //
//     } else {
//         return (`${tempGiven} is above the boiling point of water`)
//     }
// }

// tempGiven(temp1)

// NOTE:  at this point I was getting extremely frustrated, because I could not get the function to compare the given const variables to the boiling point of water.  All I could get it to do was pass the following into output
// "undefined is at the boiling point of water" on three consecutive lines or finally to pass one temperature 3 times consecutively.  I decided it would be better to submit the assignment with one challenge incomplete. On sunday, I messaged Sarah via slack, and she attempted to help me correct my mistakes in the code. However, even with her input, I remained unable to get the code to output the correct information.
// Monday morning, 6:00 am, I decided it would be better to upload the assessment even with the code challenge not complete, rather than get an incomplete

// // ---------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// // Pseudo code:
//     // create a variable that combines the two variables into one new array
//     // create output that shows the array length after combining the two arrays


// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// // Expected output: 9
// const timesRunsScored = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
// // combined the two arrays into one variable
// console.log(timesRunsScored.length)
// // return an answer of 9, since that is the number elements in the new array




// // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// // Pseudo code:
//     // take the given const and reverse the writing to display the original constant backwards
//     // 1. Create an array that will take the var and reverse it's order
//     // 2. Create a function that  that will accept the input from the originalreversed array and convert it back into a string
//     // 3. Output the new variable to the screen

// const currentCohort = "Hotel 2022"
// function reversed(str) {
//     return str.split('').reverse().join('')
// }
// console.log(reversed(currentCohort))
    
// // Expected output: "2202 letoH"

// // NOTE: I actually stuggled with this one, even though I knew what I wanted to do.  I did research to learn you could actually combine various methods in one declaration, making this easier than utilizing more lines of code to accomplish the same goal.


// // --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// // Pseudo code: 
// // 1. Create a function that will take the given array and look for the last occurence of a given value in the array
// // 2. Output the response to the screen to verify validity of the code created.

// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
    
// const givenValue1 = 42
// console.log(myNumbers.lastIndexOf(givenValue1))
// // Expected output: 7

// const givenValue2 = 10
// // Expected output: 8
// console.log(myNumbers.lastIndexOf(givenValue2))




// // --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// // Pseudo code: 
// // 1.  utilize the sort function in JavaScript to sort the temperatures array from highest to lowest
// // 2.  use console.log to display the sorted items to the screen

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// console.log(sanDiegoSummerTemperatures.sort(function(a, b){return b-a}))
// // Expected output: [82, 80, 79, 77, 76, 73, 72]

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// console.log(sanDiegoWinterTemperatures.sort(function(a, b){return b-a}))
// // Expected output: [68, 67, 66, 66, 62, 59, 59]

// // NOTE: I could not get this to diplay the temperatures on one line, but rather it showed the first 4 items on one line and the last 3 items on a second line