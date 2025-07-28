const promises = new Promise((resolve, reject) =>{
    resolve("Success!")
});

promises.then(console.log);


function delay(){
    return new Promise(resolve =>{
        setTimeout(()=> resolve("Delayed by 2s"), 2000)
    })
}

delay().then(console.log)


new Promise((_, reject) =>{
    reject("Something went wrong")
}).catch(console.log)


"chained promises"

Promise.resolve(10)
    .then(num => num * 2)
    .then(num => num + 2)
    .then(console.log)

Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(console.log)


const fast = new Promise(res => setTimeout(() => res("Fast!"), 1000));

const slow = new Promise(res => setTimeout(() => res("Slow"), 3000))


Promise.race([fast, slow]).then(console.log)



"Retry logic"


function unreliableApi(){
    return new Promise((res, rej) =>{
        Math.random() > 0.7 ? res("Success") : rej("Fail")
    })
}



function retryApi(retries = 3){
    return unreliableApi().catch(err =>{
        if (retries <= 0) throw err;
        return retryApi(retries - 1)
    })
}
retryApi().then(console.log).catch(console.error)



function unreliableApi(){
    return new Promise((res, rej) =>{
        Math.random() > 0.7 ? res("Success"): rej("Fail")
    })
}


function retryApi(retries = 3){
    return unreliableApi().catch(err =>{
        if(retries <= 0) throw err;
        return retryApi(retries - 1)
    }
        
    )
}

retryApi().then(console.log).catch(console.error)