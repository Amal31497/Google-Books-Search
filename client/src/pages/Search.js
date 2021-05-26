import React from 'react';
import SearchTitle from '../components/SearchTitle';
import BookSearch from '../components/BookSearch';
import ResultsBox from '../components/ResultsBox';


function Search() {

    return (
        <div>
            <SearchTitle />
            <BookSearch />
            <ResultsBox />
        </div>
    )
}

export default Search;