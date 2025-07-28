const doSomething = callback =>{
    setTimeout(()=>{
        const skills = ['HTML', 'CSS', 'JS'];
        callback('IT did not go well', skills)
    }, 2000)
}


const callback = (err, result) =>{
    if(err){
        return console.log(err)
    }
    return console.log(result)
}


doSomething(callback)


const doSomething1 = callback =>{
    setTimeout(() => {
        const skills = ["HTML", 'CSS', "JS"];
        callback(false, skills)
    }, 2000);
}


doSomething1((err, result ) =>{
    if(err){
        return console.log(err)
    }
    return console.log(result)
})



const promise = new Promise((resolve, reject) =>{
    resolve('success');
    reject('failure')
})


const doPromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        const skills = ['HTML', 'CSS', 'JS'];
        if(skills.length > 0){
            resolve(skills)
        } else{
            reject("Something went wrong ")
        }
    }, 2000)
})

doPromise
    .then(result =>{
        console.log(result)
})
.catch(error => console.log(error))


const doPromise1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        const skills = ["HTML", "CSS", "JS"]
        if(skills.includes("Node")){
            resolve("Fullstack developer")
        } else{
            reject("Something went wrong")
        }
    }, 2000)
})


doPromise1
.then(result =>{
    console.log(result)
})
.catch(error => console.log(error))



const url = 'https://dummyjson.com/users'
fetch(url)
.then(response => response.json())
.then(data =>{
    console.log(data)
})
.catch(error => console.log(error));


const square = async function(n){
    return n * n
}

square(2)