import React, { Fragment } from "react";
import {
    Row,
    Col,
    Card,
    Button,
    Table,
    Badge,
    Dropdown,
    ListGroup,
    ProgressBar,
} from "react-bootstrap";


import { Link } from "react-router-dom";

function WaiterDashBoard() {
    return (
        <div>
            <div className="row">
                <div className="" style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center", marginLeft: "auto", marginRight: "auto" }}>
                    <Card className="text-white bg-info" style={{ margin: "5px" }}>
                        <Card.Header>
                            <Card.Title className="text-white">
                                Money On Hand
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" mb-0" style={{ textAlign: "center" }}>
                            <Card.Text>
                                <span><h1>0</h1>birr</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="text-white bg-success" style={{ margin: "5px" }}>
                        <Card.Header>
                            <Card.Title className="text-white">
                                Food Pending
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" mb-0" style={{ textAlign: "center" }}>
                            <Card.Text>
                                <span><h1>0</h1></span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="text-white bg-success" style={{ margin: "5px" }}>
                        <Card.Header>
                            <Card.Title className="text-white">
                                Beer & Drink
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" mb-0" style={{ textAlign: "center" }}>
                            <Card.Text>
                                <span><h1>0</h1></span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="text-white bg-warning" style={{ margin: "5px" }}>
                        <Card.Header>
                            <Card.Title className="text-white">
                                Order Pending
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" mb-0" style={{ textAlign: "center" }}>
                            <Card.Text>
                                <span><h1>0</h1></span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>



                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Summary</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive="md">
                                <thead>
                                    <tr>

                                        <th>
                                            <strong>Item</strong>
                                        </th>
                                        <th>
                                            <strong>Qyt</strong>
                                        </th>
                                        <th>
                                            <strong>Unit Price</strong>
                                        </th>
                                        <th>
                                            <strong>Total price</strong>
                                        </th>
                                        <th>
                                            <strong>Action</strong>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* Use .map to show the list */}
                                    <tr>

                                        <td>
                                            <strong>Habesha beer</strong>
                                        </td>
                                        <td>
                                            2
                                        </td>
                                        <td>25</td>
                                        <td>50</td>

                                        <td>
                                            <div className="d-flex">

                                                <Link
                                                    href="#"
                                                    className="btn btn-danger shadow btn-xs sharp"

                                                >
                                                    <i className="fa fa-trash"></i>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </Table>
                            <hr style={{ border: "4px solid" }} />

                            <Table style={{ maxWidth: "10px" }}>
                                <strong>
                                <tbody>
                                    <tr>
                                        <td>Summary:</td>
                                        <td>120</td>
                                    </tr>
                                    <tr>
                                        <td>Vat:</td>
                                        <td>18%</td>
                                    </tr>
                                    <tr>
                                        <td>Total:</td>
                                        <td>138</td>
                                    </tr>
                                </tbody>
                                </strong>
                            </Table>
                            <hr style={{ border: "4px solid" }} />
                            <Button className="btn btn-success">Submit Order</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>

            <div className="main" style={{ display: "flex", width: "100%" }}>
                <ListGroup className="mb-4" id="list-tab" style={{width: "100%", flex: "0.2"}}>
                    <ListGroup.Item action href="#alchol">
                        Alcohol
                    </ListGroup.Item>
                    <ListGroup.Item action href="#beer">
                        Beer
                    </ListGroup.Item>
                    <ListGroup.Item action href="#burger">
                        Burger
                    </ListGroup.Item>
                    <ListGroup.Item action href="#draft">
                        Draft
                    </ListGroup.Item>
                </ListGroup>

                <div className="products" style={{ marginLeft: "80px", objectFit: "contain", flex: "0.8", flexWrap: "wrap", display: "flex",height: "100%", width: "100%"}}>
                    <Card className="text-white bg-dark" style={{ margin: "5px", maxHeight: "300px" }}>
                        <Card.Header>
                            <Card.Title className="text-white">
                                Habesha Beer
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" mb-0" style={{ textAlign: "center" }}>
                            <Card.Text>
                                <h1><span className="text-white">25<sub style={{fontSize: "10px"}}>birr</sub></span></h1>
                                
                            </Card.Text>
                            <Button className="btn btn-secondary" style={{width: "100%"}}>Add</Button>
                        </Card.Body>
                    </Card>
                                
                </div>
            </div>
        </div>
    )
}

export default WaiterDashBoard
