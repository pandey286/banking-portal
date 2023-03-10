import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../.././Admin/admindash.css"
import { GiHamburgerMenu, GiGoldBar } from "react-icons/gi";
import { BiLogOut, BiTransfer } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaHome, FaUserAlt, FaRegCreditCard, FaWpforms, FaQuestionCircle } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico"
import { RiLuggageDepositFill } from 'react-icons/ri'
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

const CustomerKyc = () => {

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
    });

    const [userData, setUserData] = useState([]);
    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = `http://localhost:8080/api/customers/user-data/${formData.userAccountNumber}`;
        // console.log(url);
        try {
            const response = await axios.get(url);
            console.log(response.data);
            setUserData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(userData);


    const tableRef = useRef(null);

    const generatePdf = () => {
        const doc = new jsPDF();
        const imgData = "https://www.goodreturns.in/img/2019/11/csbbanklogo-1574336687.jpeg";
        //const pdfWidth = pdf.internal.pageSize.getWidth();
        doc.addImage(imgData, "JPEG", 4, 4, 25, 10);
        doc.autoTable({ html: "#my-table" });
        doc.save("User_Details.pdf");
    };
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
                    <div className="text-center fs-2 mb-5 fw-bold">Search by KYC details <FaAddressCard /></div>
                    <div className="card">
                        <div className="card-header fw-bold text-white bg-dark">
                            Search User
                        </div>
                        <div className="card-body row justify-content-center">
                            <div className="col-md-7 mb-2 justify-content-center">
                                <input type="text" id="user_id" className="form-control col-6" placeholder='Enter Account Number' name="userAccountNumber" onChange={handleChange} />
                            </div>

                            <div className="row d-flex justify-content-center">
                                <button className="btn btn-outline-secondary col-md-2 mt-3" onClick={handleSubmit}> Search </button>
                            </div>
                        </div>
                    </div>
                    <div className="col data-table mt-4">
                        <table className="table bg-white shadow-sm  text-center table-hover" ref={tableRef} id="my-table">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Acc no.</th>
                                    <th scope="col">User_Name</th>
                                    <th scope="col">Adhar_Card</th>
                                    <th scope="col">PAN_Card</th>
                                    <th scope="col">Contact_Info</th>
                                    <th scope="col">Bank IFSC</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{userData.userAccountNumber}</td>
                                    <td>{userData.userName}</td>
                                    <td>{userData.userAadharNo}</td>
                                    <td>{userData.userPAN}</td>
                                    <td>{userData.userPhoneNo}</td>
                                    <td>{userData.userIFSC}</td>
                                    <td>{userData.userAddress}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CustomerKyc;