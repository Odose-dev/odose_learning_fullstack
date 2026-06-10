
this.name = 'Zeke'
this.age = 20

console.log(this.name)



const person = {
    name: 'Ezekiel',

    sayHello: function() {
        console.log(this.name)
    }
}

person.sayHello()