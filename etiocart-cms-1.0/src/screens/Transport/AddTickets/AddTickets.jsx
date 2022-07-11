import React from "react";
import './AddTickets.css'
import { Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import { useState } from "react";

const AddTicket = () => {

    const userData = {

        departure: '',
        destination: '',
        date: '',
        time: '',
        busName: '',
        price: '',
        discountPrice:'',
        station:'',
        location:'',
        points: '',
    };

    const [addFormData, setAddFormData] = useState(userData);
    const [submitData, setSubmitData] = useState(addFormData);

    const handleAddFormChange = (event) => {

        event.preventDefault();
        var { name, value } = event.target;
        setAddFormData({ ...addFormData, [name]: value })

    };

    const onsubmit = (event) => {

        event.preventDefault();
        setSubmitData({ ...addFormData });

    }

    return (

        <div className="addticket">


            <div className="ticket-banner">
            
                <form className="input-form row">
                <h1 className="fs-4 text-center">Transport Detail</h1>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Departure"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="departure"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Destination"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="destination"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Date"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="date"
                            name="date"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Time"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="time"
                            name="time"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Bus Name"
                        className="mb-3 form-field col-lg-4"
                    >
                        <Form.Control type="text"
                            name="busName"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <button className="col-lg-3 btn btn-green mb-3">Add</button>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Price"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="price"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Discount Price"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="discountPrice"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Station"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="station"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Location"
                        className="mb-3 form-field col-lg-12"
                    >
                        <Form.Control type="text"
                            name="location"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="E-Coin Value"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="E-Coin"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="E-Coin"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="E-Coin"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>

                    <button type="submit" className="btn btn-green">Upload</button>
                    <button type="clear" className="btn btn-red">Clear</button>
                </form>
            </div>



            <div className="editdeletemovie">

                <div className="main">
                    <div className="search">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <select className="form-select" id="state" required>
                                <option value="">Sort by..</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form><br></br>
                    </div>

                    <div className="user">

                        <table className="table table-striped table-hover ">
                            <thead>
                                <tr>
                                    <th scope="col">Departure</th>
                                    <th scope="col">Destination</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Bus Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Discount Price</th>
                                    <th scope="col">Station</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Points</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{addFormData.departure}</td>
                                    <td>{addFormData.destination}</td>
                                    <td>{addFormData.date}</td>
                                    <td>{addFormData.time}</td>
                                    <td>{addFormData.busName}</td>
                                    <td>{addFormData.price}</td>
                                    <td>{addFormData.discountPrice}</td>
                                    <td>{addFormData.station}</td>
                                    <td>{addFormData.location}</td>
                                    <td>{addFormData.points}</td>
                                    <td><button type="button" className="btn btn-outline" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fas fa-pen"></i></button></td>
                                    <td><button className="btn btn-outline"><i class="fas fa-user-times"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>




            </div>

        </div>


    );
}
export default AddTicket;