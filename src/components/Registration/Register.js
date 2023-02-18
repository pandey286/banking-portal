import React, { useState } from 'react';
import Nav from '../Navbar';
import './style.css'
import RegPho from "./image/RegImage1.gif"
import axios from 'axios';
import swal from 'sweetalert';


const Register = () => {

  const [formData, setFormData] = useState({

    userFirstName: '',
    userLastName: '',
    userDOB: '',
    userPhoneNo: '',
    userAltPhoneNo: '',
    userAddress: '',
    userAadharNo: '',
    userPAN: '',
    userGender: '',
    userNationality: '',
    email: '',
    password: '',
    userAccType: '',
    userBranchName: '',
    userIFSC: '',
    userAccountNumber: '',
    createAt: '',
  });

  const resetFormData = () => {
    setFormData({
      userFirstName: '',
      userLastName: '',
      userDOB: '',
      userPhoneNo: '',
      userAltPhoneNo: '',
      userAddress: '',
      userAadharNo: '',
      userPAN: '',
      userGender: '',
      userNationality: '',
      email: '',
      password: '',
      userAccType: '',
      userBranchName: '',
      userIFSC: '',
      userAccountNumber: '',
      createAt: '',
    });
  };

  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    body: ''
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

    setEmailData({
      ...emailData,
      to: formData.email,
      subject: "Welcome to PSL Bank",
      body: "Thank You Registering with PSL Bank Online Platform. PSL Family is happy to have a new family member ",
    })
  };



  const url = "http://localhost:8080/api/customers/register"

  const notificationurl = "http://localhost:8080/api/v1/notifications"


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url, formData);
      const notification = await axios.post(notificationurl, emailData)
      swal({
        title: "Registeration Succesfully!! ",
        text: "You will also get mail if you successfully register",
        icon: "success",
    });

      console.log(response.data);
    } catch (error) {
      console.error(error);
      swal({
        title: "Registeration Failed !",
        text: "User May already exist else, Please Check Your Credential",
        icon: "warning",
    });
    }
  };


  return (
    <>
      <Nav />
      <section className="h-100 bg-white">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center mt-3 h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-5 h-100  d-flex d-xl-block justify-content-center">
                    <img src={RegPho} alt="Sample photo" className="img-fluid register-photo mt-5 pt-5" />
                  </div>
                  <div className="col-xl-7">
                    <div className="card-body md-5 text-black">
                      <h3 className="mb-3 text-uppercase"><b>Registeration For Online Banking</b></h3>
                      <form>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input type="text" name="userFirstName" onChange={handleChange} id="form3Example1m" className="form-control form-control-lg" placeholder='First Name' />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input type="text" id="lastname" name='userLastName' onChange={handleChange} className="form-control form-control-lg" placeholder='Last Name' required />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input type="text" id="phoneno" name='userPhoneNo' onChange={handleChange} className="form-control form-control-lg" placeholder='Phone No.' required />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input type="text" id="form3Example1n" name='userAltPhoneNo' onChange={handleChange} className="form-control form-control-lg" placeholder='Alternate Phone No.' required />
                            </div>
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="text" id="form3Example9" name='userAddress' onChange={handleChange} className="form-control form-control-lg" placeholder='Address' />
                        </div>
                        <div className='row'>
                          <div className="form-outline col-md-6 mb-4">
                            <input type="text" id="form3Example8" name='userAadharNo' onChange={handleChange} className="form-control form-control-lg" placeholder='Aadhaar Number' />
                          </div>
                          <div className="form-outline col-md-6 mb-4">
                            <input type="text" id="form3Example8" name='userPAN' onChange={handleChange} className="form-control form-control-lg" placeholder='PAN Number' />
                          </div>
                        </div>
                        <div className='row'>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <select id="form3Example1n" name='userGender' onChange={handleChange} className="select form-control form-control-lg" placeholder='Gender'>
                                <option selected>Gender</option>
                                <option value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                                <option value="OTHERS">OTHER</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <select id="form3Example1n" name='userNationality' onChange={handleChange} className="select form-control form-control-lg" placeholder='Nationality'>
                                <option selected>Nationality</option>
                                <option value="INDIAN">Indian</option>
                                <option value="NRI">NRI</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className="form-outline col-md-6 mb-4">
                            <input type="email" id="form3Example8" name='email' onChange={handleChange} className="form-control form-control-lg" placeholder='Email' />
                          </div>
                          <div className="form-outline col-md-6 mb-4">
                            <input type="text" id="form3Example8" name='password' onChange={handleChange} className="form-control form-control-lg" placeholder='Password' />
                          </div>
                          {/* <div className="form-outline col-md-6 mb-4">
                            <input type="text" id="form3Example8" name='userAccType' onChange={handleChange} className="form-control form-control-lg" placeholder='Account Type' />
                          </div> */}
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <select id="form3Example1n" name='userAccType' onChange={handleChange} className="select form-control form-control-lg" placeholder='Account Type'>
                                <option value="Savings">Savings</option>
                                <option value="Current">Current</option>
                                <option value="FixedDeposit">FixedDeposit</option>
                                <option value="SafeDepositLockers">SafeDepositLockers</option>
                              </select>
                            </div>
                          </div>

                          <div className="form-outline col-md-6 mb-4">
                            <input type="text" id="form3Example8" name='userBranchName' onChange={handleChange} className="form-control form-control-lg" placeholder='Branch Name' />
                          </div>
                          <div className="form-outline col-md-6 mb-4">
                            <input type="text" id="form3Example8" name='userIFSC' onChange={handleChange} className="form-control form-control-lg" placeholder='IFSC Code' />
                          </div>
                          <div className="form-outline col-md-6 mb-4">
                            <input type=" text" id="form3Example8" name='userAccountNumber' onChange={handleChange} className="form-control form-control-lg" placeholder='Account Number' />
                          </div>
                          <div className="col-md-6 mb-4">
                            <span className='fs-4'>Date Of Birth :-</span>
                          </div>
                          <div className='col-md-6 mb-4'>
                            <div className="form-outline">
                              <input type="date" aria-label='dob' id="datepicker" name='userDOB' onChange={handleChange} className="form-control form-control-lg " placeholder='Date Of Birth' required />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <span className='fs-4'>Account Creation Date:-</span>
                          </div>
                          <div className="form-outline col-md-6 mb-4 d-flex justify-content-left">
                            <input type="date" id="form3Example8" name='createAt' onChange={handleChange} className="form-control form-control-lg" placeholder='Creation Date' />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center pt-3">
                          <button type="reset" onClick={resetFormData} className="btn btn-warning btn-lg mt-3">Reset All</button>
                          <button type="button" className="btn btn-success btn-lg mt-3 ms-3" onClick={handleSubmit}>Register</button>
                        </div>
                      </form>
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