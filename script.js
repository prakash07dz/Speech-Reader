let textToRead = document.getElementById('textToRead');
let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');
let speechSynthesis = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance();
utterance.volume = 5;
// utterance.lang = "hi-IN"; 

startButton.addEventListener('click', () => {
    readText();
});

stopButton.addEventListener('click', () => {
    speechSynthesis.cancel();
});

window.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        readText();
    }
});


function readText() {
    let text = textToRead.value.trim();
    if (text !== '') {
        utterance.text = text;
        speechSynthesis.speak(utterance);
        textToRead.style.border = "1px solid gray";
    }
    else {
        textToRead.style.border = "1px solid red";
    }
}