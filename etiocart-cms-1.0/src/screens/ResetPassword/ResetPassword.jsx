import React from 'react'
import { Link } from 'react-router-dom'
import './ResetPassword.css'
import { FloatingLabel } from 'react-bootstrap'
import { Form } from 'react-bootstrap'


const ResetPassword = () => {
    return (


        <div className='setting'>
            <form className="setting-input-form row">
                <h2 className='text-center mb-5'>Reset Password</h2>
                <FloatingLabel
                    label="Email address/Phone Number"
                    className="col-lg-12"
                >
                    <Form.Control
                        type="email"
                        name='resetEmail'
                        placeholder="name@example.com" />
                </FloatingLabel>

                <button className="btn btn-setting-reset">Reset</button>

            </form>

        </div>
    )
}

export default ResetPassword
