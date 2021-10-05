import React, { Fragment } from "react";
import { Row, Card, Col, Button, Nav } from "react-bootstrap";
import Element from "../../Forms/Element/Element"


const IssueItems = () => {
	
    return (
       <Fragment>
           <h1>Issue Items</h1>
            <div className="row">
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group">
                               <p>Date of Receiving</p>
                              <input
                                 type="date"
                                 className="form-control input-default "
                                 placeholder="Date of Receiving"
                              />
                           </div>
                           <div className="form-group">
                            <p>GRV number</p>
                              <input
                                 type="text"
                                 className="form-control input-default"
                                 placeholder="GRV number"
                              />
                           </div>
                           <p>Select Barman Name</p>
                              <select className="form-control">
                                 <option>Option 1</option>
                                 <option>Option 2</option>
                                 <option>Option 3</option>
                              </select>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group">
                               <p>Reference Number</p>
                              <input
                                 type="text"
                                 className="form-control input-default "
                                 placeholder="Reference Number"
                              />
                           </div>
                           <div className="form-group">
                               <p>Remark</p>
                           <textarea
                                 className="form-control"
                                 rows="4"
                                 id="comment"
                                 placeholder="Remark..."
                              ></textarea>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>

            </div> 


            <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">List Of Category Information</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-row">
                              <div className="col-sm-6">
                                  <p>Select Item Name</p>
                              <select className="form-control">
                                 <option>Option 1</option>
                                 <option>Option 2</option>
                                 <option>Option 3</option>
                              </select>
                              </div>
                              <div className="col-sm-6 mt-2 mt-sm-0">
                                  <p>Quantity</p>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Qrt number..."
                                 />
                              </div>
                           </div>

                        </form>
                     </div>
                  </div>
               </div>
                           <Button variant="secondary btn-lg" style={{bottom:"1px", marginBottom: "20px", width: "100%"}}>Issue Now</Button>


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

       </Fragment>
    )
}

export default IssueItems