import React from 'react'
import './Approval.css'

const Approval =()=> {
    return (
        
        <div className='approval'>

            <div className="main">
                <div className="search">

                    <form className="d-flex">
                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                         <select class="form-select" id="state" required>
                        <option value="">Sort by..</option>
                        <option>Approved</option>
                        <option>Not Approved</option>
                    </select>
                         <button className="btn btn-outline-success" type="submit">Search</button>
                    </form><br/>
                    
                  </div>
            </div>
                <div className="user">
                    <table className="table table-striped table-hover ">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Requested By</th>
                            <th scope="col">Request type</th>
                            <th scope="col">Request Notes</th>
                            <th scope="col">Status</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>8-12-2021</td>
                            <td><a href="userprofile.html">@yessir</a></td>
                            <td>Create new account</td>
                            <td>Lorem ipsum dolor </td>
                            <td><button type='button' className='btn btn-primary me-2'><i className="fa fa-check-square"></i></button>
                            <button type='button' className='btn btn-danger'><i className="fa fa-times-circle"></i></button></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>8-12-2021</td>
                            <td><a href="userprofile.html">@yessir</a></td>
                            <td>Create new account</td>
                            <td>Lorem ipsum dolor </td>
                            <td><button type='button' className='btn btn-primary me-2'><i className="fa fa-check-square"></i></button>
                            <button type='button' className='btn btn-danger'><i className="fa fa-times-circle"></i></button></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>8-12-2021</td>
                            <td><a href="userprofile.html">@yessir</a></td>
                            <td>Create new account</td>
                            <td>Lorem ipsum dolor </td>
                            <td><button type='button' className='btn btn-primary me-2'><i className="fa fa-check-square"></i></button>
                            <button type='button' className='btn btn-danger'><i className="fa fa-times-circle"></i></button></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>8-12-2021</td>
                            <td><a href="userprofile.html">@yessir</a></td>
                            <td>Create new account</td>
                            <td>Lorem ipsum dolor </td>
                            <td><button type='button' className='btn btn-primary me-2'><i className="fa fa-check-square"></i></button>
                            <button type='button' className='btn btn-danger'><i className="fa fa-times-circle"></i></button></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>8-12-2021</td>
                            <td><a href="userprofile.html">@yessir</a></td>
                            <td>Create new account</td>
                            <td>Lorem ipsum dolor </td>
                            <td><button type='button' className='btn btn-primary me-2'><i className="fa fa-check-square"></i></button>
                            <button type='button' className='btn btn-danger'><i className="fa fa-times-circle"></i></button></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>8-12-2021</td>
                            <td><a href="userprofile.html">@yessir</a></td>
                            <td>Create new account</td>
                            <td>Lorem ipsum dolor </td>
                            <td><button type='button' className='btn btn-primary me-2'><i className="fa fa-check-square"></i></button>
                            <button type='button' className='btn btn-danger'><i className="fa fa-times-circle"></i></button></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>8-12-2021</td>
                            <td><a href="userprofile.html">@yessir</a></td>
                            <td>Create new account</td>
                            <td>Lorem ipsum dolor </td>
                            <td><button type='button' className='btn btn-primary me-2'><i className="fa fa-check-square"></i></button>
                            <button type='button' className='btn btn-danger'><i className="fa fa-times-circle"></i></button></td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>

    )
}

export default Approval
