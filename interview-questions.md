# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer:

Researched answer:

1. What is git? What is the difference between git and Github? 

Your answer: git is a method of version control.  Utilizing the commands of git add and git commit, you are able to track the ways in which you modify your code.  GitHub is a cloud based repository in which your code is uploaded and made accessible to others.

Researched answer: While both git and GitHub are ways to maintain version control, git functions on the local machine, while GitHub exists in the cloud (remote storage)

2. Which JavaScript operators will return a Boolean value?

Your answer: The JavaScript operators that will return a Boolean Value are any of the conditional operators.  These include < (less than), <= (less than or equal to), > (greater than), >= (greater than or equall to), != (not equal to), == or === (loose or strict interpretation of a value),
&& (checking to see if two conditions are both true), or || (checking to see if one of two given conditions is true).

Researched answer: The operators I listed above are correct, in that they will return a Boolean value.  I also found that there were additional conditional operators I had missed, such as !== (not equal type or equal value) and ? (ternary operator). 

3. What is an index? What is the difference between index and value?

Your answer: An index is the value of a particular item in a variable.  Index starts counting at 0, so the answer will always be one less than the location of the item.  Example:  var cats = ("calico", (persian), (manx))
          console.log(cats[1])
The above example will output persian to the screen, because it is located at index 1 of the variable.
    The difference between index and value is that the index will always be one less than the location of a particular value in a given variable.  The value is a specific location, while the index is where it is located in the variable.

Researched answer:  I understand the concepts involved in index and value, and determined my response was accurate without further research adding to my understanding.

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: Arrays are groups of values taken as a whole, while strings are actually self-contained arrays.  A string is taken as a whole, while the array would be seperated by a , in its defining.
        Example:  array cats = ["calico", "persian", "manx"] (This provides three values to the array of cats)
                  string cats = "calico" (This provides an array consisting of 6 values, each of which may be called) 

Researched answer: My research showed me that any given variable by itself is indeed an array, but an array dataType must be defined using the [ ] brackets.

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Pair programming is two (or more) individuals working together to produce usable code.  While one person (the driver) does the typing of the code, and the other (the navigator) tells the driver what to type.  A very important thing to note is that the navigator should not be doing any coding, but is responsible for researching topics as needed to instruct the driver.

Researched answer:  Pair programming is the optimal way in which a team can create useful code, and it allows for both parties to provide information used to simplify code. While the navigator is most responsible for providing the information to the driver, the driver is also able to give input to discuss options in writing the code.
It is VERY important that the driver be willing to listen to the navigator, whether he thinks the navigator is right or not.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: Higher order functions are functions which accept other functions as inputs.  

2. Jest:  A JavaScript testing framework, particularly useful in REACT.  It allows the writing of test code, and the testing of that code, in a simple way.  Jest also works with other languages such as Babel, TypeScript, and Vue.

3. Objects: Containers for named properties in JavaScript.  Just as an object in real life has specific properties, the same is true of objects in JAvaScript. Thus, a given variable in JavaScript can be an object, such as car = Bronco, or it can be a group of items, such as car = (type: "bronco", model: "Ford", year: "2022" ).
It is considered to be best practice for coding that an object is defined with the CONST variable assignment.

4. Method:  Methods are actions that are performed on objects in JavaScript.  Methods use the "this" keyword in Javascript, to show which object the method is being used on.

5. Classes:  Classes are templates for JavaScript objects.  It uses the specific keyword "class", followed by the name of the class itself.  After defining the class, you are able to provide the various values that pertain to the class.
