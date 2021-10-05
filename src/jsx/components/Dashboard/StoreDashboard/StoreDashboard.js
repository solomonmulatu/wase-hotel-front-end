import React, { Fragment } from "react";
import { Row, Card, Col, Button, Nav } from "react-bootstrap";
import Element from "../../Forms/Element/Element"

const StoreDashboard = () => {
    return (
    <div className="row">
                    <div className="" style={{display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center", marginLeft:"auto", marginRight:"auto"}}>
                    <Card className="text-white bg-danger" style={{margin: "5px"}}>
                        <Card.Header>
                            <Card.Title className="text-white">
                                Black Label Bottle
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" mb-0" style={{textAlign: "center"}}>
                            <Card.Text>
                                <span><h1>0</h1> Avilable</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>


                    <Card className="text-white bg-success" style={{margin: "5px"}}>
                        <Card.Header>
                            <Card.Title className="text-white">
                                Habesha beer
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" mb-0" style={{textAlign: "center"}}>
                            <Card.Text>
                                <span><h1>24</h1> Avilable</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>



                    <Card className="text-white bg-danger" style={{margin: "5px"}}>
                        <Card.Header>
                            <Card.Title className="text-white">
                                Castel beer
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" mb-0" style={{textAlign: "center"}}>
                            <Card.Text>
                                <span><h1>0</h1> Avilable</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>


                    <Card className="text-white bg-danger" style={{margin: "5px"}}>
                        <Card.Header>
                            <Card.Title className="text-white">
                                Malta drink
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" mb-0" style={{textAlign: "center"}}>
                            <Card.Text>
                                <span><h1>0</h1> Avilable</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
               
                    </div>
               </div>
    )
}

export default StoreDashboard