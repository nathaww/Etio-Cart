import React from 'react'
import './EventWorkflow.css'

const EventWorkflow = () => {
  return (

    <div className='workflow'>

      <div className="container-fluid px-4">
        <div className="row g-3 my-2">
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">720</h3>
                <p className="fs-5">Purcahsed</p>
              </div>
              <i className="fas fa-money-bill-wave-alt fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">4920</h3>
                <p className="fs-5">Refunded</p>
              </div>
              <i
                className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">3899</h3>
                <p className="fs-5">Passengers</p>
              </div>
              <i className="fas fa-users fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">3425</h3>
                <p className="fs-5">Total Sale</p>
              </div>
              <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>
        </div>
      </div>



      <div className="transaction">
        <h3 className='fs-4'>Transaction for Jorka events</h3><br />

        <div className="search">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <select className="form-select me-2" id="state" required>
              <option value="">Sort by..</option>
              <option>Male</option>
              <option>Female</option>
              <option>Refunded</option>
            </select>
            <input className="form-control me-2" type="date" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form><br />
        </div>

        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Date</th>
              <th scope="col">Organization</th>
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
              <td>Jorka Events</td>
              <td>Concert</td>
              <td>QWER1234</td>
              <td>250ETB</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Mark</td>
              <td>+251929238411</td>
              <td>31-12-2021</td>
              <td>Jorka Events</td>
              <td>Concert</td>
              <td>QWER1234</td>
              <td>250ETB</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mark</td>
              <td>+251929238411</td>
              <td>31-12-2021</td>
              <td>Jorka Events</td>
              <td>Concert</td>
              <td>QWER1234</td>
              <td>250ETB</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Mark</td>
              <td>+251929238411</td>
              <td>31-12-2021</td>
              <td>Jorka Events</td>
              <td>Concert</td>
              <td>QWER1234</td>
              <td>250ETB</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Mark</td>
              <td>+251929238411</td>
              <td>31-12-2021</td>
              <td>Jorka Events</td>
              <td>Concert</td>
              <td>QWER1234</td>
              <td>250ETB</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Mark</td>
              <td>+251929238411</td>
              <td>31-12-2021</td>
              <td>Jorka Events</td>
              <td>Concert</td>
              <td>QWER1234</td>
              <td>250ETB</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Mark</td>
              <td>+251929238411</td>
              <td>31-12-2021</td>
              <td>Jorka Events</td>
              <td>Concert</td>
              <td>QWER1234</td>
              <td>250ETB</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Mark</td>
              <td>+251929238411</td>
              <td>31-12-2021</td>
              <td>Jorka Events</td>
              <td>Concert</td>
              <td>QWER1234</td>
              <td>250ETB</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-green">PDF</button>
        <button className="btn btn-green">Excel</button>
      </div>

    </div>
  )
}

export default EventWorkflow
