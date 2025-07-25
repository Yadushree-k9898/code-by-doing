function removeDuplicates(arr){
    if(arr.length === 0) return [];

    let result = [arr[0]];

    for(let i = 1; i <arr.length; i++){
        if(arr[i] !== arr[i-1]){
            result.push(arr[i])
        }
    }
    return result
}

console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 5, 5]));



function RC(arr){
    if(arr.length === 0 ) return [];

    let result = [arr[0]];

    for(let i =1 ; i < arr.length; i++){
        if(arr[i] != arr[i-1] ){
            result.push(arr[i])
        }
    }
    return result
}

console.log(RC([1, 1, 2, 3, 3, 4, 5, 5]));




function removeD(arr){
    if(arr.length === 0) return [];

    let result = [arr[0]];

    for(let i =1; i < arr.length; i++){
        if(arr[i] !== arr[i-1]){
            result.push(arr[i])
        }
    }
    return result
}

console.log(removeD([1, 1, 2, 3, 3, 4, 5, 5]));
