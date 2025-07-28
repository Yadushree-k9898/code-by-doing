function countDown(n){
    if(n <= 0){
        console.log("Done!");
        return
    }
    console.log(n);
    countDown(n-1)
}

console.log(countDown(5))

function countDown(n){
    if(n <=0){
        console.log("Done!");
        return
    }
    console.log(n);
    countDown(n-1)
}

console.log(countDown(6));

function countDown(n){
    if(n <= 0){
        console.log('Done!');
        return;
    }
    console.log(n);
    countDown(n-1)
}

console.log(countDown(10))



function countDown(n){
    if(n <= 0){
        console.log("Done!");
        return;
    }
    console.log(n);
    countDown(n-1)
}

console.log(countDown(15))


function countDownTail(n){
    if(n <= 0){
        console.log("Done!");
        return;
    }
    console.log(n);
    return countDownTail(n -1)
}

console.log(countDownTail(5))


function countDownTail(n){
    if(n <= 0){
        console.log("Done!");
        return;
    }
    console.log(n);
    countDownTail( n -1);

}

console.log(countDownTail(7))




function countDownTail(n){
    if(n <= 0){
        console.log("Done!");
        return
    }
    console.log(n);
    return countDownTail( n - 1)
}


console.log(countDownTail(7))