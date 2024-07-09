
let messageElement = document.getElementById("message");
messageElement.textContent = "Initializing hack program....";

setTimeout(() => {
    messageElement.textContent = "Hacking Lucky_Shainky";
}, 2000);

setTimeout(() => {
    messageElement.textContent = "Fetching gmail.......";
    blinkText();
}, 4000);

function blinkText() {
    let isVisible = true;
    let blinkInterval = setInterval(() => {
        messageElement.style.visibility = isVisible ? 'visible' : 'hidden';
        isVisible = !isVisible;
    }, 500);

    // Clear the interval and update the text after 2 seconds
    setTimeout(() => {
        clearInterval(blinkInterval);
        messageElement.style.visibility = 'visible';
        messageElement.textContent = "ly153465@gmail.com";

        // Add the Instagram connection message after a short delay
        setTimeout(() => {
            messageElement.textContent = "Connecting to Instagram...alpha_9718";
            blinkText(); // Start blinking again
        }, 1000);

        // After Instagram connection, display "Done" in h2 with a flash effect
        setTimeout(() => {
            let h2Element = document.createElement("h2");
            h2Element.textContent = "Done";
            h2Element.style.visibility = "hidden";
            document.body.appendChild(h2Element);

            // Flash the h2 element once
            h2Element.style.visibility = "visible";
            setTimeout(() => {
                h2Element.style.visibility = "hidden";
            }, 500); 
        }, 3000); // Delay for 3 seconds after Instagram connection
    }, 2000);
}
 setTimeout(() => {
 alert("your phone is hacked");
},8000);

 


