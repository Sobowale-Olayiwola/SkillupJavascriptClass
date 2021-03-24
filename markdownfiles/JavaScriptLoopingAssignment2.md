# Create an array with three elements:
* The second element should be a function
* Use the function outside the array

```js
const Cafetaria = [
    'Chef', 
    orderMeal = () => {
        console.log('What type of meal do you want to eat?');
    },
    'Thanks for placing an order'
]

let order = Cafetaria[1]; // it can also be called like this Cafetaria[1]();
order(); 

```
# Complete the looping/do it properly. Correction

```js
const housingEstate = [
    {
        name: 'Lekki Pennisula Phase 1',
        location: 'Ajah-Lekki Express Road',
        securityLevel: 'high' 
    },
    
    {
        name: 'Abraham Adesanya',
        location: 'Abraham Adesanya Roundabout, Off Ajah-Lekki Express Road',
        securityLevel: 'medium'
    },

    {
        name: 'ParkView ',
        location: 'Off Gerrard Road, Ikoyi Lagos',
        securityLevel: 'high'
    }
]

housingEstate.forEach(estate => {
        console.log(estate.location);
    });

```

# Explain the difference between these blocks of code

```js
// First Block of code

for ( club of footBallClubs ) {
 const objectValues = Object.values(club)
 const secondValue = objectValues[1]
 
 console.log(secondValue)
}
 
 // Second Block of code

footBallClubs.forEach((club) => {
 const objectValues = Object.values(club)
 const secondValue = objectValues[1]
 
 console.log(secondValue)
})

```
The difference between these two block of code is that the first block which is is a for of loop has a variable called 

club  and an Iterable called footBallClubs which is an array of objects while the second block of code has parameters

and the iterable which is footBallClubs is chained to the forEach loop which takes an argument which is a callback 

function but in this case it uses an arrow function.
