import React from 'react'
import './MovieWorkflow.css'

const MovieWorkflow =()=> {
    return (

        <div className='workflow'>


            <div className="main">
                
              <div className="search">
                <form className="d-flex">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                     <select class="form-select" id="state" required>
                        <option value="">Search by..</option>
                        <option>Name</option>
                        <option>Phone Number</option>
                        <option>Ticket ID</option>
                        <option>Cinema</option>
                        <option>Date</option>
                    </select>
                     <button className="btn btn-outline-success" type="submit">Search</button>
                </form><br />
            </div>

            <div>
            </div>
                <div className="transaction">
                  <button className="pdf">PDF</button>
                  <button className="excel">Excel</button>
                    <h3>Transaction</h3><br/>
                    <table className="table table-striped table-hover ">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Date</th>
                            <th scope="col">Cinema</th>
                            <th scope="col">Ticket type</th>
                            <th scope="col">Ticket ID</th>
                            <th scope="col">Paid Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>+251929238411</td>
                            <td>31-12-2021</td>
                            <td>Gast Cinema</td>
                            <td>VIP</td>
                            <td>QWER1234</td>
                            <td>250ETB</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>+251929238411</td>
                            <td>31-12-2021</td>
                            <td>Gast Cinema</td>
                            <td>VIP</td>
                            <td>QWER1234</td>
                            <td>250ETB</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>+251929238411</td>
                            <td>31-12-2021</td>
                            <td>Gast Cinema</td>
                            <td>VIP</td>
                            <td>QWER1234</td>
                            <td>250ETB</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Mark</td>
                            <td>+251929238411</td>
                            <td>31-12-2021</td>
                            <td>Gast Cinema</td>
                            <td>VIP</td>
                            <td>QWER1234</td>
                            <td>250ETB</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Mark</td>
                            <td>+251929238411</td>
                            <td>31-12-2021</td>
                            <td>Gast Cinema</td>
                            <td>VIP</td>
                            <td>QWER1234</td>
                            <td>250ETB</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Mark</td>
                            <td>+251929238411</td>
                            <td>31-12-2021</td>
                            <td>Gast Cinema</td>
                            <td>VIP</td>
                            <td>QWER1234</td>
                            <td>250ETB</td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td>Mark</td>
                            <td>+251929238411</td>
                            <td>31-12-2021</td>
                            <td>Gast Cinema</td>
                            <td>VIP</td>
                            <td>QWER1234</td>
                            <td>250ETB</td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td>Mark</td>
                            <td>+251929238411</td>
                            <td>31-12-2021</td>
                            <td>Gast Cinema</td>
                            <td>VIP</td>
                            <td>QWER1234</td>
                            <td>250ETB</td>
                          </tr>
                        </tbody>
                      </table>
                </div>
                
            </div>
        </div>
    )
}

export default MovieWorkflow
