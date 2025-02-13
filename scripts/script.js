// User Acception

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