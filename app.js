// Check if the browser supports speech recognition API
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';

const startButton = document.getElementById('start-recording');
const responseElement = document.getElementById('response');

// Start listening for speech when the button is clicked
startButton.addEventListener('click', () => {
    recognition.start();
    responseElement.innerText = 'Listening for your command...';
});

// When speech is recognized
recognition.onresult = function(event) {
    const command = event.results[0][0].transcript.toLowerCase();
    responseElement.innerText = `You said: "${command}"`;

    processCommand(command);
};

// Error handling for speech recognition
recognition.onerror = function(event) {
    responseElement.innerText = `Error: ${event.error}`;
};

// Function to process commands
function processCommand(command) {
    if (command.includes('hello')) {
        responseElement.innerText = 'Hello! How can I assist you today?';
    } else if (command.includes('time')) {
        const time = new Date().toLocaleTimeString();
        responseElement.innerText = `The current time is ${time}.`;
    } else if (command.includes('weather')) {
        responseElement.innerText = 'Fetching the weather...'; // Integrate weather API if needed
    } else {
        responseElement.innerText = 'Sorry, I did not understand that command.';
    }
}
