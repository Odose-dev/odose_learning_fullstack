// class 1

// old was creating obj
let user = {
    "firstname": "Ezekiel",
    "field": "software engineer"
}

//Object Shorthand
const {firstname, field} = user

//outputs old
console.log(firstname)
console.log(field)

//Computed Properties

const email = "tope@gmail.com";
const pass = "mypass"

const anotherUser = {
    email,
    pass
}

console.log(anotherUser.pass)

const emailValue = undefined ?? 'Gest';
console.log(emailValue)

//Optional Chaining

//spead & rest
const team1 =["tope", "tola", "tosin"]
const team2 =["Ezekiel", "odose", "tayo"]



const group = [...team1, ...team2]

console.log(group);
//


//class 2 

//anonymous function / Arrow Functions
    //old ways

    //new ways

    //hoisting



// Spread & Rest Operators



//Higher-Order Functions
//defination: function that takes another function as probs/ parameters / arguement`

    //Examples
    //map

    //filter

    //forEach

    //

// Closures

    //meaning

    //Example