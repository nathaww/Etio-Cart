import React from 'react'
import './Profile.css'
import { Form } from 'react-bootstrap'

const Profile = () => {

    const userData = {

        name: 'Nathan Solomon',
        gender: 'Male',
        email: 'solomonnathan065@gmail.com',
        role: 'Super Admin'
    }
    return (

        <div className='profile'>

            <div class="container">

                <div class="col-md-6 profile-img" >
                    <img className='img-thumbnail' src="https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
                        class="img-fluid" alt=""/>
                    <button class="btn btn-profile-change">Change profile</button>
                </div>

                <div class="card-body">

                    <h5 class="card-title fs-4">Profile</h5>
                    <p class="card-text"> <big>Name</big>
                        <div class="form-field col-lg-12">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" className='acc-input-text' placeholder={userData.name} />
                            </Form.Group>
                        </div>
                    </p>
                    <p class="card-text"><big>Gender</big>
                    <div class="form-field col-lg-12">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" className='acc-input-text' placeholder={userData.gender} disabled />
                            </Form.Group>
                        </div>
                    </p>
                    <p class="card-text"><big>E-mail</big>
                    <div class="form-field col-lg-12">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" className='acc-input-text' placeholder={userData.email} />
                            </Form.Group>
                        </div>
                    </p>
                    <p class="card-text"><big>Role</big>
                    <div class="form-field col-lg-12">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" className='acc-input-text' placeholder={userData.role} disabled/>
                            </Form.Group>
                        </div>
                    </p>
                    <button type="button" class="btn btn-primary btn-req-acc">Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
