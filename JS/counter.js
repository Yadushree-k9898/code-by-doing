let count = 0;

document.getElementById('increaseBtn').addEventListener('click', function(){
    count +=1;
    document.getElementById('count').innerHTML = count;
})

document.getElementById('decreaseBtn').addEventListener('click', function(){
    count-=1
    document.getElementById('count').innerHTML = count;
})

document.getElementById('resetBtn').addEventListener('click', function(){
    count=0
    document.getElementById('count').innerHTML = count
})