let isRunning = false
let timeLeft = 1500;
let intervalId = null;


const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');

function running(){
    if(isRunning) return;

    isRunning = false

    intervalId = setInterval(()=>{
        timeLeft = timeLeft -1

    }, 1000)
}