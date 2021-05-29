import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './style.css';


function BookSearch(props) {


    return (
        <Card id="searchBox" style = {{justifyContent:"space-evenly", alignItems:'center'}}>
            <Card.Title style = {{width:'80%'}}>Book Search</Card.Title>
            <input 
                style = {{width:'80%'}} 
                type = "text" 
                value = { props.search } 
                onChange = { props.handleBookSearch }
                placeholder ="Look for your favorite book!"  />
            <Button 
                style = {{width:'10%'}}
                onClick={ props.handleInputSubmit }
            >
            Search
            </Button>
        </Card>
    )
}

export default BookSearch;