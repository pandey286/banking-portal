import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../.././Admin/admindash.css"
import { GiHamburgerMenu,GiGoldBar } from "react-icons/gi";
import { BiLogOut, BiTransfer } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FaHome, FaUserAlt, FaRegCreditCard, FaWpforms, FaQuestionCircle } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico"
import { RiLuggageDepositFill } from 'react-icons/ri'
import axios from "axios";
import swal from "sweetalert";


const DepositInUser = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

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

    const [adminData, setAdminData] = useState(getCookie("adminData"));
    useEffect(() => {
        const cookieValue = JSON.parse(getCookie("adminData"));
        setAdminData(cookieValue);
    }, []);

    const [formData, setFormData] = useState({

        userAccountNumber: '',
        balance: ''

    })

    const handleFormData = (event) => {
        let Data = {
            ...formData,
            [event.target.name]: event.target.value
        }
        setFormData(Data);
    };

    const depositMoney = async (event) => {
        let userAccountNumber = formData.userAccountNumber
        const debitUrl = `http://localhost:8080/api/customers/add-balance/${userAccountNumber}`;

        const res = await axios.put(debitUrl, formData)
            .then(res => {
                console.log(res.data);
                setFormData(res.data);
                swal({
                    title: "Deposit In User Account",
                    text: "Money was deposit successfully",
                    icon: "success"
                })
            })
            .catch(err => {
                console.log(err);
                swal({
                    title: "Failed to deposit",
                    text: "Check the Field",
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
                            <span >{adminData.adminName}</span>
                        </Link>
                    </div>
                    <ul className="list-unstyled components">
                        <li>
                            <Link className="list-item d-flex" to="/admindash">
                                <FaHome className="me-3 mt-1" />
                                <span >Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/allcustomer">
                                <BsPeopleFill className="me-3 mt-1" />
                                <span>All Customer</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/accNo-Ifsc">
                                <BsPeopleFill className="me-3 mt-1" />
                                <span>Search AccountNo and IFSC</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/customer-kyc">
                                <FaQuestionCircle className="me-3 mt-1" />
                                <span>Customer Kyc Details</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/all-transactions">
                                <BiTransfer className="me-3 mt-1" />
                                <span>All Transactions</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/transactions-date">
                                <BiTransfer className="me-3 mt-1" />
                                <span>Transactions By Date</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/customer-card">
                                <FaRegCreditCard className="me-3 mt-1" />
                                <span>Customer Card Application </span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/customer-loan">
                                <FaWpforms className="me-3 mt-1" />
                                <span>Customer Loan Application</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/usergoldloan-app">
                                <GiGoldBar className="me-3 mt-1" />
                                <span>User Gold Loan Appliaction</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/approved-loan">
                                <FaWpforms className="me-3 mt-1" />
                                <span>Approved Gold Loan</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/deposit">
                                <RiLuggageDepositFill className="me-3 mt-1" />
                                <span>Deposit In User Account</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/neft">
                                <RiLuggageDepositFill className="me-3 mt-1" />
                                <span>Upload a Neft File</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/customer-query">
                                <FaQuestionCircle className="me-3 mt-1" />
                                <span>Query from User</span>
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

                    <section>
                        <div class="card ">
                            <div class="card-header bg-dark text-white text-center fw-bold fs-4">
                                Deposit Page
                            </div>
                            <div class="card-body justify-content-center">
                                <form>
                                    <div className="form-outline col-md-6 my-4 m-auto">
                                        <input type="text" id="form3Example1n" className="form-control form-control-lg" placeholder='Account Number' onChange={handleFormData} name='userAccountNumber' required />
                                    </div>
                                    <div className="form-outline col-md-6 my-4 m-auto">
                                        <input type="number" id="form3Example1n" className="form-control form-control-lg" placeholder='Enter Amount' onChange={handleFormData} name='balance' required />
                                    </div>
                                    <div className="form-outline col-md-6 my-4 m-auto text-center">
                                        <button type="button" className="btn btn-outline-success shadow mb-3" onClick={depositMoney}>Deposit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>

    )
}

export default DepositInUser;