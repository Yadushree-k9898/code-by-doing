// //creating objects

// const user = {
//     name: "Yadushree",
//     age: 23
// }

// console.log(user.name);
// console.log(user.age);
// console.log(user["name"]);
// console.log(user["age"]);

// const product ={
//     id:1,
//     name: "Laptop",
//     price:50000,
//     inStock: true,
//     tags: ["electronics", "tech"]
// }

// console.log(product.id, product.name, product.price, product["inStock"], product["tags"] );



// const company = {
//     name: "InvestNow",
//     founder:{
//         name: "Aarav",
//         age: 30
//     }
// }

// console.log(company.name);
// console.log(company.founder.name);
// console.log(company.founder["age"]);



// function Car(brand, year){ //constructor
//     this.brand = brand;
//     this.year = year;
// }

// const myCar = new Car("Toyota", 2022)
// console.log(myCar);


// const person = new Object();
// person.name = "Yadu",
// person.age = 21

// console.log(person.name);
// console.log(person.age);


// const calculator = {
//     add(x, y) {
//         return x + y
//     }
// }

// console.log(calculator.add(3, 4));

// const key = "role";
// const userData = {
//     name: "Neha",
//     [key] : "Admin"
// }

// const user2 = {
//     name: "yadu",
//     age: 23
// };
// const {name, age} = user2
// console.log(user2);


// const user3 = {name: "Yadu", role:"Founder"};
// const {name: userName} = user3;
// console.log(userName);


// const startup = {
//     founder:{firstName: "Avi", lastName:"M"}
// };

// const {founder:{firstName}} = startup;

// console.log(startup.founder.firstName);
// console.log(startup.founder.lastName);


// function greet({name}){
//     console.log(`Hello, ${name}`);
    
// }


// greet({name: "Yadu"});


// const {city = "Unknown"} = {name: "Avi"};
// console.log(city);


// const team = {
//     members: ["A", "B", "C"]
// }

// const {members: [first]} = team;
// console.log(first);


// const users = [
//     {name: "Yadu", role:"Admin"},
//     {name: "Riya", role:"User"}

// ];

// for(const {name, role} of users){
//     console.log(`${name} is a ${role}`);
    
// };



// let userr = {
//     name: "John",
//     age:30,
//     isAdmin: true
// }

// for(let key in userr){
//     console.log(key);
//     console.log(userr[key]);
    
// }

// let codes = {
//     "49": "Germany",
//     "41": "India",
//     "44": "Great britain"
// }

// for(let code in codes){
//     console.log(code);
    
// }

// let salaries = {
//     john: 100,
//     Ann: 160,
//     Pete: 130
// }

// console.log(salaries.john);


// let message = "Hello"
// let phrase = message;


// let a = {};
// let b = a;

// console.log(a === b);
// console.log(a == b);


// const members = {
//     name: "harry"
// }

// members.name = "Pete";

// console.log(members.name);


const user = {
    name: "Yadu",
    age: 22
}

console.log(user.name);
console.log(user.age);

const user2 = {};
user2.name ="Yadu";
user2.age = 23;
user2["job"] = 'developer'

console.log(user2);




const profile = {
    name: "Avi",
    address: {
        city: "Mumbai",
        pincode: 4000001
    }
}

console.log(profile.name);
console.log(profile.address.city);


const keyName = "email";
const user1 ={
    name: "Yadu",
    [keyName]: "yadu@example.com"
}

console.log(keyName);


console.log(user1.keyName);


const math = {
    square(n){
        return n * n;
    }
}
console.log(math.square(4));



function Person(name, age){
    this.name = name;
    this.age = age
}

const p1 = new Person("Yadu", 23)
console.log(p1.name);



const baseUser = {
    greet(){
        console.log("Hello");
        
    }
}

const newUser = Object.create(baseUser);
newUser.name = "Yadu";
newUser.greet()


const car ={ brand: "BMW", model: "M5 CS"};
console.log(car.brand);


const key = "model";
console.log(car[key]);

car.model ="Toyota"
console.log(car.model);
car.year = "2024";
console.log(car.year);

console.log(car);

delete car.year
console.log(car);


for(let key in car){
    console.log(`${key}: ${car[key]}`);
    
}

// const user2 = {
//     name: "Avi"
// }
// const {name, age= 29} = user2;
// console.log(age);


const {name: fullName} = user

console.log(fullName);


const company = {
    name: "TechCorp",
    ceo: {first: "Ravi", last: "Sharma"}
}

const {ceo: {first}} = company;

function displayUser({name, age}){
    console.log(`${name} is ${age} years old`);
    
}
displayUser({name: "Yadu", age: 23})

const users = [
    {name: "Yadu", role: "Admin"},
    {name: "Riya", role: "User"}
];

users.forEach(({name, role}) =>{
    console.log(`${name} - ${role}`);
    
});

const obj = {a: 1, b: 2};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


const obj1 = {a: 1};
const obj2 = {b: 2};

const merged = {...obj1, ...obj2}

console.log(merged);


console.log(obj.hasOwnProperty("a"));


const config = { version : 1}
Object.freeze(config);
config.version = 2

console.log(config.version);


const json = JSON.stringify(user);
const parsed = JSON.parse(json)


const original = {a: 1};
const copy = {...original}

console.log(copy);


const userx = {profile: {name: "Riya"}};
console.log(user.profile?.name);
console.log(user.details?.email);
