import React from 'react'
import './Advert.css'
import { Form } from 'react-bootstrap'
import { FloatingLabel } from 'react-bootstrap'
import { useState } from 'react'

const Advert = () => {

    const userData = {

        expireDate: '',
        advertWhere: '',
        title: '',
        link: '',
    };

    const [addFormData, setAddFormData] = useState(userData);

    const handleAddFormChange = (event) => {

        event.preventDefault();
        var { name, value } = event.target;
        setAddFormData({ ...addFormData, [name]: value })

    };

    return (
        <div className='advert'>

            <div className="image-upload row">

                <p className="fs-4 mb-3 text-center">Advert</p>
                <div className="image-box col">
                    <Form.Group controlId="formFileLg" className="mb-3 upload-form">
                        <Form.Label className="acc-label">Image or Video</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </div>

            </div>

            <div className="advert-upload row">

                <form className="input-form row">
                    <FloatingLabel
                        label="Expire Date"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="Date"
                            name="expireDate"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Select where to advertise"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Select
                            aria-label="Floating label select example"
                            name='advertWhere'
                            onChange={handleAddFormChange}>
                            <option>Open this select menu</option>
                            <option value="For you">For you</option>
                            <option value="Moments">Moments</option>
                        </Form.Select>
                    </FloatingLabel>
                    <FloatingLabel
                        label="Title"
                        className="mb-3 form-field col-lg-12"
                    >
                        <Form.Control type="text"
                            name="title"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Facebook"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="link"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Instagram"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="link"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Twitter"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="link"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Youtube"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="link"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Website"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="link"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Telegram"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="link"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <button type="button" className='btn btn-green'>Upload</button>
                    <button type='button' className='btn btn-red'>Clear</button>
                </form>


            </div>



            <div className="transaction">
                <h3>Adverts</h3><br />
                <table className="table table-striped table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Expire Date</th>
                            <th scope="col">Descritpion</th>
                            <th scope="col">Link</th>
                            <th scope="col">For</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{addFormData.expireDate}</td>
                            <td>{addFormData.advertWhere}</td>
                            <td>{addFormData.title}</td>
                            <td>{addFormData.link}</td>
                            <td><button type="button" className="btn btn-outline"><i className="fas fa-pen"></i></button></td>
                            <td><button type="button" className="btn btn-outline"><i className="fas fa-user-times"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>



        </div>
    )
}

export default Advert
