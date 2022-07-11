import React from 'react'
import './Requests.css'
import { FloatingLabel } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

const Requests = () => {

    return (


        <div className='Requests'>

            <div className='notif-card'>
              
                <h4><i className="fas fa-info-circle me-2" /><span>4</span> New request for bus seat</h4>
                <form action="" className='input-form row'>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Departure"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="departure"
                            required="required"
                            disabled="true"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Destination"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="departure"
                            required="required"
                            disabled="true"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Price"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="departure"
                            required="required"
                            disabled="true"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Seats"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="departure"
                            required="required"
                            disabled="true"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Date"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="departure"
                            required="required"
                            disabled="true"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Bus Name"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="departure"
                            required="required"
                            disabled="true"
                        />
                    </FloatingLabel>
                    <hr />
                    <div className="d-flex justify-content-end">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Enter seat number here before approval!"
                            className="mb-3 form-field col-lg-6"
                        >
                            <Form.Control type="text"
                                name="departure"
                                required="required"
                            />
                        </FloatingLabel>
                        <button className="btn btn-green">Approve</button>
                        <button className="btn btn-red">Deny</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Requests
