// User Acception

// Add a "create prompt" button.
    // Prompt will appear on screen for user to type out a new prompt. (Users can create and delete prompts).
// Create a text box for typing to take place.
    // User can only type within this text box.
    // When the user has finished the prompt, the test will automatically stop and tell the user how long it took to complete.


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