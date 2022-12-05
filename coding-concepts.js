// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: The answer actually gives the number of items in the array.  Since we pushed a new piece of data, the response went up to 5, since that is how many items are in the array now.

// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: This code takes the const and counts the number of characters in it, starting at 1.  There are a total of 10 characters in the string.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: As opposed to the above code example, this code is looking for the index value of the character at position 4.  Since index value starts with 0, it is looking at a count sequence of (0 = H), (1 = e), (2 = l), (3 = l), and finally (4 = o)

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Similar to the previous code example, this code takes the index value of the strings.  Ruby is the string at index value 1.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: The toUpperCase function in JavaScript is designed to convert any alphabetical character into its upper case.  However, when I actually ran the code as written, I got no response in the terminal.  I could see it was running, but it did not output the expected response to the screen. I can only assume it is because the parameters of .toUpperCase is blank.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer:
// b) Verify and explain:
