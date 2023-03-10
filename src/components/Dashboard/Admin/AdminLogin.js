import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Navbar';
import LogImg from '../../Logins/images/LogImg1.gif'
import { FaUserCircle } from 'react-icons/fa';
import swal from 'sweetalert';
import axios from 'axios';

function AdminLogin() {

    const setCookie = (name, value, days) => {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    };

    const url = "http://localhost:8080/api/admins/login"

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');

        if (!formData.email) {
            setErrorMessage('Email is required');
        }
        else if (!formData.password) {
            setErrorMessage('Password is required');
        }
        else if (!formData.email || !formData.password) {
            setErrorMessage('Email and password are required');
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setErrorMessage('Invalid email address');
            if (formData.password.length < 6) {
                setErrorMessage('Invalid Credentials');
            }
        } else if (formData.password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long');
        }
        else {
            try {
                const response = await axios.post(url, formData);
                swal({
                    title: "Login Succesfully!! ",
                    text: "Your Login Was Successful",
                    icon: "success",
                });
             

                // Set data in cookies
                setCookie("adminData", JSON.stringify(response.data), 7);
                window.location.href="/admindash"
            } catch (error) {
                swal({
                    title: "Login Failed Successfully !",
                    text: "Please Check Your Credential",
                    icon: "warning",
                });
                setErrorMessage('Incorrect email or password');
            }
        }
    };


    return (
        <>
            <Nav />
            <div className='row'>
                <div className="col-xl-5 h-100  d-flex d-xl-block justify-content-center">
                    <img src={LogImg} alt="Sample photo" className="img-fluid register-photo mt-5 pt-5" />
                </div>
                <div className='login-container d-flex justify-content-center m-5 p-5 col '>
                    <div className='row shadow-lg p-3 mb-5 bg-body-tertiary rounded-3 p-3'>
                        <h2 className='text-center p-3 '>Admin Login</h2><br />
                        <span className='text-center fs-1'><FaUserCircle /></span>
                        <form>
                            <div className="p-3 mb-3 col align-self-center">
                                <input type="email" className="form-control shadow-sm  " id="userId" aria-describedby="EmailId" name='email' onChange={handleChange}
                                    placeholder="Enter Your Registered Email" />
                            </div>
                            <div className="p-3 col align-self-center">
                                <input type="password" className="form-control  shadow-sm " id="InputPassword1" name='password' onChange={handleChange}
                                    placeholder="Enter Registered Password" />
                            </div>
                            {errorMessage && <div className='alert alert-danger mt-3' role='alert'>{errorMessage}</div>}
                            <div className="text-center p-3">
                                <button type="submit" onClick={handleSubmit} className="btn btn-outline-primary shadow p-2 mb-5 rounded-1" >Login</button><br />
                                <Link className="text-danger fs-5" to="/forgetpass">Forgot password?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminLogin;
