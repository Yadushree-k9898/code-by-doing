const array = ["a", "b", "c"];

array.forEach((element) => console.log(element)
)

const ratings = [5, 4, 5];
let sum = 0;


const sumFunction = async(a, b) => a+b;


ratings.forEach(async (rating) =>{
    sum = await sumFunction(sum, rating)
})

console.log(sum);


const items = ["item1", "item2", "item3"];
const copyItems = [];

for(let i = 0; i < items.length; i++){
    copyItems.push(items[i]);


}

items.forEach((item) =>{
    copyItems.push(item)
});


const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);

console.log(doubled);


const strings = nums.map(n => n.toString())
console.log(strings);
nums.forEach(n => console.log(n)
)

let sums = 0;
nums.forEach(n => console.log(sum += n))



const users = [{name: 'A'}, {name:'B'}];
const names = users.map(user => user.name)
console.log(names);
users.forEach(user => console.log(user.name = user.name.toUpperCase())

)

const withIndex = nums.map((num, idx) => `#${idx} : ${num}`)
console.log(withIndex);


const obj = {};
users.forEach(user => console.log(obj[user.name] = true)
);

const total = nums.reduce((acc, val) => acc+val, 0);
console.log(total);

const max = nums.reduce((acc, val) => Math.max(acc, val));
console.log(max);


const nested = [[1, 2], [3, 4]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), [])
console.log(flat);



const itemss = ['a', 'b', 'c'];
const count = itemss.reduce((acc, val) =>{
    acc[val] = (acc[val] || 0) + 1;
    return acc
}, {})

console.log(count);


const kv = users.reduce((acc, user) =>{
    acc[user.name] = user;
    return acc;
}, {})

console.log(kv);



const grouped = ['apple', 'banana', 'avacado'].reduce((acc, fruit) =>{
    const letter = fruit[0];
    (acc[letter] = acc[letter] || []).push(fruit);
    return acc
}, {})

console.log(grouped);



const totalLength = users.map(u => u.name.length).reduce((a, b) => a+b, 0);
console.log(totalLength);


window.addEventListener('resize', debounce(()=>{
    console.log('Window resized');
    
}, 500



));


document.addEventListener('mousemove', throttle(e =>{
    console.log(e.clientX, e.clientY);
    
}, 1000))


GamepadButton.addEventListener('click', throttle(()=>{
    console.log('Clicked');
    
}, 1000))