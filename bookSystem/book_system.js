let books = [];


function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Per favore, compila correttamente tutti i campi.');
    }
}


function showbooks() {
    const booksDiv = books.map((book, index) => 

       `<h1>Numero del libro: ${index + 1}</h1>
        <p><strong>Nome del libro: </strong>${book.name}</p>
        <p><strong>Nome dell'autore:</strong> ${book.authorName}</p>
        <p><strong>Descrizione del libro:</strong> ${book.bookDescription}</p>
        <p><strong>Numero di pagine:</strong> ${book.pagesNumber} pagina(e)</p>
        <button onclick="editbook(${index})">Modifica</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}


function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); // Rimuovi l'entrata vecchia
    showbooks(); // Aggiorna la lista
  }


  function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

   function deleteBook(index) {
    books.splice(index, 1); // Rimuovi l'entrata vecchia
    showbooks(); // Aggiorna la lista
   }