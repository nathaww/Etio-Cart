import React from 'react'
import './TransportChecker.css'
import { Form } from 'react-bootstrap'
import { FloatingLabel } from 'react-bootstrap'
const CheckerForTransport = () => {

    return (
        <form className='checker'>

            <p className='fw-bold'>Enter A Ticket ID To Validate</p>
            <FloatingLabel
                label="Ticket ID"
                className="mb-3 form-field col-lg-6"
            >
                <Form.Control type="text"
                    name="link"
                />
            </FloatingLabel>

            <div class="checker-input row">

               
                    <FloatingLabel
                        label="Bus Name"
                        className="mb-3 form-field col-lg-12"
                    >
                        <Form.Control type="text"
                            name="title"
                            required="required"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Destination"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="link"
                            required="required"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Departure"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="link"
                            required="required"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Full Name"
                        className="mb-3 form-field col-lg-12"
                    >
                        <Form.Control type="text"
                            name="link"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Phone Number"
                        className="mb-3 form-field col-lg-12"
                    >
                        <Form.Control type="text"
                            name="link"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Ticket Number"
                        className="mb-3 form-field col-lg-12"
                    >
                        <Form.Control type="text"
                            name="link"
                        />
                    </FloatingLabel>

                    <button type="button" class="btn btn-primary btn-upload">Confirm</button>
             


            </div>


        </form>
    )
}

export default CheckerForTransport