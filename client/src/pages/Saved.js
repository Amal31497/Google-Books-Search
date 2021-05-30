import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import SearchTitle from '../components/SearchTitle';
import SavedBooks from '../components/SavedBooks';


function Saved() {


    return (
        <div>
            <SearchTitle />
            <SavedBooks />
        </div>
    )
}

export default Saved;