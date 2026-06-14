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
//    console.log(this)

//    const user = {
//     name: "ezekiel",

//     sayHello: function() {
//         console.log(this)
//     }
//    }

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

    // console.log(1)

    // setTimeout(() => {
    //     console.log(2)
    // }, 2000)

    // Promise.resolve(3).then((result) => console.log(result))

    // console.log(4)

    //creating a promise
    // const payment = new Promise((resolve, reject) => {

    //     const isPaymentSuccessful = true; // Simulate payment success or failure

    //     if(isPaymentSuccessful) {
    //         resolve("Payment successful!");
    //     } else {
    //         reject("Payment failed!");
    //     }
    // })


    //result of the promise
    // payment.then((result) => {
    //     console.log(result)

    // }).catch((result) => {
    //     console.log(result)
    // })
  

// *******************
    // class 4
// *******************
//Focus: Understanding Asynchronous JavaScript

    //Promises continued
    // const paymentCompleted = new Promise((resolve, reject) => {
    //     result = true;

    //     if (result) {
    //         resolve("Payment successful!")
    //     } else {
    //         reject("Payment failed!")
    //     }
    // });

    // paymentCompleted.then((paymentResult => console.log(paymentResult))).catch(paymentResult => console.log(paymentResult));


    function fetchUser() {
        return new Promise((resolve, reject) => {

            const isSuccess = true; 

            if (!isSuccess) {
                reject("Failed to fetch user data.");

            }else{
                setTimeout(() => {
                    const userData = {
                        name: "Ezekiel",
                        age: 20,
                        email: "ezekiel@example.com"
                    };
                    resolve(userData);
                }, 2000);
            }
        });
    }

    function fetchPost() {
        return new Promise((resolve, reject) => {

            const isSuccess = false; 

            if (!isSuccess) {
                reject("Failed to fetch post data.");

            }else{
                setTimeout(() => {
                    const postData = {
                        name: "Ezekiel",
                        post: "i love javascript"
                    };
                    resolve(postData);
                }, 3000);
            }
        });
    }



    // // ------ bad way to handle more than one promise

    // async function fetchData() {

    //     try{
    //         const user = await fetchUser();
    //         const post = await fetchPost();

    //         console.log(user);
    //         console.log(post);

    //     }catch(error) {
    //         console.error(error);
    //     }
    // }

    // fetchData();


    // Promise.all([fetchUser(), fetchPost()])
    //     .then(([user, post]) => {
    //         console.log(user);
    //         console.log(post);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });

    // Promise.allSettled([fetchUser(), fetchPost()])
    //     .then(([user, post]) => {

    //         if (user.status === "fulfilled" || post.status === "fulfilled") {
    //             console.log(user.value, post.value);
    //         } else {
    //             console.error(user.reason || post.reason);
    //         }
    //     })
    





// *******************
    // class 5
// *******************

    //Fetch API

    // client -> api -> server -> database

    // fetch("https://jsonplaceholder.typicode.com/users", {

    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },

    //     body: JSON.stringify({
    //         name: "Ezekiel",
    //         email: "ayebidunezekiel@gmail.com"
    //     })  
    // })
    // .then(result => result.json())
    // .then(usersData => console.log(usersData))
    // .catch(error => console.error(error))
    // .finally(()=> console.log("operation completed"));



    // cleaner version using async/await
    async function updateUser(id, userData) {
        try {
                    
        const result = await fetch(`https://jsonplaceholder.typicode.com/user/`)

        if(!result.ok) throw new Error("unable to fetch users");
                    
        const userData = await result.json();
        console.log(userData)
            
        } catch (err) {
            console.log(err);
            throw err;
        }

            

    }

    updateUser(1, {"name": "update Ezekiel"});






    //Error Handling

    //Mini Practice Project

       
        //url to get dummy data:
        // https://jsonplaceholder.typicode.com/users
        // https://jsonplaceholder.typicode.com/posts
        // https://jsonplaceholder.typicode.com/comments


 // assignments:

    // Tips
        // 1. Use the Fetch API to make the API requests and handle the responses.
        // 2. Use async/await to handle the asynchronous API request.
        // 3. Use Promise.all to fetch multiple API endpoints simultaneously and display the results on the web page.
        // 4. Use Promise.allSettled to handle multiple API requests and display the results, including any errors, on the web page.
        // 5. Implement error handling to display an error message if the API request fails.

    // Tasks
        //1. Use destructuring to extract: name, email, username
        //2. What is the total number of user, post and comments
        //3. dispay an array of users and number of post
        //4. Fetch users and posts simultaneously using:
        //5. write an async function loadDashboard() to show all user details, post and comments