import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Navbar';
import LogImg from './images/LogImg1.gif';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';
import swal from 'sweetalert';
import Cookies from 'js-cookie';


function Login() {

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
        userName: '',
        password: '',
    });


    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    };

    const url = "http://localhost:8080/api/customers/login"

    const [accountData, setAccountData] = useState();
    // useEffect(() => {
    //     axios
    //     .get(`http://localhost:8080/api/customers/${formData.userName}`)
    //     .then((response) => {
    //     console.log(response.data);
    //     setAccountData(response.data);
    //     })
    //     .catch((error) => {
    //     console.log(error);
    //     });
    
    // }, []);

    const handleSubmit =  (event) => {
        event.preventDefault();
        setErrorMessage('');

        if (!formData.userName) {
            setErrorMessage('UserName is required');
        }
        else if (!formData.password) {
            setErrorMessage('Password is required');
        }
        else if (!formData.userName || !formData.password) {
            setErrorMessage('UserName and password are required');
        }
        else if (formData.password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long');
        }
        else {
            // try {
            //     const res = await axios.post(url, formData);
            //     swal({
            //         title: "Login Succesfully!! ",
            //         text: "Your Login Was Successful",
            //         icon: "success",
            //     });
            //     // store JWT token in cookie
            //     setCookie("jwtToken", res.data.token, 7); 
            //     window.location.href = "/userdash"
            //     console.log(res.data);
            // } catch (error) {
            //     console.error(error);
            //     swal({
            //         title: "Login Failed Successfully !",
            //         text: "Please Check Your Credential",
            //         icon: "warning",
            //     });
            //     setErrorMessage('Incorrect UserName or password');

            axios.post(url , formData)
            .then((res) => {
                console.log(res.status)
                console.log(res.data);
                axios.get(`http://localhost:8080/api/customers/${formData.userName}`, {
                    headers: {
                        'Authorization': `Bearer ${res.data}`
                    }
                })
                    .then((res) => {
                        console.log(res.status);
                        setCookie('userinfo',res.data,7);
                        localStorage.setItem('accountInfo',JSON.stringify(res.data))
                        setAccountData(res.data)
                        console.log(accountData)
                    })
                    .catch((err) => {
                        console.log(url + formData.userName);
                        console.log(err);
                    })
                swal("Success", "Login Successfull", "success");
                // setIsLoggedIn(true)
                window.location.href = "/userdash"
            })
            .catch((err) => {
                console.log("Error", err);
                swal("Error", "Invalid Credentials", "error");
            })
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
                        <h2 className='text-center p-3 '>Please Login Here</h2><br />
                        <span className='text-center fs-1'><FaUserCircle /></span>
                        <form>
                            {/* <div className="p-3 mb-3 col align-self-center">
                                <input type="email" className="form-control shadow-sm  " id="userId" aria-describedby="EmailId" name='email' onChange={handleChange}
                                    placeholder="Enter Your Registered Email" />
                            </div> */}
                            <div className="p-3 mb-3 col align-self-center">
                                <input type="text" className="form-control shadow-sm  " id="userId" aria-describedby="UserName" name='userName' onChange={handleChange}
                                    placeholder="Enter Your UserName" />
                            </div>
                            <div className="p-3 col align-self-center">
                                <input type="password" className="form-control  shadow-sm " id="InputPassword1" name='password' onChange={handleChange}
                                    placeholder="Enter Password" />
                            </div>
                            {errorMessage && <div className='alert alert-danger mt-3' role='alert'>{errorMessage}</div>}
                            <div className="text-center p-3">
                                <button type="submit" onClick={handleSubmit} className="btn btn-outline-primary shadow p-2 mb-5 rounded-1" >Login</button><br />
                                <Link className="text-danger fs-5" to="/forgetpass">Forgot password?</Link>
                            </div>
                            <div className="text-center p-3">
                                <p className="text-muted fs-5" href="/">Don't have an Account?. <Link className="text-primary fs-5" to="/register">Register.</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
