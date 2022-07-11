import React from 'react'
import './CreateAccount.css'
import { Form } from 'react-bootstrap'
const CreateAccount = () => {
  return (


    <div className='createaccount'>

      <div class="account-input-form row">

        <h3 className='mb-1'>Create account</h3>
        <div class="account-permission row">
          <h5>Choose role</h5>
          <div class="account-form-check">
            <input class="account-form-check-input" type="radio" name="flexRadioDefault" id="Radiouploader" />&nbsp;
            <label class="account-form-check-label" for="Radiouploader">
              Uploader
            </label>
          </div>
          <div class="account-form-check">
            <input class="account-form-check-input" type="radio" name="flexRadioDefault" id="Radiochecker" />&nbsp;
            <label class="account-form-check-label" for="Radiochecker">
              Checker
            </label>
          </div>
          <div class="account-form-check">
            <input class="account-form-check-input" type="radio" name="flexRadioDefault" id="Radiopartner" />&nbsp;
            <label class="account-form-check-label" for="Radiopartner">
              Partner
            </label>
          </div>
          <div class="account-form-check">
            <input class="account-form-check-input" type="radio" name="flexRadioDefault" id="Radioadmin" />&nbsp;
            <label class="account-form-check-label" for="Radioadmin">
              Admin
            </label>
          </div>
          <div class="account-form-check">
            <input class="account-form-check-input" type="radio" name="flexRadioDefault" id="Radiosuperadmin" />&nbsp;
            <label class="account-form-check-label" for="Radiosuperadmin">
              Super Admin
            </label>
          </div>
        </div>

        <div class="image-box col">
          <Form.Group controlId="formFileLg" className="mb-3 upload-form">
            <Form.Label className="acc-label">Profile Picture</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </div>

        <div class="form-field col-lg-12">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="acc-label">Name</Form.Label>
            <Form.Control type="email" className='acc-input-text' placeholder="" />
          </Form.Group>
        </div>
        <div class="form-field col-lg-12">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="acc-label">Email address</Form.Label>
            <Form.Control type="email" className='acc-input-text' placeholder="" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </div>
        <div class="form-field col-lg-12">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="acc-label">Phone Number</Form.Label>
            <Form.Control type="email" className='acc-input-text' placeholder="" />
          </Form.Group>
        </div>
        <div class="form-field col-lg-12">
          <label for="desc" className="acc-label">Gender</label>
          <div class="account-form-check">
            <input class="account-form-check-input" type="radio" name="flexRadioDefault" id="Radiomale" />&nbsp;
            <label class="account-form-check-label" for="Radiomale">
              Male
            </label>
          </div>
          <div class="account-form-check">
            <input class="account-form-check-input" type="radio" name="flexRadioDefault" id="Radiofemale" />&nbsp;
            <label class="account-form-check-label" for="Radiofemale">
              Female
            </label>
          </div>
        </div>
        <div class="form-field col-lg-12">
          <Form.Label className="acc-label" htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            className='acc-input-text'
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers, and
            must not contain spaces, special characters, or emoji.
          </Form.Text>
        </div>
        <div class="form-field col-lg-12">
          <Form.Label className="acc-label" htmlFor="inputPassword5">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            className='acc-input-text'
            aria-describedby="passwordHelpBlock"
          />

        </div>
      </div>



      <button type="button" class="btn btn-primary btn-req-acc">Request</button>


    </div>
  )
}

export default CreateAccount
