import React, {useState} from 'react';
import { Card, Button, Image } from 'react-bootstrap';

function ResultsBox(){

    const [books, setBooks] = useState([])


    return(
        <Card>
            <Card.Title>Results</Card.Title>
            <Card.Body>
                TODO
            </Card.Body>
        </Card>
    )
}

module.exports = ResultsBox;