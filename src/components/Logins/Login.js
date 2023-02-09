import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Navbar';
import LogImg from './images/LogImg1.gif';
import axios from 'axios';


function Login() {

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

    const url = "http://localhost:8080/api/customers/login"

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post(url, formData);
          console.log(response.data);
        } catch (error) {
          console.error(error);
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
                        <h2 className='text-center p-3 '>Please Login Here</h2>
                        <form>
                            <div className="p-3 mb-3 col align-self-center">
                                <input type="email" className="form-control shadow-sm  " id="userId" aria-describedby="EmailId" name='email' onChange={handleChange}
                                    placeholder="Enter Your Registered Email" />
                            </div>
                            <div className="p-3 col align-self-center">
                                <input type="password" className="form-control  shadow-sm " id="InputPassword1" name='password' onChange={handleChange}
                                     placeholder="Enter Registered Password" />
                            </div>
                            <div className="text-center p-3">
                                <button type="submit" onClick={handleSubmit} className="btn btn-outline-primary shadow p-1 mb-5 rounded-1">Login</button><br />
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
