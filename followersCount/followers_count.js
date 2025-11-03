let count = 0; // Initialize count to 0

function increaseCount() {
    count++; // Incrementa il count di 1
    displayCount(); // Mostra il count
    checkCountValue(); // Controlla il valore del count e mostra i messaggi
  }

  function checkCountValue() {
    if (count === 10) {
      alert("Il tuo post su Instagram ha guadagnato 10 follower! Congratulazioni!");
    } else if (count === 20) {
      alert("Il tuo post su Instagram ha guadagnato 20 follower! Continua così!");
    }
  }
  
  function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Visualizza il conteggio nell'HTML
    }