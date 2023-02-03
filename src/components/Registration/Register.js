import React from 'react';
import Nav from '../Navbar';
import './style.css'
import RegPho from "./image/RegImage.webp"



const Register = () => {

  return (
    <>
      <Nav />
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-5 h-100  d-none d-xl-block">
                    <img src={RegPho} alt="Sample photo" className="img-fluid register-photo" />
                  </div>
                  <div className="col-xl-7">
                    <div className="card-body md-5 text-black">
                      <h3 className="mb-3 text-uppercase">New Account</h3>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder='First Name' />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder='Middle Name' required />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg" placeholder='Last Name' required />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="date" id="form3Example1n" className="form-control form-control-lg" placeholder='Date Of Birth' required />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <select id="form3Example1n" className="select form-control form-control-lg" placeholder='Nationality'>
                              <option value="">Nationality</option>
                              <option value="1">Indian</option>
                              <option value="2">NRI</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg" placeholder='Phone Number' required />
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example9" className="form-control form-control-lg" placeholder='Permanent Address' />
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example9" className="form-control form-control-lg" placeholder='Optional Address' />
                      </div>
                      <div className='row'>
                        <div className="form-outline col-md-6 mb-4">
                          <input type="num" id="form3Example8" className="form-control form-control-lg" placeholder='Aadhaar Number' />
                        </div>
                        <div className="form-outline col-md-6 mb-4">
                          <input type="num" id="form3Example8" className="form-control form-control-lg" placeholder='PAN Number' />
                        </div>
                        <div className="form-outline col-md-6 mb-4">
                          <input type="num" id="form3Example8" className="form-control form-control-lg" placeholder='Driving License' />
                        </div>
                        <div className="form-outline col-md-6 mb-4">
                          <input type="num" id="form3Example8" className="form-control form-control-lg" placeholder='PassPort' />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <select id="form3Example1n" className="select form-control form-control-lg" placeholder='Gender'>
                            <option value="">Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Others</option>
                          </select>
                        </div>
                      </div>
                      <div className='row'>
                        <div className="form-outline col-md-6 mb-4">
                          <input type="num" id="form3Example8" className="form-control form-control-lg" placeholder='Password' />
                        </div>
                        <div className="form-outline col-md-6 mb-4">
                          <input type="num" id="form3Example8" className="form-control form-control-lg" placeholder='Confirm Password ' />
                        </div>
                      </div>
                      <div className="d-flex justify-content-right pt-3">
                        <button type="button" className="btn btn-danger btn-lg">Reset all</button>
                        <button type="button" className="btn btn-success btn-lg ms-2">Register</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}
export default Register