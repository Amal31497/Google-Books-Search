import React from 'react';
import Navbar from '../components/Navbar';
import SearchTitle from '../components/SearchTitle';
import BookSearch from '../components/BookSearch';
import ResultsBox from '../components/ResultsBox';


function Search() {

    return (
        <div>
            <Navbar />
            <SearchTitle />
            <BookSearch />
            <ResultsBox />
        </div>
    )
}

module.exports = Search;