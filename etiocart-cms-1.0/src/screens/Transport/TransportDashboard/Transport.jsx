import React from 'react'
import './Transport.css'

const Transport = () => {
  return (


    <div className='transport'>

      <div className="container-fluid px-4">
        <div className="row g-3 my-2">
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">720</h3>
                <p className="fs-5">Collected</p>
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


      <div className="main">

   

        <div className="user">

        <div className="search">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <select class="form-select" id="state" required>
              <option value="">Sort by..</option>
              <option>Male</option>
              <option>Female</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form><br />
        </div>
        
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">ID</th>
                <th scope="col">Phone</th>
                <th scope="col">Price</th>
                <th scope="col">From-To</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>M2345</td>
                <td>+251923546858</td>
                <td>500ETB</td>
                <td>DD-AA</td>
                <td>ARRIVED</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>M2345</td>
                <td>+251923546858</td>
                <td>500ETB</td>
                <td>DD-AA</td>
                <td>ARRIVED</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>M2345</td>
                <td>+251923546858</td>
                <td>500ETB</td>
                <td>DD-AA</td>
                <td>ARRIVED</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>M2345</td>
                <td>+251923546858</td>
                <td>500ETB</td>
                <td>DD-AA</td>
                <td>ARRIVED</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>M2345</td>
                <td>+251923546858</td>
                <td>500ETB</td>
                <td>DD-AA</td>
                <td>ARRIVED</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>M2345</td>
                <td>+251923546858</td>
                <td>500ETB</td>
                <td>DD-AA</td>
                <td>ARRIVED</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>M2345</td>
                <td>+251923546858</td>
                <td>500ETB</td>
                <td>DD-AA</td>
                <td>ARRIVED</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>M2345</td>
                <td>+251923546858</td>
                <td>500ETB</td>
                <td>DD-AA</td>
                <td>ARRIVED</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>M2345</td>
                <td>+251923546858</td>
                <td>500ETB</td>
                <td>DD-AA</td>
                <td>ARRIVED</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>M2345</td>
                <td>+251923546858</td>
                <td>500ETB</td>
                <td>DD-AA</td>
                <td>ARRIVED</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>M2345</td>
                <td>+251923546858</td>
                <td>500ETB</td>
                <td>DD-AA</td>
                <td>ARRIVED</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>M2345</td>
                <td>+251923546858</td>
                <td>500ETB</td>
                <td>DD-AA</td>
                <td>ARRIVED</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Transport
