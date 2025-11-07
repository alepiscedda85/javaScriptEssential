// Crea la richiesta AJAX
var xhr_news = new XMLHttpRequest();
var url = './news_article.json';

// Configura richiesta
xhr_news.open('GET', url, true);
xhr_news.responseType = 'json';

// Callback al completamento
xhr_news.onload = function() {
  var articles = xhr_news.response.articles; // dati JSON
  var newsContainer = document.getElementById('news'); // contenitore principale

  // Ciclo articoli
  articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('news-item');

    // Titolo e descrizione
    var title = document.createElement('h2');
    title.textContent = article.title;
    var description = document.createElement('p');
    description.textContent = article.description;

    // Lista modi per raggiungere
    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Modi per Raggiungere:';
    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way) {
      var li = document.createElement('li');
      li.textContent = way;
      waysList.appendChild(li);
    });

    // Lista benefici
    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefici:';
    var benefitsList = document.createElement('ul');
    article.benefits.forEach(function(benefit) {
      var li = document.createElement('li');
      li.textContent = benefit;
      benefitsList.appendChild(li);
    });

    // Monta il blocco articolo
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    newsContainer.appendChild(articleDiv);
  });
};

// Invia la richiesta
xhr_news.send();