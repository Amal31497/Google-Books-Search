import React from 'react';
import { Card } from 'react-bootstrap';

function SearchTitle(){

    return(
        <Card>
            <Card.Body>
                <h1>(React) Google Books Search</h1>
                <p>Search for and save books of interest</p>
            </Card.Body>
        </Card>
    )
}

module.exports = SearchTitle;