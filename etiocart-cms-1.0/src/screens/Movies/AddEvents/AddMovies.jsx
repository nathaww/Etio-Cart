import React from "react";
import './AddMovies.css'
import { Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import data from "../../../mock-data.json"
import { useState } from "react";

const AddMovie = () => {

    const userData = {

        movieTitle: '',
        movieDuration: '',
        movieGener: '',
        movieDescription: '',
        movieDate: '',
        movieTrailerLink: '',
        movieStartTime: '',
        movieEndTime: '',
        cinemaName: '',
        cinemaRoom: '',
        Location: '',
        movieType: '',
        moviePrice: '',
        movieDiscountPrice: '',
        moviePoints: '',
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

        <div className="addmovie">


            <div className="movie-banner">
                <h5 className="fw-bold text-center">Movie Banner</h5>
                <div className="movie-upload row align-items-center">

                    <div className="image-box col">
                        <button type="button" className="image-movie">Add Image</button>
                    </div>
                </div>

                <form className="input-form row">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Movie Title"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="movieTitle"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Movie Duration"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="movieDuration"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Movie Gener"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="movieGener"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Movie Description"
                        className="mb-3 form-field col-lg-12"
                    >
                        <Form.Control type="text"
                            name="movieDescription"
                            required="required"
                            onChange={handleAddFormChange}
                        />

                        <div class="image-upload row">
                            <p class="fs-5 text-white mb-3 text-center">Actor/Actress</p>
                            <div class="image-box col">
                                <button type="button" class="image-actor" id="browseactor1">Browse</button>
                            </div>
                            <div class="image-box col">
                                <button type="button" class="image-actor" id="browseactor2">Browse</button>
                            </div>
                            <div class="image-box col">
                                <button type="button" class="image-actor" id="browseactor3">Browse</button>
                            </div>
                        </div>

                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Movie Date"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="date"
                            name="movieDate"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Movie Trailer"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="movieTrailerLink"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Start Time"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="time"
                            name="movieStartTime"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="End time"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="time"
                            name="movieEndTime"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Cinema Name"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="cinemaName"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Cinema Room"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="cinemaRoom"
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
                            name="Location"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Movie Type"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="movieType"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Movie Price"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="moviePrice"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Movie Discount Price"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="movieDiscountPrice"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="movie Points"
                        className="mb-3 form-field col-lg-6"
                    >
                        <Form.Control type="text"
                            name="moviePoints"
                            required="required"
                            onChange={handleAddFormChange}
                        />
                    </FloatingLabel>

                    <button type="submit" className="btn btn-primary btn-upload">Upload</button>
                    <button type="clear" className="btn btn-outline btn-upload">Clear</button>
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
                                    <th scope="col">Title</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Gener</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Trailer</th>
                                    <th scope="col">Start Time</th>
                                    <th scope="col">End Time</th>
                                    <th scope="col">Cinema</th>
                                    <th scope="col">Cinema Room</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Discount Price</th>
                                    <th scope="col">Points</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{addFormData.movieTitle}</td>
                                    <td>{addFormData.movieDuration}</td>
                                    <td>{addFormData.movieGener}</td>
                                    <td>{addFormData.movieDescription}</td>
                                    <td>{addFormData.movieDate}</td>
                                    <td>{addFormData.movieTrailerLink}</td>
                                    <td>{addFormData.movieStartTime}</td>
                                    <td>{addFormData.movieEndTime}</td>
                                    <td>{addFormData.cinemaName}</td>
                                    <td>{addFormData.cinemaRoom}</td>
                                    <td>{addFormData.Location}</td>
                                    <td>{addFormData.movieType}</td>
                                    <td>{addFormData.moviePrice}</td>
                                    <td>{addFormData.movieDiscountPrice}</td>
                                    <td>{addFormData.moviePoints}</td>
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
export default AddMovie;