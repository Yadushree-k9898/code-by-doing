const array = [1, 4, 9, 18];

const doubled = array.map((x) => x * 2);

console.log(doubled);



const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num))

console.log(roots);


const kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key:3, value:30}
]

const reformattedArray = kvArray.map(({key, value}) =>({[key]: value}));

console.log(reformattedArray);
console.log(kvArray);



console.log(["1", "2", "3"].map((str) =>parseInt(str, 10)));


console.log(["1", "2", "3"].map((str) => parseInt(str, 10)));


console.log(["1", "2", "3"].map(Number));


console.log(["1.1", "2.2e2", "3e300"].map(Number));


console.log(["1.1", "2.e2", "3e3000"].map((str) =>parseInt(str, 10)));



const numberss = [1, 2, 3, 4, 5]

const filteredNumbers = numbers.map((num, index) => {
    if(index < 3){
        return num
    }
})

console.log(filteredNumbers);


const cart = [5, 15, 25];

let total = 0;

const withTax = cart.map((cost) =>{
    total += cost;
    return cost * 1.2
})

console.log(withTax);
console.log(total);


const carts = [5, 15, 25];

const totals = carts.reduce((acc, cost) => acc+ cost, 0);
const withTaxs = carts.map((cost) => cost* 1.2)


console.log(totals);
console.log(withTaxs);



const products = [
    {name: "sports car"},
    {name: "laptop"},
    {name: "phone"}
]

products.map((product) => {
    product.price = 100;
})


const numss = [3, -1, 1, 4, 1, 5, 9, 2, 6];

const averaged = numss
.filter((num) => num > 0)
.map((num, idx, arr) =>{
    const  prev = arr[idx -1];
    const next = arr[idx + 1];

    let count = 1;
    let total = num;

    if(prev !== undefined){
        count++;
        total += prev
    }
    if(next !== undefined){
        count++
    total += next;
    }

    const average  =  total / count;
    return Math.round(average * 100) / 100;
});

console.log(averaged);
