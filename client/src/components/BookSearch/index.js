import React, { useState } from 'react';
import { Card, Button, InputGroup } from 'react-bootstrap';
import API from '../../../utils/API'
import './style.css';

function BookSearch(props) {

    const [search, setSearch] = useState("")

    const searchBook = (search){
        
    }

    return (
        <Card id="searchBox" style={{justifyContent:"space-evenly", alignItems:'center'}}>
            <Card.Title style={{width:'80%'}}>Book Search</Card.Title>
            <input style={{width:'80%'}} placeholder="Look for your favorite book!"/>
            <Button style={{width:'10%'}}>Search</Button>
        </Card>
    )
}

export default BookSearch;