import React from 'react'
import './UserProfile.css'
import { ProgressBar } from 'react-bootstrap'
const UserProfile= ()=> {
    return (

        <div className='user-profile'>


                <div className="col-md-5" >
    
                <div className="upc">
                  
                  <div className='text-center'>
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" width='350px' height='350px' alt="" className='rounded-full'/>
                  </div>
                  <h1 className="text-2xl text-center m-3 font-bold"> <i className='fas fa-user mr-2'></i>User Profile</h1>
                  <p className="text-muted"><b> Name:</b> <span className="text-black">Nathan Solomon</span></p>
                  <p className="text-muted"><b>Gender:</b>   <span className="text-black">Male</span></p>
                  <p className="text-muted"><b>Age:</b>   <span className="text-black">20</span></p>
                  <p className="text-muted"><b>E-mail:</b>  <span className="text-black">solomonnathan@gmail.com</span></p>
                  <p className="text-muted"><b>Phone Number:</b>  <span className="text-black">+251929238411</span></p>
                  <p className="text-muted"><b>Total Transaction:</b>  <span className="text-black">1200ETB</span></p>

                  <div className='mt-3' >
                  <p className="card-text"><small className="text-muted">Transport</small></p>
                    <ProgressBar className='m-2' striped variant="success" now={40} />
                    <p className="card-text"><small className="text-muted">Event</small></p>
                    <ProgressBar className='m-2' striped variant="warning" now={60} />
                  </div>

                </div>
                
            </div>

        </div>
    )
}

export default UserProfile
