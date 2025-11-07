function showweatherDetails(event) {
      event.preventDefault();

 const lat = document.getElementById('latitude').value;
 const lon = document.getElementById('longitude').value;
      const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // Sostituisci 'YOUR_API_KEY' con la tua chiave API reale
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=it`;


       fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })

        .catch(error => {
            console.error('Errore nel recupero del meteo:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Impossibile recuperare il meteo. Per favore riprova.</p>`;
          });      
}

 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );