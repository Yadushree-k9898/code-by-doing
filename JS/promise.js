const isEven = (num) =>{
    return new Promise((resolve, reject) =>{
        if(num % 2 === 0){
            resolve("Even")
        }else{
            reject("Odd")
        }
    })
}

isEven(6)
.then(console.log)
.catch(console.error)
.finally(() => console.log("Check complete")
)


async function checkEven(num){
    try{
        const result = await isEven(num);
        console.log(result);
        
    }catch(error){
        console.log(error);
        
    }finally{
        console.log("Done");
        
    }
}

checkEven(3)



new Promise((res) =>{
    setTimeout(() => res(10), 1000)
})
.then((num) => num* 2)
.then((num) => num +5)
.then(console.log
)



const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function sayHelloLater(){
    await delay(2000);
    console.log("Hello after 2s");
    
}
sayHelloLater()


let count = 0;

const intervalId = setInterval(()=>{
    console.log("count", count);
    count++
    if(count === 5) clearInterval(intervalId)
    
}, 1000)



const p1 = Promise.resolve("JS")
const p2 = Promise.resolve("React")
Promise.all([p1, p2]).then(console.log
)


const fast = new Promise(res => setTimeout(() => res("Fast!"), 100))
const slow = new Promise(res => setTimeout(() => res("Slow!"), 500))

Promise.race([fast, slow]).then(console.log
)


Promise.reject("Something went wrong")
.then(console.log
)
.finally(()=>console.log("Handled rejectetions")
)