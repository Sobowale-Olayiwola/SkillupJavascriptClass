# Explain HOF with example


HOF (Higher Order Functions), these are functions that accepts, and/or returns another function. Higher order function is 

in contrast to first order functions, which don’t take a function as an argument or return a function as output. They 

help us abstract common actions like map, filter, and reduce. It’s higher-order because instead of strings, numbers, or 

booleans, it goes higher to operate on functions. 

Remembering first-class citizens we have functions in JavaScript, and we can:

* Store them as variables

* Use them in arrays

* Assign them as object properties (methods)

* Pass them as arguments

* Return them from other functions

Functions operate on data such as Numbers,Objects,Strings,Booleans and Arrays which are first-class citizens in most 

modern programming languages. 

Functions are also data which can be operated on such as:

* they can be passed to other functions

* they can be set as object functions called methods

* they can be stored in arrays

* they can be set as variables

HOF helps to reduce lot of repeated code which creates a pattern that makes abstraction useful.

# Explain the map and reduce methods with example

Map method is a HOF that calls a provided callback function once for each element in an array, in order, and constructs a 

new array from the results. Callback function is invoked only for indexes of the array which have assigned values 

(including undefined).

It is not called for missing elements of the array; that is:

* indexes that have never been set;

* indexes which have been deleted.

It is good to note that map() doesn't change the original array. We should use a map it when the callback function 

returns a value and we also use the return array from the map function.

```js
const numbers = [23, 17, 40, 86];
const newArray = numbers.map( number => number * 7 )
console.log(newArray); // [ 161, 119, 280, 602 ]

```

Reduce method

The reduce() method executes a reducer function (that you provide) i.e it accepts a function as an argument and it 

called  on each element of the array, resulting in single output value. The reducer function takes four arguments:

* Accumulator

* Current Value

* Current Index

* Source Array

Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration 

throughout the array, and ultimately becomes the final, single resulting value. it is good to take note that reduce() 

does not execute the function for array elements without values and this method does not change the original array.

```js
const age = [50, 32, 35, 46];
const reducer = (accumulator, currentValue) => (accumulator + currentValue);

// 50 + 32 + 35 + 46
console.log(age.reduce(reducer));
// expected output:163

let meanAge = (age.reduce(reducer)) / age.length;

console.log(meanAge); //40.75
```