import React from 'react'
import './MovieChecker.css'
import { Form } from 'react-bootstrap'
import { FloatingLabel } from 'react-bootstrap'
import { useState } from 'react'

const CheckerForMovie = () => {

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
                        label="Title"
                        className="mb-3 form-field col-lg-12"
                    >
                        <Form.Control type="text"
                            name="title"
                            required="required"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Ticket Type"
                        className="mb-3 form-field col-lg-12"
                    >
                        <Form.Control type="text"
                            name="link"
                            required="required"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Price"
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

export default CheckerForMovie