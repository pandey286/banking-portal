import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../user.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaHome, FaUserAlt, FaRegCreditCard, FaRupeeSign } from "react-icons/fa";
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
                                    <div className="card-body">
                                        <span className="fs-4">FirstName: Prashant</span><br/>
                                        <span className="fs-4">userMiddleName: Vinod </span><br/>
                                        <span className="fs-4">userLastName: Pandey</span><br/>
                                        <span className="fs-4">userDOB: 4/11/2000 </span><br/>
                                        <span className="fs-4">userPhoneNo: 8291571956</span><br/>
                                        <span className="fs-4">userAltPhoneNo: 9224310983</span><br/>
                                        <span className="fs-4">userAddress: Vikhroli</span><br/>
                                        <span className="fs-4">userAadharNo: 4561237890 </span><br/>
                                        <span className="fs-4">userPAN: FSDPP5243Q</span><br/>
                                        <span className="fs-4">userGender: MALE </span><br/>
                                        <span className="fs-4">userNationality: Indian </span><br/>
                                        <span className="fs-4">email: pandeyprashant9532gamil.com </span><br/>
                                        <span className="fs-4">userAccType: Saveing </span><br/>
                                        <span className="fs-4">userBranchName: Vikhroli </span><br/>
                                        <span className="fs-4">userIFSC: PSL00001</span><br/>
                                        <span className="fs-4">accountNumber: 4512369870 </span><br/>
                                        <span className="fs-4">createAt: 08/02/2023 </span><br/>
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
