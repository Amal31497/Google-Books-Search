import React from 'react';
import { Card } from 'react-bootstrap';
import './style.css';

function SearchTitle(){

    return(
        <Card id="titleBox">
            <Card.Body>
                <h1>(React) Google Books Search</h1>
                <h4>Search for and save books of interest</h4>
            </Card.Body>
        </Card>
    )
}

export default SearchTitle;