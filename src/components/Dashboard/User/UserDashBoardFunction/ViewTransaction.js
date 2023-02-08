import React from "react";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../user.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
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

                    <div className="m-5" id="page-content">
                        <div className="row">
                            <div className="col-lg-12 grid-margin stretch-card align-middle">
                                <div className="card">
                                    <div className="card-header bg-info fs-1">
                                        All Transactions <GrTransaction />
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
                                                        <td><AiFillCloseCircle /></td>
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