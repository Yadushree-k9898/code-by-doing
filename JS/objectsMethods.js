const user = {name: "yadushree", age: 23, job:"coder", comeback:"2025 august"};
console.log(Object.keys(user))
console.log(Object.values(user));
console.log(Object.entries(user))

const person = {name:"john", gender: "male", age: 30};
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

for(let [key, value] of Object.entries(person)){
    console.log(`${key} :${value}`)
}



const car = {brand: "BMW", model: "X", year: 2025};
for(let [key, value] of Object.entries(car)){
    console.log(`${key}: ${value}`)
}


const obj = {a: 1, b:2, c: 3};
console.log("a" in obj)
console.log(obj.hasOwnProperty("b"))
console.log(person.hasOwnProperty("name"))

'Convert an object into a string and back'


const obj1 = {x:1, y:2, z:3};
const str = JSON.stringify(obj1) 
console.log(str)
const newObj = JSON.parse(str)
console.log(newObj)



const key = "email";

const user1 = {
    name:"Bob",
    [key] : "bob@example.com"
};

console.log(user1)


'Shallow copy an object'

const original = {a: 1, b:2};
const copy = {...original}
console.log(copy);


"Deep copy an object"


const deep = JSON.parse(JSON.stringify(original))

console.log(deep);


const user2 = {name: "yadu", age: 23};
console.log(Object.keys(user2))

const empty = {};
console.log(Object.keys(empty));
console.log(Object.values(empty))


const data = {a:1, b:2, c: 3};
Object.keys(data).forEach(key => console.log(key))


const person1 = {name: "john",  role: "Admin"};
console.log(Object.keys(person1).length)
console.log(Object.values(person1).length)

const mixed = {id: 1, active: true, tags: ["js", "html"]};
console.log(Object.keys(mixed))


"Object.values()"


const product = {name: "Laptop", price: 50000};
console.log(Object.values(product))

const scores = {math: 90, science: 80, english: 77};
Object.values(scores).forEach(score => console.log(score))


const settings = {darkMode: true, volume: 80};
const total = Object.values(settings).reduce((a, b) => a+ (typeof b === 'number' ? b: 0 ), 0)
console.log(total)


const languages = {lang1: "JS", lang2: "Python", lang3: "Go"};
console.log(Object.values(languages).includes("Python"))

const dataa = {a: 1, b: "Hello", c: null};
console.log(Object.values(dataa))


const userr = {name: "A", age: 20};
console.log(Object.entries(userr))

Object.entries(userr).forEach(([key, values]) =>{
    console.log(`${key} -> ${values}`)
})


const settingss = {theme: "dark", layout: "grid"};
const mapped = Object.entries(settingss).map(([k, v]) => k + ": " + v)
console.log(mapped)


const objs = {a: 1, b:2};
const reversed = Object.entries(objs).reverse();
console.log(reversed)


const upperKeys = Object.fromEntries(
    Object.entries({a:1, b:2}).map(([k, v]) => [k.toUpperCase(), v])
);

console.log(upperKeys)