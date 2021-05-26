import React, { useState } from 'react';
import { Card, Button, InputGroup } from 'react-bootstrap';

function BookSearch(props) {

    const [search, setSearch] = useState("")



    return (
        <Card>
            <Card.Title>Book Search</Card.Title>
            <InputGroup.Text id="inputGroup-sizing-sm" placeholder="Search for your favorite books!"></InputGroup.Text>
            <Button>Search</Button>
        </Card>
    )
}

module.exports = BookSearch;