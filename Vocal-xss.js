
const recognition = new window.webkitSpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    // Inject malicious code here instead of displaying the transcript
    alert('Transcript: ' + transcript);
    recognition.stop();
};

recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};

window.addEventListener('DOMContentLoaded', function() {
    recognition.start();
});
