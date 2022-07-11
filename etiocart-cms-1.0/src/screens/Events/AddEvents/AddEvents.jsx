import React from "react";
import './AddEvents.css'
import { Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import data from "../../../mock-data.json"
import { useState } from "react";
import { Modal } from "bootstrap";


const AddEvents = () => {


    const [events, setEvents] = useState(data);
    // Axios

    const userData = {

        eventTitle: '',
        eventOrganizer: '',
        eventTime: '',
        eventDate: '',
        eventLink: '',
        eventType: '',
        eventTicketAmount: '',
        eventDescription: '',
        eventLocation: '',
        eventPrice: '',
        eventDiscountPrice: '',
        eventTicketType: '',
        eventPoints: '',
    };

    const [addFormData, setAddFormData] = useState(userData);
    const [submitData, setSubmitData] = useState(addFormData);

    const handleAddFormChange = (event) => {

        event.preventDefault();
        var { name, value } = event.target;
        setAddFormData({ ...addFormData, [name]: value })

    };

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    const [img, setImg] = useState();
    function handleChange1(e) {
        console.log(e.target.files);
        setImg(URL.createObjectURL(e.target.files[0]));
    };

    const [back, setBack] = useState();
    function handleChange2(e) {
        console.log(e.target.files);
        setBack(URL.createObjectURL(e.target.files[0]));
    };

    // const onsubmit = (event) => {

    //     event.preventDefault();
    //     setSubmitData({ ...addFormData });

    // }

    return (


        <div className="addevent">


            <div className="event-banner">

           

                <div class="row align-items-center event-upload">
                <h1 className="fs-4 text-center py-2">Event Images</h1>
                    <div class="col">
                        <img src={file} className='image-event mb-2' />
                        <input type="file" className="img-input" onChange={handleChange} />
                    </div>
                    <div class="col">
                        <img src={img} className='image-event mb-2'/>
                        <input type="file" className="img-input" onChange={handleChange1} />
                    </div>
                    <div class="col">
                        <img src={back} className='image-event mb-2' />
                        <input type="file" className="img-input" onChange={handleChange2} />
                    </div>
                </div>

                <form >

                    <div className="input-form row">
                        <h1 className="fs-4 text-center">Event Detail</h1>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Event Title"
                            className="mb-3 form-field col-lg-6"
                        >
                            <Form.Control type="text"
                                name="eventTitle"
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingSelect" label="Event Organizer" className="mb-3 form-field col-lg-4">
                            <Form.Select aria-label="Floating label select"
                                name="eventOrganizer"
                                required="required"
                                onChange={handleAddFormChange}>
                                <option>Select if any or Add</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>

                        </FloatingLabel>
                        <button className="col-lg-3 btn btn-green mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add</button>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Event Start Date"
                            className="mb-3 form-field col-lg-6"
                        >
                            <Form.Control type="Date"
                                name="eventStartDate"
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Event End Date"
                            className="mb-3 form-field col-lg-6"
                        >
                            <Form.Control type="Date"
                                name="eventEndDate"
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Event Start Time"
                            className="mb-3 form-field col-lg-6"
                        >
                            <Form.Control type="time"
                                name="eventStartTime"
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Event End Time"
                            className="mb-3 form-field col-lg-6"
                        >
                            <Form.Control type="time"
                                name="eventEndTime"
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Event Video Link"
                            className="mb-3 form-field col-lg-12"
                        >
                            <Form.Control type="text"
                                name="eventLink"
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Event Type"
                            className="mb-3 form-field col-lg-6"
                        >
                            <Form.Control type="text"
                                name="eventType"
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Event Location"
                            className="mb-3 form-field col-lg-6"
                        >
                            <Form.Control type="text"
                                name="eventLocation"
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Event Description"
                            className="mb-3 form-field col-lg-12"
                        >
                            <Form.Control type="text area"
                                name="eventDescription"
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </FloatingLabel>

                    </div>


                    <div className="input-form row align-middle">
                        <h1 className="fs-4 text-center">Ticket Detail</h1>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Available Tickets"
                            className="mb-3 form-field col-lg-6"
                        >
                            <Form.Control type="text"
                                name="eventTicketAmount"
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Ticket Type"
                            className="mb-3 form-field col-lg-6"
                        >
                            <Form.Control type="text"
                                name="eventTicketType"
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Price"
                            className="mb-3 form-field col-lg-6"
                        >
                            <Form.Control type="text"
                                name="eventPrice"
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
                                name="eventDiscountPrice"
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="E-Coin Cost"
                            className="mb-3 form-field col-lg-6"
                        >
                            <Form.Control type="text"
                                name="eventPoints"
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="E-Coin Reward"
                            className="mb-3 form-field col-lg-6"
                        >
                            <Form.Control type="text"
                                name="eventLocation"
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </FloatingLabel>

                        <button type="submit" className="btn btn-green">Upload</button>
                        <button type="clear" className="btn  btn-red">Clear</button>
                    </div>
                </form>
            </div>



            <div className="editdeleteevent">

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
                                    <th scope="col">Title</th>
                                    <th scope="col">Organizer</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Link</th>
                                    <th scope="col">Event Type</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Discount</th>
                                    <th scope="col">Ticket Type</th>
                                    <th scope="col">Points</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{addFormData.eventTitle}</td>
                                    <td>{addFormData.eventOrganizer}</td>
                                    <td>{addFormData.eventTime}</td>
                                    <td>{addFormData.eventDate}</td>
                                    <td>{addFormData.eventLink}</td>
                                    <td>{addFormData.eventType}</td>
                                    <td>{addFormData.eventTicketAmount}</td>
                                    <td>{addFormData.eventDescription}</td>
                                    <td>{addFormData.eventLocation}</td>
                                    <td>{addFormData.eventPrice}</td>
                                    <td>{addFormData.eventDiscountPrice}</td>
                                    <td>{addFormData.eventTicketType}</td>
                                    <td>{addFormData.eventPoints}</td>
                                    <td><button type="button" className="btn btn-outline" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fas fa-pen"></i></button></td>
                                    <td><button className="btn btn-outline"><i class="fas fa-user-times"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>




            </div>


            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <h2 className="font-bold fs-5 my-3">Add a new event organizer</h2>
                        <div class="modal-body">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Event Organizer"
                                className="mb-3 form-field col-lg-12"
                            >
                                <Form.Control type="text"
                                    name="eventOrganizer"
                                    required="required"
                                    onChange={handleAddFormChange}
                                />
                            </FloatingLabel>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success text-green-800">Add</button>
                            <button type="button" class="btn btn-danger text-red-800" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    );
}
export default AddEvents;