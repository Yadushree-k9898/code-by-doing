const nums = [1, 2, 3, 5];

const doubled = nums.map(n => n * 2
)
console.log(doubled);

nums.forEach(n =>console.log(n*2)

)

const users = ["Alice", "Bob"];
const userEls = users.map(name =>`<li>${name}</li>`) 
console.log(userEls);



const items = [{count: 1}, {count: 2}];
items.forEach(item =>console.log( item.count += 1)
)