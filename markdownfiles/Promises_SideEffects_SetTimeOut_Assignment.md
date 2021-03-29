# Explain the settimeout function with example

setTimeout function is a HOF(Higher Order Function) that takes a function and as its first argument and a second

argument which is in milliseconds which serves as a the waiting time before the function is called.

```js
// Example
setTimeout( () => { console.log( 'Hey, Welcome to my page, and thanks for waiting for 5 seconds ' ) }, 5000 );
```

# Explain promises with examples

In JavaScript, a promise is an object that wraps an asynchronous operation and notifies the program when the

asynchronous operation completes. The promise object represents the eventual completion or failure of the

wrapped operation. A promise is a proxy for a value not necessarily known. Instead of providing the value

immediately, like a synchronous program, it promises to provide a value at some point in the future.

It has members such as then(), catch() and finally() which are used with its instances and also static members such as

Promise.race(), Promise.all().

```js
const myPromise = new Promise( ( resolve, reject ) => {
    console.log( 'Starting asynchronous work!' );
    setTimeout( () => { resolve( 'I made it' ); }, 1000 );
} );
myPromise.then( value => console.log( value ) );
```

# What are side effects in programming?

A side effect is any secondary effect or reaction that comes from an action we take.

Side effects can be either good or bad, but are generally unintended. In functional programming, side effects are any 

state change that can be seen outside of a function call, with the exception of the function return value. According 

to the rules of functional programming, functions are not allowed to modify any states outside of thefunction. If the 

function modifies a state, intentionally or unintentionally, this is considered a side effect because it breaks the 

tenets of functional programming.