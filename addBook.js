/**
 * newbook.js
 */

"use strict";
// IIFE
window.onload = function () {
    const txtTitle = document.getElementById("title");
    const txtISBN = document.getElementById("isbn");
    const txtOverdueFee = document.getElementById("overdueFee");
    const txtPublisher = document.getElementById("publisher");
    const txtDatePublisher = document.getElementById("datePublished");

    const initAddNewBook = function () {
        const formNewBook = document.getElementById("formNewBook");
        formNewBook.addEventListener("submit", addNewBook);
    };



    const getBookData = function () {
        const bookObj = {
            "title": txtTitle.value,
            "isbn": txtISBN.value,
            "overdueFee": txtOverdueFee.value,
            "publisher": txtPublisher.value,
            "datePublished": txtDatePublisher.value
        };
        return bookObj;
    };

    const clearFormDataFields = function () {
        txtTitle.value = "";
        txtISBN.value = "";
        txtOverdueFee.value = "";
        txtPublisher.value = "";
        txtDatePublisher.value = "";
    };
    const addNewBook = async function (event) {
        event.preventDefault();
        const bookObj = getBookData(); //
        const response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
            "method": "POST",
            "body": JSON.stringify(bookObj),
            "headers": {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            console.log(response.statusText);
            console.log(await response.json());
            clearFormDataFields();
        } else {
            console.log(response.statusText);
        }
    };
    txtTitle.focus();
    initAddNewBook();

};


