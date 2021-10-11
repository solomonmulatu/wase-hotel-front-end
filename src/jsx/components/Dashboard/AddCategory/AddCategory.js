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
function AddCategory() {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Category Register</h4>
                </div>
                <div className="card-body">
                    <div className="basic-form" style={{ display: "flex" }}>
                        <div className="col-sm-4">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="form-row">
                                    <p>Category Name</p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Category Name..."
                                    />
                                </div>
                                <Button variant="success mt-4">Done</Button>
                            </form>
                        </div>
                        <div className="col-sm-7 mt-2 ml-5 mt-sm-0">
                            <Table
                                responsive="sm"
                                striped
                                bordered
                                className="verticle-middle"
                            >
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Category Name</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#</td>
                                        <td>
                                            BlackLabel
                                        </td>

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
                    </div>


                </div>
            </div>
        </div>

    )
}

export default AddCategory
