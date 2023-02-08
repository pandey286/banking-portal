import React from "react";
import Nav from "../.././Navbar"
import { Link } from "react-router-dom";
import Fgp from '../images/ForgPass.jpeg'


const ForgetPass = () => {

    return (
        <>
            <Nav />
            <div className="row">
                <div className="col-xl-5 h-100  d-flex d-xl-block justify-content-center">
                    <img src={Fgp} alt="Sample photo" className="img-fluid register-photo mt-5 pt-5" />
                </div>
                <div className='frgp-container d-flex justify-content-center m-5 p-5 col '>
                    <div className='row shadow-lg p-3 mb-5 bg-body-tertiary rounded-3 p-3'>
                        <h2 className='text-center p-3 '> Forgot Password </h2>
                        <form>
                            <div className="p-3 mb-3 col align-self-center">
                                <input type="email" className="form-control shadow-sm  " id="userEmail" aria-describedby="UserEmail"
                                    placeholder="Enter Your Email" />
                            </div>
                            <div className="p-3 col align-self-center">
                                <input type="password" className="form-control  shadow-sm " id="NewPassword1"
                                    placeholder="New Password" />
                            </div>
                            <div className="p-3 col align-self-center">
                                <input type="password" className="form-control  shadow-sm " id="CPassword1"
                                    placeholder="Confirm Password" />
                            </div>
                            <div className="text-center p-3">
                                <button type="submit" className="btn btn-outline-primary shadow p-1 mb-5 rounded-1">
                                    <Link to="/userdash" className="text-dark p-3" style={{ textDecoration: "none" }}>Submit</Link></button><br />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ForgetPass;