import React, { useState } from 'react';
import SearchTitle from '../components/SearchTitle';
import BookSearch from '../components/BookSearch';
import ResultsBox from '../components/ResultsBox';
import API from '../utils/API';



function Search() {

    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
    const [searchActivated, setSearchActivated] = useState(false);

    function handleBookSearch(event){
        setSearch(event.target.value)
    }

    function handleInputSubmit(event){
        event.preventDefault();
        setSearchActivated(true)
        API.search(search)
        .then(res => setBooks(res))
        .catch(err => console.log(err))

    }

    return (
        <div>
            <SearchTitle />
            <BookSearch
                search={search}
                handleBookSearch = {handleBookSearch}
                handleInputSubmit = {handleInputSubmit}
            />
            <ResultsBox
                activated={searchActivated}
                books={books}
            />
        </div>   
    )
}

export default Search;