let user = new Object(); //object constructor
let user1 = {} // object literal syntax

let user2 = {
    name: "John",
    age:30
}

console.log(user2.name);
console.log(user2.age);

let user3 = {
    name: 'john',
    age: 30,
    "likes birds" : true
}

console.log(user3["likes birds"]);


// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = [];

// bag[fruit] = 5;



function makeUser(name, age){
    return {
        name: name,
        age: age,
    }
}

let user4 = makeUser("john", 30);
console.log(user4.name);
