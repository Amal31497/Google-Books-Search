import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import API from "../../utils/API"
import { AiFillDelete } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';


const SavedBooks = (props) => {

    const history = useHistory();

    const [books, setBooks] = useState([])

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res => setBooks(res.data))
            .catch(err => console.log(err));
    };


    const deleteBook = (bookId) => {
        API.deleteBook(bookId)
            .then(res => {
                console.log(res)
                loadBooks()
                history.push("/saved")
            })
            .catch(err => console.log(err))
    }


    return (
        <Card id="resultsBox" style={{paddingTop:"20px"}}>
            <Card.Title><h3>Results</h3></Card.Title>
            <Card.Body>
                {
                    (books)?
                    books.map(book => {
                    return (

                        <Row style={{ justifyContent: "center", marginTop:"10px", marginBottom:"10px" }}>
                            <Card style={{ width: "80rem", padding:"30px", borderWidth:"4px" }}>
                                <Row style={{marginBottom:"2px"}}>
                                    <Col xs={12} md={8} lg={8} style={{}}>
                                        <Col style={{float:"left", textAlign:"left"}}>
                                            <h4><strong>{book.title}</strong></h4>
                                            <hr/>
                                            <p>Written by : </p>
                                        </Col>
                                    </Col>
                                    <Col xs={12} md={4} lg={4} >
                                        <Button 
                                            style={{
                                                float:"right", 
                                                marginLeft:"10px", 
                                                width:"8rem", 
                                                display: "inline-block",
                                                padding: "7px 20px",
                                                borderRadius: "25px",
                                                textDecoration: "none",
                                                color: "#FFF",
                                                backgroundImage: "-webkit-linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%)",
                                                backgroundImage: "linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%)",
                                                transition: ".4s"
                                            }}
                                            href={book.link} 
                                            target="blank"
                                        >View
                                        </Button>
                                        <Button  
                                            style={{
                                                float:"right", 
                                                width:"8rem", 
                                                display: "inline-block",
                                                padding: "7px 20px",
                                                borderRadius: "25px",
                                                textDecoration: "none",
                                                color: "#FFF",
                                                backgroundImage: "-webkit-linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%)",
                                                backgroundImage: "linear-gradient(45deg, #D31027 0%, #EA384D  51%, #D31027  100%)",
                                                transition: ".4s",
                                                }}
                                            onClick={() => deleteBook(book._id)}
                                            >
                                        Delete <AiFillDelete />
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={5} lg={4} >
                                        <img  src={book.image} alt={book.title} style={{ width: "15.5rem", height: "18.5rem", float:"left"}} />
                                    </Col>
                                    <Col xs={12} md={7} lg={8}>
                                        <p style={{lineHeight:"2.3rem", display:"flex", textAlign:"left"}}><span><h1 style={{fontFamily:"Cinzel Decorative, cursive", fontSize:"2rem"}}>{book.description.split("")[0]}</h1></span>{book.description.split("").splice(1,book.description.split("").length).join("")}</p>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>

                    )}) : "No matches"
                }
            </Card.Body>
        </Card>
    )
}

export default SavedBooks;