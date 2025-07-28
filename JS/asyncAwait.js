async function greet(){
    return "Hello, world"
}
greet().then(console.log)


async function fetchData(){
    try{
        let res = await Promise.resolve("Data loaded")
        console.log(res);
        
    } catch(err){
        console.log(err)
    }
}

fetchData();


function delay(ms){
    return new Promise(res => setTimeout(res, ms))
}


async function run(){
    console.log("Start");
    await delay(2000);
    console.log("End after 2s")
}

run()


function delay(ms){
    return new Promise(res => setTimeout(res, ms));
}

async function run(){
    console.log("Start");
    await delay(2000);
    console.log("End after 2s")
}


run()



async function add(a, b){
    return a + b
}

add(3, 4).then(console.log)




function wait(ms){
    return new Promise(res => setTimeout(res, ms))
}

async function loopDemo(){
    for(let i = 1; i <= 3; i++){
        await wait(1000);
        console.log("Step", i)
    }
}


loopDemo()



async function fetchAll(){
    const [a, b] = await Promise.all([
        Promise.resolve("A"),
        Promise.resolve("B")
    ]);
    console.log(a, b)
}

fetchAll()


function task(name, ms){
    return new Promise(res => setTimeout(() => res(name), ms))
}


async function sequential(){
    const one = await task("1", 1000);
    const two = await task("2", 1000);
    console.log("Sequential: ", one, two)
}


async function parallel(){
    const [one, two] = await Promise.all([
        task("1", 1000),
        task("2", 1000)
    ])
    console.log("Parallel:", one, two)
}


sequential();
parallel()



async function checkStatus(status){
    if(status === "ok") return "All good"
    else throw "Something went  wrong"
}



(async () =>{
    try{
        const res = await checkStatus("ok");
        console.log(res);
    }catch(error){
        console.log(error)
    }
})()