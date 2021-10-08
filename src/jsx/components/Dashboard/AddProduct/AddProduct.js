import React from 'react'
import {
    Row,
    Col,
    Card,
    Table,
    Badge,
    Button,
    Dropdown,
    ProgressBar,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function AddProduct() {
    return (
        <div style={{display: "flex"}}>
            <div className="card col-sm-3 mr-2">
                {/* <div className="card-header">
                    <h4 className="card-title">List Of Category Information</h4>
                </div> */}
                <div className="card-body " style={{width: "100%"}}>
                    <div className="basic-form" >
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <div style={{width: "100%"}}>
                                    <p>Category</p>
                                    <select className="form-control">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>


                                <div style={{width: "100%"}} className="mt-5">
                                    <p>Item Name</p>
                                    <input type="text" placeholder="Enter Item Name" className="form-control"/>
                                </div>

                                <div style={{width: "100%"}} className="mt-5">
                                    <p>Description</p>
                                    <input type="text" placeholder="Description..." className="form-control"/>
                                </div>


                                <div style={{width: "100%"}} className="mt-5">
                                    <p>Item unit of Measurment</p>
                                    <input type="text" placeholder="Enter unit of measurment" className="form-control"/>
                                </div>


                                <div style={{width: "100%"}} className="mt-5">
                                    <p>Item Price</p>
                                    <input type="text" placeholder="Enter item price" className="form-control"/>
                                </div>
                                
                            </div>
                            <Button variant="success mt-4" style={{width: "100%"}}>Register</Button>

                        </form>
                    </div>
                </div>
            </div>



            <Table
                responsive="sm"
                className="col-sm-6"
                striped
                bordered
                className="verticle-middle"
            >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Item Info</th>
                        <th scope="col">Item Category</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#</td>
                        <td>BlackLabel</td>
                        <td>BlackLabelBottle</td>
                        <td>No Category</td>

                        <td>
                            <span>
                                <Link
                                    href="#"
                                    className="mr-4"
                                    title="Edit"
                                >
                                    <i className="fa fa-pencil color-muted"></i>{" "}
                                </Link>
                                <Link href="#" title="Close">
                                    <i className="fa fa-close color-danger"></i>
                                </Link>
                            </span>
                        </td>
                    </tr>


                </tbody>
            </Table>
        </div>
    )
}

export default AddProduct
