import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../user.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaHome, FaUserAlt, FaRegCreditCard, FaRupeeSign, FaWpforms, FaQuestionCircle } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico"

const AccountInfo = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <>

            <div className="wrapper">
                {/* <!-- Sidebar  --> */}
                <nav id="sidebar" className={sidebarOpen ? "active" : ""}>
                    <div className="sidebar-header fs-5">
                        <Link className="list-item d-flex" to="/userdash">
                            <FaUserAlt className="me-3 mt-1" />
                            <span >UserEmail</span>
                        </Link>
                    </div>
                    <ul className="list-unstyled components">
                        <li>
                            <Link className="list-item d-flex" to="/userdash">
                                <FaHome className="me-3 mt-1" />
                                <span >Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/userdash/accountInfo">
                                <FaUserAlt className="me-3 mt-1" />
                                <span>Account Information</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/userdash/card">
                                <FaRegCreditCard className="me-3 mt-1" />
                                <span>Card's Management </span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/userdash/viewtrans">
                                <FaRupeeSign className="me-3 mt-1" />
                                <span>View Transactions</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/userdash/loanApp">
                                <FaWpforms className="me-3 mt-1" />
                                <span>Loan Application</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/userdash/faq">
                                <FaQuestionCircle className="me-3 mt-1" />
                                <span>FAQ</span>
                            </Link>
                        </li>
                    </ul>

                    <ul className="list-unstyled CTAs">
                        <li>
                            <Link to="/" className="logout d-flex col"><BiLogOut className="me-3 mt-1 col-3" />
                                <span className="col-4">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* <!-- Page Content  --> */}
                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button type="button" onClick={toggleSidebar} id="sidebarCollapse" className="btn btn-outline-dark align-middle">
                                <GiHamburgerMenu />
                            </button>
                            <h3><span><img className='mb-1' src={Kakashi} width="30px" /></span><strong>PSL Bank Ltd.</strong></h3>
                        </div>
                    </nav>

                    <div className="m-5" id="page-content">
                        <div className="row">
                            <div className="col-lg-12 grid-margin stretch-card align-middle">
                                <div className="card">
                                    <div className="card-header bg-secondary fs-1">
                                        Account Information
                                    </div>
                                    <div className="card-body row  d-flex ">
                                        <div className="col-md-6"><p>First Name :-</p></div><div className="col-md-6 justify-content-end"><p>Prashant</p></div>
                                        <div className="col-md-6"><p>Middle Name :-</p></div><div className="col-md-6 justify-content-end"><p>Vinod</p></div>
                                        <div className="col-md-6"><p>Last Name :-</p></div><div className="col-md-6 justify-content-end"><p>Pandey</p></div>
                                        <div className="col-md-6"><p>Date Of Birth :-</p></div><div className="col-md-6 justify-content-end"><p>04-11-2000</p></div>
                                        <div className="col-md-6"><p>Phone Number :-</p></div><div className="col-md-6 justify-content-end"><p>8291571956</p></div>
                                        <div className="col-md-6"><p>Alternate Phone Number :-</p></div><div className="col-md-6 justify-content-end"><p>7458961205</p></div>
                                        <div className="col-md-6"><p>Address :-</p></div><div className="col-md-6 justify-content-end"><p>Vikhroli</p></div>
                                        <div className="col-md-6"><p>Aadhar-Card Number :-</p></div><div className="col-md-6 justify-content-end"><p>656303335855</p></div>
                                        <div className="col-md-6"><p>PAN Number :-</p></div><div className="col-md-6 justify-content-end"><p>FDWPP6214F</p></div>
                                        <div className="col-md-6"><p>Gender :-</p></div><div className="col-md-6 justify-content-end"><p>MALE</p></div>
                                        <div className="col-md-6"><p>Nationality :-</p></div><div className="col-md-6 justify-content-end"><p>INDIAN</p></div>
                                        <div className="col-md-6"><p>Email :-</p></div><div className="col-md-6 justify-content-end"><p>pandeyprashant953@gmail.com</p></div>
                                        <div className="col-md-6"><p>Account-Type :-</p></div><div className="col-md-6 justify-content-end"><p>Saving</p></div>
                                        <div className="col-md-6"><p>Branch-Name :-</p></div><div className="col-md-6 justify-content-end"><p>Vikhroli</p></div>
                                        <div className="col-md-6"><p>IFSC Code :-</p></div><div className="col-md-6 justify-content-end"><p>PSL00001</p></div>
                                        <div className="col-md-6"><p>Account Nummber :-</p></div><div className="col-md-6 justify-content-end"><p>1101</p></div>
                                        <div className="col-md-6"><p>Creation Date :-</p></div><div className="col-md-6 justify-content-end"><p>08/02/2023</p></div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-center">
                                        <button type="submit" className="btn btn-outline-warning shadow p-1 mt-3 mb-3 rounded-1">
                                            <Link to="/userdash" className="text-dark p-3" style={{ textDecoration: "none" }}>Update</Link></button><br />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-primary shadow p-1 mb-5 rounded-1">
                                    <Link to="/userdash" className="text-dark p-3" style={{ textDecoration: "none" }}>Back To Home</Link></button><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountInfo;
