import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./user.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaRupeeSign, FaHome, FaUserAlt, FaRegCreditCard, FaWpforms, FaQuestionCircle, FaUserPlus} from "react-icons/fa";
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
                            <Link className="list-item d-flex" to="/userdash/beneficiary">
                                <FaUserPlus className="me-3 mt-1" />
                                <span>Add Beneficiary</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/userdash/card">
                                <FaRegCreditCard className="me-3 mt-1" />
                                <span>Card's Application </span>
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
                                <span>Apply For Loan's</span>
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

                    <div className="card ">
                        <div className="card-header d-flex col bg-secondary text-dark fs-2">
                            <div className="col-md-9 col-sm-12">Account Number :-</div>
                            <div className="col-md-3 col-sm-12 text-end"> 4561237890</div>
                        </div>
                        <div className="card-body d-flex col text-end">
                            <div className="col-md-9 col-sm-12 text-start fs-3">Account Balance :-</div>
                            <p className="col-md-3 col-sm-12 card-text fs-3"><FaRupeeSign />500.0</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header fs-4">
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
                                <div className="col-md-6 mb-4 ">
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