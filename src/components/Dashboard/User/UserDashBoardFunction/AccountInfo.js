import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../user.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaHome, FaUserAlt, FaRegCreditCard, FaRupeeSign, FaWpforms, FaQuestionCircle, FaUserPlus } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico"
import swal from 'sweetalert';
import axios from "axios";

const AccountInfo = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }
    
    // Get data from cookies
    const getCookie = (name) => {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    const [Data, setUserData] = useState(getCookie("userData"));
    useEffect(() => {
        const cookieValue = JSON.parse(getCookie("userData"));
        setUserData(cookieValue);
    }, []);


// Update Phone, AltPhone and Address
    const [editMode, setEditMode] = useState(false);

    const [formData, setFormData] = useState({
        userAddress: "",
        userPhoneNo: "",
        userAltPhoneNo: "",
    });

    const updateData = () => {
        setEditMode(true);
    }

    const handleFormData = (event) => {
        let Data = {
            ...formData,
            [event.target.name]: event.target.value
        }
        setFormData(Data);
    };

    const saveData = async (event) => {
        
        let email = Data.email;
        const url = `http://localhost:8080/api/customers/user-update/${email}`;

        const res = await axios.put(url, formData)
        .then(res => {
            console.log(res.data);
            setFormData(res.data);
            swal({
                title: "Updated Succesfully",
                text:"You have Re-Login into Your Account",
                icon: "success"
              }).then(() => {
                window.location.href = "/login"; 
              }); 
        })
        .catch(err => {
            console.log(err);
            swal({
                title: "Update Failed",
                text: "Invalid Data! please check the data",
                icon: "warning",
                dangerMode: true,
            });
        })
    }


    return (
        <>

            <div className="wrapper">
                {/* <!-- Sidebar  --> */}
                <nav id="sidebar" className={sidebarOpen ? "active" : ""}>
                    <div className="sidebar-header fs-5">
                        <Link className="list-item d-flex" to="/userdash">
                            <FaUserAlt className="me-3 mt-1" />
                            <span >{Data.userFirstName}{Data.userLastName}</span>
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

                    <div className="m-5" id="page-content">
                        <div className="row">
                            <div className="col-lg-12 grid-margin stretch-card align-middle">
                                <div className="card">
                                    <div className="card-header bg-secondary fs-1">
                                        Account Information
                                    </div>
                                    <div className="card-body row  d-flex ">
                                        <div className="col-md-6"><p>First Name :-</p></div><div className="col-md-6 justify-content-end"><p>{Data.userFirstName}</p></div>

                                        <div className="col-md-6"><p>Last Name :-</p></div><div className="col-md-6 justify-content-end"><p>{Data.userLastName}</p></div>

                                        <div className="col-md-6"><p>Date Of Birth :-</p></div><div className="col-md-6 justify-content-end"><p>{Data.userDOB}</p></div>

                                        <div className="col-md-6"><p>Phone Number :-</p></div>{editMode ? (<input type="text" name="userPhoneNo" onChange={handleFormData} />) : (
                                            <div className="col-md-6 justify-content-end"><p>{Data.userPhoneNo}</p></div>)}

                                        <div className="col-md-6"><p> Alternate Phone Number :-</p></div>{editMode ? (<input type="text" name="userAltPhoneNo" onChange={handleFormData} />) : (
                                            <div className="col-md-6 justify-content-end"><p>{Data.userAltPhoneNo}</p></div>)}

                                        <div className="col-md-6"><p> Address :-</p></div>{editMode ? (<input type="text" name="userAddress" onChange={handleFormData} />) : (
                                            <div className="col-md-6 justify-content-end"><p>{Data.userAddress}</p></div>)}

                                        <div className="col-md-6"><p>Aadhar-Card Number :-</p></div>
                                        <div className="col-md-6 justify-content-end"><p>{Data.userAadharNo}</p></div>

                                        <div className="col-md-6"><p>PAN Number :-</p></div>
                                        <div className="col-md-6 justify-content-end"><p>{Data.userPAN}</p></div>

                                        <div className="col-md-6"><p>Gender :-</p></div>
                                        <div className="col-md-6 justify-content-end"><p>{Data.userGender}</p></div>

                                        <div className="col-md-6"><p>Nationality :-</p></div>
                                        <div className="col-md-6 justify-content-end"><p>{Data.userNationality}</p></div>

                                        <div className="col-md-6"><p>Email :-</p></div>
                                        <div className="col-md-6 justify-content-end"><p>{Data.email}</p></div>

                                        <div className="col-md-6"><p>Account-Type :-</p></div>
                                        <div className="col-md-6 justify-content-end"><p>{Data.userAccType}</p></div>

                                        <div className="col-md-6"><p>Branch-Name :-</p>
                                        </div><div className="col-md-6 justify-content-end"><p>{Data.userBranchName}</p></div>

                                        <div className="col-md-6"><p>IFSC :-</p>
                                        </div><div className="col-md-6 justify-content-end"><p>{Data.userIFSC}</p></div>

                                        <div className="col-md-6"><p>Account Nummber :-</p></div>
                                        <div className="col-md-6 justify-content-end"><p>{Data.userAccountNumber}</p></div>

                                        <div className="col-md-6"><p>Creation Date :-</p></div>
                                        <div className="col-md-6 justify-content-end"><p>{Data.createAt}</p></div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-center">
                                        <button type="submit" className="btn btn-outline-warning shadow p-1 mt-3 mb-3 rounded-1" onClick={updateData}>
                                            <Link to="" className="text-dark p-3" style={{ textDecoration: "none" }}>Update</Link></button><br />
                                        <button type="submit" className="btn btn-outline-primary shadow p-1 mt-3 ms-3 mb-3 rounded-1" onClick={saveData}>
                                            <Link to="" className="text-dark p-3" style={{ textDecoration: "none" }}>Save</Link></button><br />
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <ul>
                                            <p className="text-danger fw-bold">Please Note That Right Now You Can Only Update</p>
                                            <li>Your Phone Number</li>
                                            <li>Your Alternate Phone Number</li>
                                            <li>And, Your Address for Now</li>
                                        </ul>
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
