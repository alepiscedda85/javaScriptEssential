let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;


function startTest() {
// Imposta il testo di prova
document.getElementById("inputText").value = testText;

// Reimposta l'input dell'utente e l'output
let userInput = document.getElementById("userInput");
userInput.value = "";
userInput.readOnly = false;
userInput.focus();

document.getElementById("output").innerHTML = "";

// Avvia il timer
startTime = new Date().getTime();
}


 function endTest() {
            endTime = new Date().getTime();

            // Disabilita l'input dell'utente
            document.getElementById("userInput").readOnly = true;

            // Calcola il tempo trascorso e le parole al minuto (WPM)
            var timeElapsed = (endTime - startTime) / 1000; // in secondi
            var userTypedText = document.getElementById("userInput").value;

            // Suddividi il testo usando regex per contare correttamente le parole
            var typedWords = userTypedText.split(/\s+/).filter(function (word) {
                return word !== "";
            }).length;
            
            var typedWordsLength = userTypedText.length;

            var wpm = 0; // Valore predefinito

            if (timeElapsed !== 0 && !isNaN(typedWords)) {
                wpm = Math.round((typedWords / timeElapsed) * 60);
            }

            // Visualizza i risultati
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "<h2>Risultati del Test di Digitazione:</h2>" +
                "<p>Lunghezza Totale: " + typedWordsLength + "</p>"  +
                "<p>Parole Digitati: " + typedWords + "</p>" +
                "<p>Tempo Trascorso: " + timeElapsed.toFixed(2) + " secondi</p>" +
                "<p>Parole al Minuto (WPM): " + wpm + "</p>";
            }