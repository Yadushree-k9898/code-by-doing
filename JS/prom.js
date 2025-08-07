const promise1 = new Promise((resolve, reject) =>{
    resolve("Success")
})

promise1.then(res => console.log(res)
);

const promise2 = new Promise((resolve, reject) =>{
    reject("Error occured")
})

promise2.catch(error => console.log(error)
);

const delayedPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Delayed by 2s")
    }, 2000);
})

delayedPromise.then(console.log
);


new Promise((resolve, reject) =>{
    resolve(2)
})

.then( num => num * 2)
.then(num => num + 2)
.then(result => console.log("Result", result)
);


new Promise((resolve, reject) =>{
    resolve(10)
})
.then(num =>{
    throw new Error("Oops!")
})
.catch( err => console.log("Caught: ", err.message)
);


function  asyncDouble(x){
    return new Promise((resolve) =>{
        setTimeout(() => resolve(x * 2), 1000)
    })
};

asyncDouble(5)
.then(result =>{
    console.log("First:", result);
    return asyncDouble(result)
})
.catch(result => console.log("Second:", result)
)


const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3= Promise.resolve(3)

Promise.all([p1, p2, p3])
.then(values => console.log("ALL RESOLVED: ", values)
);

const fast = new Promise(res => setTimeout(() => res("Fast")),500 );
const slow = new Promise(res => setTimeout(() => res("Slow")), 1000);

Promise.race([fast, slow])
.then(result => console.log("Winner:", result)
);


const q1 = Promise.resolve("A");
const q2 = Promise.reject("B failed");
const q3 = Promise.resolve("C")

Promise.allSettled([q1, q2, q3]).then(result => {
    result.forEach(res => console.log(res.status, res.value || res. reason)
    )
});


function fakeApi(callback){
    setTimeout(() => callback(null, "Data fetched"), 1000)
}

function fakeApiPromise(){
    return new Promise((resolve, reject) =>{
        fakeApi((err, data) =>{
            if(err) reject(err)
            else resolve(data)
        })
    })
}

fakeApiPromise().then(console.log
);


function  fetchUser(){
    return new Promise (resolve =>{
        setTimeout(() => resolve("User data"), 1000)
    })
}

async function getUser(){
    try{
        const user = await fetchUser();
        console.log(user);
        
    }catch(err){
        console.log(err);
        
    }
}

getUser();

function delay(ms, value){
    return new Promise(res => setTimeout(() => res(value), ms));

}

async function runSteps(){
    const step1 = await delay(1000, "Step1");
    console.log(step1);

    const step2 = await delay(1000, "Step 2");
    console.log(step2);
    
    const step3 = await delay(1000, "Step 3");
    console.log(step3);
    
}

runSteps();


async function risky(){
    throw new Error("Something went Wrong")
}

async function run(){
    try{
        await risky()
    }catch(error){
        console.log("Catch:", error.message);
        
    }
}

run();


async function fetchData(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await res.json();
        console.log(data);
        
    }catch(error){
        console.log("API Error:", error.message);
        
    }
}

fetchData()