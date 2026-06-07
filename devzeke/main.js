// *******************
    // class 1 
// *******************
// old was creating obj
// let user = {
//     "firstname": "Ezekiel",
//     "field": "software engineer"
// }

//Object Shorthand
/*
const {firstname, field} = user

//outputs old
/*
console.log(firstname)
console.log(field)

//Computed Properties
/*
const email = "tope@gmail.com";
const pass = "mypass"

const anotherUser = {
    email,
    pass
}

console.log(anotherUser.pass)
*/
//Optional Chaining
/*
const emailValue = undefined ?? 'Gest';
console.log(emailValue)
*/


//spead & rest
/*
const team1 =["tope", "tola", "tosin"]
const team2 =["Ezekiel", "odose", "tayo"]
const group = [...team1, ...team2]
console.log(group);
*/
//


// *******************
    // class 2 
// *******************

//anonymous function / Arrow Functions


    //old ways
//  function add2Numbers(a, b){
//     return a+b;
//  }

//  console.log(add2Numbers(4,8))


    //new ways
    // const sum = (a, b) =>  console.log(a + b)
    
    // sum(3, 7)


    // const user1 = new User("odose")

//    const greetUser1 = user1.greet()
    // console.log(user1.greet())

    //hoisting
    // function hello() {
    //     console.log("hello");
    // }
    // hello();



    // const greeting = user()

    // console.log(user())



// Spread & Rest Operators
// const letter1 = ['a', 'b', 'c']
// const letter2 = ['d', 'e', 'f']

// const [d, e, ...letter] = letter2

// console.log(letter);

//Higher-Order Functions
//defination: function that takes another function as probs/ parameters / arguement`

    //Examples
    //map
    // letter1.map((item) => console.log(item));

    //filter
    // letter2.filter((i) => {
    //    return i == 'd'
    // }) 

    //forEach

    //

// Closures

    //meaning

    //Example

    // function outer() {
    //     let counter = 0

    //     return function inner(){
    //         counter++
    //        console.log(counter)
    //     }
    // }


    // const result = outer()

//     result()
//    result()



   //this 
   console.log(this)

   const user = {
    name: "ezekiel",

    sayHello: function() {
        console.log(this)
    }
   }

//    user.sayHello()


// *******************
    // class 3
// *******************
//Focus: Understanding Asynchronous JavaScript

    //Why JavaScript Needs Asynchronous Programming
    //Event Loop Overview
    //Promises
    //async/await
    //Error Handling