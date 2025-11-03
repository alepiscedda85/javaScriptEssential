
// prima funzione
function submitFeedback() {

    //inizializzazione delle variabili con i dati dell'utente
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const submitButton = document.getElementById('submitBtn');

    //visualizzazione a video dopo aver inviato i dati degli stessi dati inviati dall'utente
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    submitButton.onclick = submitFeedback;
    alert('Thank you for your valuable feedback')

        //attivazione del blocco user info (in display=none) a display = block, una volta inviato il form. 
        document.getElementById('userInfo').style.display = 'block';

} 


// seconda funzione
//Evento Keydown dopo inoltro con tasto enter
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });
 