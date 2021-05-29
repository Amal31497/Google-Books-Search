import React, {} from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './style.css'


const ResultsBox = React.memo(props => {
    

    return (
        <Card id="resultsBox" style={{paddingTop:"20px"}}>
            <Card.Title><h3>Results</h3></Card.Title>
            <Card.Body>
                {
                    (props.activated === true && props.books.data)?
                    props.books.data.items.map(book => {
                    return (

                        <Row style={{ justifyContent: "center", marginTop:"10px", marginBottom:"10px" }}>
                            <Card style={{ width: "80rem", padding:"30px", borderWidth:"4px" }}>
                                <Row style={{marginBottom:"2px"}}>
                                    <Col xs={12} md={8} lg={8} style={{}}>
                                        <Col style={{float:"left", textAlign:"left"}}>
                                            <h4><strong>{book.volumeInfo.title}</strong></h4>
                                            <p><strong>{book.volumeInfo.subtitle}</strong></p>
                                            <hr/>
                                            <p>Written by : {book.volumeInfo.authors[0]}</p>
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
                                            href={book.volumeInfo.infoLink} 
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
                                                backgroundImage: "linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%)",
                                                transition: ".4s",
                                                }}
                                            
                                            >
                                        Save
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={5} lg={4} >
                                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} style={{ width: "15.5rem", height: "18.5rem", float:"left"}} />
                                    </Col>
                                    <Col xs={12} md={7} lg={8}>
                                        <p style={{lineHeight:"2.3rem", display:"flex", textAlign:"left"}}><span><h1 style={{fontFamily:"Cinzel Decorative, cursive", fontSize:"2rem"}}>{book.volumeInfo.description.split("")[0]}</h1></span>{book.volumeInfo.description.split("").splice(1,book.volumeInfo.description.split("").length).join("")}</p>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>

                    )}) : "No matches"
                }
            </Card.Body>
        </Card>
    )
}) 

export default ResultsBox;