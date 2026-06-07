/*Week 2: Assignment 

Question 1
Create a user object, create an assets array,
Update user object array by putting the assets.
- Hint: Use rest or spread  */

const user = 
    {
        name:'John', 
        age:'20', 
        address:'Igboefon Lagos'
    }
const assets = ['car', 'house', 'stocks'];
const user_assets = {...user, assets}
console.log(user_assets)

/*
Question 2
Using map, add  2 to all numbers in the array
*/
let numbers = [1, 2, 3, 4, 5]
numbers.map((item) =>  {
     addedNumber = item + 2
     return (console.log(addedNumber))
})


 