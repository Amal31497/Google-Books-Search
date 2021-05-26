import React, {useState} from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import './style.css'


function ResultsBox(){

    const [books, setBooks] = useState([])


    return(
        <Card id="resultsBox">
            <Card.Title>Results</Card.Title>
            <Card.Body>
                TODO
            </Card.Body>
        </Card>
    )
}

export default ResultsBox;