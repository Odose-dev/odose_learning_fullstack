/*Week 1: Assignment
1.  Extract name and age from the object below using destructuring: */
const user = {
 name: "Sarah",
 age: 25,
 city: "Lagos"
};

const {name, age} =  user;
console.log(name, age)


/*
2. What are the values of a, b, and c? */
const [a, b, c = 10] = [1, 2]
console.log([a,b])
//The values of a and b are are 1 and 2

/*
3. What is the output? */
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);
//Output is [1,2,3,4]

/*4. Merge the following objects using the spread operator:*/

const user_1 = { name_1: "John" };
const details = { age_1: 30 };

const merged = {...user_1, ...details}
console.log(merged)

/*5. What is the output? */
const user_2 = {
 name2: "Jane",
 scores: [80, 90, 100]
};
const { name2, scores: [first] } = user_2;
console.log(name2, first);
//Output Jane 80


// nice work done boss