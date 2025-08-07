let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);

console.log(fruits[1]);

fruits[2] = 'grapes'
console.log(fruits);

fruits.push('guava');
console.log(fruits);

fruits.pop()
console.log(fruits);


console.log(fruits.length);

for(let fruit of fruits){
    console.log(fruit);
    
}


let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);
console.log(doubled);

let even = numbers.filter( num =>num % 2 === 0)
console.log(even);


let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


numbers.forEach( n => console.log(n)
);

console.log(numbers.includes(3));

console.log(numbers.indexOf(2));


let sliced = numbers.slice(1, 4);
console.log(sliced);


let items = ["pen", "pencil", "eraser", "scale", "pen"];

console.log(items.indexOf("pencil"));

console.log(items.lastIndexOf("pen"));

console.log(items.includes('scale'));

let longItem = items.find(item => item.length > 5);
console.log(longItem);


let index = items.findIndex(item => item === "eraser");
console.log(index);


console.log(items.some(item => item ==='pen'));

console.log(items.every(item => typeof item === 'string'));



const nums = [5, 3, 1, 4, 2];

console.log(nums.sort());


console.log(nums.sort((a, b) => a-b));
console.log(nums.sort((a, b) => b-a));


console.log(nums.reverse());


const names = ["Rom", "Tom", "Ben"];
console.log(names.sort());


console.log(nums.sort((a, b) => a.length - b.length));


console.log(nums.sort((a, b) => b-a));


const users = [{age: 30}, {age: 20}, {age:25}];
console.log(users.sort((a, b) => a.age - b.age));


const numbers1 = [1, 2, 3, 4, 5, 6];

for(let i = 0; i <numbers1.length; i++) console.log(numbers1[i]);


for(let num of numbers1) console.log(num);


numbers1.forEach(num => console.log(num)
);

const squares = numbers1.map(num => num* num);
console.log(squares);


const evens = numbers1.filter(num => num % 2 === 0);

const sums = numbers1.reduce((acc, curr) => acc+curr, 0);
console.log(sums);


for(let [index, val] of numbers1.entries()) console.log(index, val);


const arr1 = [1, 2];
const arr2 = arr1
arr2.push(3);
console.log(arr1);
console.log(arr2);


const arr3 = [...arr1]
console.log(arr3);


console.log(arr1, arr3);


const arr4 = arr1.slice();
console.log(arr4.push(5));

const arr5 = structuredClone(arr1)
console.log(arr5);


const arr = [1, 2, 3];
arr.push(4);
console.log(arr[0]);
console.log(arr[3]);


const person = {
    name: "Alice",
    age: 24
}

console.log(person.name);


//constructors 

function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
};

const p1 = new Person("Tom", 30, "Developer");
console.log(p1.name);
console.log(p1.job);



const user = {
    name: "John",
    greet(){
        console.log("Hi " + this.name);
        
    }
}
user.greet()



function Car(model){
    this.model = model
}

Car.prototype.drive = function(){
    console.log(this.model + " is driving");
    
}

const c1 = new Car("BMW")
c1.drive();

const person2 =  {
    name: "Jake",
    greet(){
        return `Hi, I'm ${this.name}`
    }
}

console.log(person2.greet());


const obj = {
    a: 1, 
    b: 2
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


const user3 = {
    firstName: "Yadu",
    lastName: "K",

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(name){
        [this.firstName, this.lastName] = name.split(" ")
    }
} 

console.log(user3.fullName);
user3.fullName = 'John doe'
console.log(user3.fullName);


const user2 = {name: "Sam"};

Object.freeze(user2);
user2.name = "New";
console.log(user2.name);

const car =  {model: "Tesla"};
Object.seal(car);
car.model = "BMW";
delete car.model

console.log(car);


let a = {x: 1};
let b = a
b.x = 2;
console.log(a.x);


const set = new Set();

set.add(1);
set.add(2);

console.log(set);

set.delete(1)
console.log(set);

console.log(set.has(2));


console.log(set.size);

console.log(set.clear());


set.add(3).add(4);
set.forEach(val => console.log(val)
);

console.log([...set.keys()]);


const a1 = new Set([1, 2, 3]);
const b1 = new Set([2, 3, 4]);

const union = new Set([...a1, ...b1])
console.log(union);

const intersection = new Set([...a1].filter(x => b1.has(x)));
console.log(intersection);


const diff = new Set([...a1].filter(x => !b1.has(x)));
console.log(diff)

console.log(union, intersection, diff);


const set1 = new Set([1, 2, 3]);
const set2 = set1

set2.add(4);
console.log(set1);




const map = new Map();

map.set("name", "john");
console.log(map.get("map"));

console.log(map.has("name"));
map.delete("name");

console.log(map.size);


console.log(map.clear());


map.set("a", 1).set("b", 2);
map.forEach((val, key) => console.log(key, val)
);


const m1 = new Map();
m1.set("key", "value");

const m2 = m1;

m2.set("key2", "values2");

console.log(m1.get("key2"));
