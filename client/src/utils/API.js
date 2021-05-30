import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyAyS5JORNcOvvGYQeJgQT87aWIcOY04ad4&maxResults=5";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // ------ Search Page ------

    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    },

    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },

    // ------ Saved Page ------

    getBooks: function () {
        return axios.get("/api/books");
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
};