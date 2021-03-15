# Difference between function argument and parameter with example

Function parameters are variables declared to serve as placeholders in a function when creating a function. 

These placeholders can receive literal values of different data types, references to other functions or references to objects.

e.g function washHands(amountOfWater, soapName, goodfragrance){...}

In the function declared above; amountOfWater, soapName and fragrance are parameters

Function arguments: these are the values passed into a function parameter which is to be used in the body of the function

in execution of the code block of the function. and it can be in the form of literal values, references to other function

and references to objects.

e.g //calling function washHands; washHands(50, 'Dettol', true );

The values passed into the function washHands uses a literal value of 50 which has a numeric data type, a string and a Boolean

# Explain concatenation with example

Concatenation mean joining of two or more type of data types together and in most case uses the + operator to join , sometimes

it said it smooshes them together.

e.g 

const firstName = 'Olayiwola'

const lastName = 'Sobowale'

let age = 40;

// We use the concatenation + operator to create a sentence with the variables

console.log('My name is ' +firstName ' ' +lastName ' and I am ' +age);
