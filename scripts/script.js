// User Acception

// let username;

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}



// Button Features
document.querySelector('.button').addEventListener('click', function() {
    alert("Typing test has been reset!");
    console.log("The test has been reset!")
});

// Get the buttons and timer display
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const timerDisplay = document.getElementById('timer');

let timer;
let minutes = 0;
let seconds = 0;
let isRunning = false;

// Start button functionality
startButton.onclick = function() {
    if (isRunning) {
        clearInterval(timer);
        startButton.textContent = 'Click Here to Start';
    } else {
        timer = setInterval(function() {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            // Update the timer display
            timerDisplay.textContent = formatTime(minutes, seconds);
        }, 1000);

        startButton.textContent = 'Pause';
    }
    isRunning = !isRunning;
};

// Reset button functionality
resetButton.onclick = function() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    timerDisplay.textContent = '00:00';
    startButton.textContent = 'Click Here to Start';
    isRunning = false;
};

// Function to format time in MM:SS format
function formatTime(min, sec) {
    return (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;
}