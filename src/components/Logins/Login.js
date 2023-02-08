import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Navbar';
import LogImg from './images/LogImg.jpeg';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('username:', username);
        console.log('password:', password);
        // Send a request to the server to check the login credentials
    }

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
                        <form onSubmit={handleSubmit}>
                            <div className="p-3 mb-3 col align-self-center">
                                <input type="email" className="form-control shadow-sm  " id="userId" aria-describedby="UserId"
                                    value={username} onChange={event => setUsername(event.target.value)} placeholder="Enter Your Registered Email" />
                            </div>
                            <div className="p-3 col align-self-center">
                                <input type="password" className="form-control  shadow-sm " id="InputPassword1"
                                    value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter Registered Password" />
                            </div>
                            <div className="text-center p-3">
                                <button type="submit" className="btn btn-outline-primary shadow p-1 mb-5 rounded-1">
                                    <Link to="/userdash" className="text-dark p-3" style={{ textDecoration: "none" }}>Login</Link></button><br />
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
