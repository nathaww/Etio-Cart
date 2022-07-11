import React from 'react'
import { Link } from 'react-router-dom'
import './Setting.css'


const Setting = () => {
    return (


        <div className='setting'>

            <div className="cont">
            <Link to='/createaccount' type="button" className="btn btn-primary btn-create-acc"><i className='fas fa-user-plus'></i> <br />Create new account</Link>
            
            <Link to='/resetpass' type="button" className="btn btn-primary btn-create-acc"><i className='fas fa-lock'></i> <br />Reset Password</Link>
            </div>

        </div>
    )
}

export default Setting
