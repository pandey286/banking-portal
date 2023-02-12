import React from "react";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../user.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaHome, FaUserAlt, FaRegCreditCard, FaRupeeSign, FaWpforms, FaQuestionCircle } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico"


let SuccessIcon = { color: "green" };
let FailedIcon = { color: "red" };

const ViewTrans = () => {
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

                    <div className="m-5" id="page-content">
                        <div className="row">
                            <div className="col-lg-12 grid-margin stretch-card align-middle">
                                <div className="card">
                                    <div className="card-header bg-secondary fs-1">
                                        All Transaction <GrTransaction />
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table bg-white shadow-sm  text-center table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Transaction Id</th>
                                                        <th scope="col">Transaction Date</th>
                                                        <th scope="col">Beneficiary</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>TRANS0000012</td>
                                                        <td>4/11/2056</td>
                                                        <td>Joe Doe</td>
                                                        <td>$1200</td>
                                                        <td><AiFillCheckCircle style={SuccessIcon} /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>TRANS0007718</td>
                                                        <td>4/11/2056</td>
                                                        <td>Joe Doe</td>
                                                        <td>$1200</td>
                                                        <td><AiFillCheckCircle style={SuccessIcon} /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>TRANS0000012</td>
                                                        <td>4/11/2056</td>
                                                        <td>Joe Doe</td>
                                                        <td>$1200</td>
                                                        <td><AiFillCloseCircle style={FailedIcon} /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>TRANS0007718</td>
                                                        <td>4/11/2056</td>
                                                        <td>Joe Doe</td>
                                                        <td>$1200</td>
                                                        <td ><AiFillCheckCircle style={SuccessIcon} /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>TRANS0000012</td>
                                                        <td>4/11/2056</td>
                                                        <td>Joe Doe</td>
                                                        <td>$1200</td>
                                                        <td><AiFillCloseCircle style={FailedIcon} /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>TRANS0007718</td>
                                                        <td>4/11/2056</td>
                                                        <td>Joe Doe</td>
                                                        <td>$1200</td>
                                                        <td><AiFillCheckCircle style={SuccessIcon} /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>TRANS0000012</td>
                                                        <td></td>
                                                        <td>Joe Doe</td>
                                                        <td>$1200</td>
                                                        <td><AiFillCheckCircle style={FailedIcon} /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>TRANS0007718</td>
                                                        <td>4/11/2056</td>
                                                        <td>Joe Doe</td>
                                                        <td>$1200</td>
                                                        <td><AiFillCheckCircle style={SuccessIcon} /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-warning shadow p-1 mb-5 rounded-1">
                                    <Link to="/userdash" className="text-dark p-3" style={{ textDecoration: "none" }}>Back To Home</Link></button><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewTrans