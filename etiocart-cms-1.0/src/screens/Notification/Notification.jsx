import React from 'react'
import './Notification.css'

const Notification = () => {

    const sampleNotification = [
        {
            title: "Some new notification",
            detail: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget acinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum."
        },
        {
            title: "Some new notification",
            detail: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget acinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum."
        },
        {
            "title": "Some new notification",
            "detail": "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget acinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum."
        },
        {
            "title": "Some new notification",
            "detail": "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget acinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum."
        },
    ];

    return (

        <div className='notification'>
            <div className='notif-card'>
                <h2 className='font-bold fs-5 mb-3'>User Notification</h2>
                <p className='fs-6'>An admin wants to create a new user account for <br />
                 <span className='font-bold'>Name:</span> Nathan <br />
                 <span className='font-bold'>Role:</span> Partner</p>
                <hr className='mt-3'/>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-green">Approve</button>
                    <button className="btn btn-red">Deny</button>
                </div>


            </div>

        </div >
    )
}

export default Notification
