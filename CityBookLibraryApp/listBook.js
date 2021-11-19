
"use strict";
async function getBooks() {
    let response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list");
    let books = await response.json();
    return books;
}

(function () {
    async function displayBooks() {
        let books = await getBooks();
        console.log(books);
        const tbodyBooks = document.getElementById("tbodyBooks");
        let trowsOfBook = "";
        books.forEach((book, i) => {
            trowsOfBook += `<tr>
                <th scope="row">${i + 1}.</th>
                <td>${book.isbn}</td>
                <td>${book.title}</td>
                <td>${book.overdueFee}</td>
                <td>${book.publisher}</td>
                <td>${book.datePublished}</td>
            </tr>`;
        });
        tbodyBooks.innerHTML = trowsOfBook;
    }

    displayBooks();

})();