import React from 'react'
import './CustomerService.css'
import { Form } from 'react-bootstrap'



const Agent=() => {
    return (
    

        <div className='agent'>
            <div className="agent-input-form row">
                <h3>User Information</h3>
             <div className='agent-input'>
               <div className="agent-form-field col-lg-12">
                <Form.Group className="mb-3" controlId="agentForm.ControlInputUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control className='agent-input-text' type="name" placeholder="" />
                </Form.Group>
                </div>
                <div className="agent-form-field col-lg-12">
                <Form.Group className="mb-3" controlId="agentForm.ControlInputPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control className='agent-input-text' type="name" placeholder="" />
                </Form.Group>
                </div>
                <div className="agent-form-field col-lg-12">
                <Form.Group className="mb-3" controlId="agentForm.ControlInputDeparture">
                    <Form.Label>Departure</Form.Label>
                    <Form.Control className='agent-input-text' type="name" placeholder="" />
                </Form.Group>
                </div>
                <div className="agent-form-field col-lg-12">
                <Form.Group className="mb-3" controlId="agentForm.ControlInputDestination">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control className='agent-input-text' type="name" placeholder="" />
                </Form.Group>
                </div>
                <div className="agent-form-field col-lg-12">
                <Form.Group className="mb-3" controlId="agentForm.ControlInputDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control className='agent-input-text' type="name" placeholder="" />
                </Form.Group>
                </div>
                <div className="agent-form-field col-lg-12">
                <Form.Select aria-label="Default select example">
                    <option>Passengers</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </Form.Select>
                </div>
                <div className="agent-form-field col-lg-12">
                <Form.Select aria-label="Default select example">
                    <option>Bus Type</option>
                    <option value="1">Selam Bus</option>
                    <option value="2">Anbesa Bus</option>
                    <option value="3">Sheger Bus</option>
                </Form.Select>
                </div>
                <div className="agent-form-field col-lg-12">
                <Form.Group className="mb-3" controlId="agentForm.ControlInputDeparture">
                    <Form.Label>Total Price</Form.Label>
                    <Form.Control className='agent-input-text' disabled type="name" placeholder="00.00ETB" />
                </Form.Group>
                </div>
               </div>
            </div>
            
            <button type="button" className="btn btn-primary btn-upload-agent">Process</button>


        </div>
    )
}

export default Agent
