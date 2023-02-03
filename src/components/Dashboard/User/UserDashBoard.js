import React from "react";
import { useState } from "react";
import "./user.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import Kakashi from "../../../images/NavbarImages/kakashi.ico"


const UserDashBoard = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div className="wrapper">
                {/* <!-- Sidebar  --> */}
                <nav id="sidebar" className={sidebarOpen ? "active" : ""}>
                    <div className="sidebar-header">
                        <h3><span><img className='mb-1' src={Kakashi} width="30px" /></span><strong>PSL Bank Ltd.</strong></h3>
                    </div>

                    <ul className="list-unstyled components">
                        <li>
                            <a className="list-item" href="#">
                                <i className="fa fa-user-circle me-2"></i>
                                <span>Account Information</span>
                            </a>
                        </li>
                        <li>
                            <a className="list-item" href="#">
                                <i className="fa fa-credit-card me-2"></i>
                                <span>Card's Management </span>
                            </a>
                        </li>
                        <li>
                            <a className="list-item" href="/userdash/viewtrans">
                                <i className="fa fa-inr me-2"></i>
                                <span>View Transactions</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="list-unstyled CTAs">
                        <li>
                            <a href="/" className="download "><BiLogOut />Logout</a>
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
                        </div>
                    </nav>

                    <div className="card ">
                        <div className="card-header bg-warning fs-1">
                            <b>Available Balance:</b>
                        </div>
                        <div className="card-body text-end">
                            <p className="card-text fs-1"><FaRupeeSign />500.0</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <b>Pay new Beneficiary - Enter new Beneficiary details</b>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder='Payee Name' />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder='IFSC Code' required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <input type="text" id="form3Example1n" className="form-control form-control-lg" placeholder='Account Number' required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <input type="text" id="form3Example1n" className="form-control form-control-lg" placeholder='Re-Enter Account Number' required />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-4 ">
                                    <div className="form-outline">
                                    </div>
                                        <input type="text" id="form3Example1n" className="form-control form-control-lg" placeholder='Enter Amount' required />
                                </div>
                                <div className="row ">
                                <button type="button" className="btn btn-success btn-lg ms-2">Transfer</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default UserDashBoard;