import React, { useRef, useState, useEffect } from "react";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { Link } from "react-router-dom";
import "../user.css"
import { GiHamburgerMenu, GiGoldBar } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
import { FaHome, FaUserAlt, FaRegCreditCard, FaRupeeSign, FaWpforms, FaQuestionCircle, FaUserPlus } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico";
import "jspdf-autotable";
import axios from "axios";



const Upload = () => {
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

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        axios.post('/api/upload-image', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    //   const express = require('express');
    //const multer = require('multer');
    //const upload = multer({ dest: 'uploads/' });

    //const app = express();

    //app.post('/api/upload-image', upload.single('image'), (req, res) => {
    // const file = req.file;
    //console.log(file);
    //res.send({ message: 'Image uploaded successfully' });
    //});

    //app.listen(3000, () => {
    //  console.log('Server started on port 3000');
    //});



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
                            <Link className="list-item d-flex" to="/userdash/KYC">
                                <FaUserAlt className="me-3 mt-1" />
                                <span>Upload KYC</span>
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
                            <Link className="list-item d-flex" to="/userdash/goldloanApp">
                                <GiGoldBar className="me-3 mt-1" />
                                <span>Apply For Gold Loan</span>
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
                        <h3 className="m-5">Upload KYC Details</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 grid-margin stretch-card align-middle">
                            <div className="card">
                                <div className="card-header bg-secondary fs-1 fw-bold text-white bg-dark">
                                    Upload Aadhar Card <FaAddressCard />
                                </div>
                                <div className="card-body row  d-flex ">
                                    <div className="form-outline col-md-6 mb-4">
                                        <input type="file" id="aadhar" className="form-control form-control-lg" placeholder='Aadhar Card' name="email" onChange={handleImageUpload} />
                                        <button className="btn btn-outline-secondary col-md-4 mt-3">Upload</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header bg-secondary fs-1 fw-bold text-white bg-dark">
                                    Upload PAN Card <FaAddressCard />
                                </div>
                                <div className="card-body row  d-flex ">
                                    <div className="form-outline col-md-6 mb-4">
                                        <input type="file" id="pan" className="form-control form-control-lg" placeholder='PAN Card' name="email" onChange={handleImageUpload} />
                                        <button className="btn btn-outline-secondary col-md-4 mt-3">Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-outline-primary" type="button">Upload</button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Upload