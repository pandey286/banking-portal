import React, { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../.././Admin/admindash.css"
import { GiHamburgerMenu, GiGoldBar } from "react-icons/gi";
import { BiLogOut, BiTransfer } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FaHome, FaUserAlt, FaRegCreditCard, FaWpforms, FaQuestionCircle } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico"
import { RiLuggageDepositFill } from 'react-icons/ri'
import jsPDF from "jspdf";
import "jspdf-autotable";


const TransactionData = () => {

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
        startDate: '',
        endDate: '',
        userAccountNumber: ''
    });
    
    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    
    const [transData, setTransData] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/transactions/date-range/${formData.startDate}/${formData.endDate}/${formData.userAccountNumber}`)
            .then((response) => {
                console.log(response.data);
                setTransData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [formData]);
    


    const tableRef = useRef(null);

    const generatePdf = () => {
        const doc = new jsPDF();
        const imgData = "https://www.goodreturns.in/img/2019/11/csbbanklogo-1574336687.jpeg";
        //const pdfWidth = pdf.internal.pageSize.getWidth();
        doc.addImage(imgData, "JPEG", 20, 4, 25, 10);
        doc.autoTable({ html: "#my-table" });
        doc.save("Trans_from-to.pdf");
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
                            <Link className="list-item d-flex" to="/admindash/deposit">
                                <RiLuggageDepositFill className="me-3 mt-1" />
                                <span>Deposit In User Account</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/customer-query">
                                <FaQuestionCircle className="me-3 mt-1" />
                                <span>Query from User</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/usergoldloan-app">
                                <GiGoldBar className="me-3 mt-1" />
                                <span>User Gold Loan Appliaction</span>
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
                    <div className="text-center fs-4 mb-5 fw-bold"> Transactions by date</div>
                    <div className="card ">
                        <div className="card-header fw-bold text-white bg-dark fs-5">
                            Search User
                        </div>
                        <div className="card-body d-flex row">
                            <div className="row justify-content-center">
                                <div className="col-md-8  mb-4">
                                    <input type="text" id="acc_no" className="form-control col-6" placeholder='Enter account number' name="userAccountNumber" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-2">
                                    <span className="text-end fs-4 m-4">Choose Date From:</span>
                                </div>
                                <div className="col-md-6  mb-2">
                                    <input type="date" id="start_date" className="form-control col-6 me-3" placeholder='Choose start date' name="startDate" onChange={handleChange} />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <span className="text-end fs-4 m-4">Choose Date To:</span>
                                </div>
                                <div className="col-md-6  mb-2">
                                    <input type="date" id="end_date" className="form-control col-6" placeholder='Choose end date' name="endDate" onChange={handleChange} />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col data-table mt-4">
                        <table className="table bg-white shadow-sm  text-center table-hover userTable" ref={tableRef} id="my-table">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Trans Type</th>
                                    <th scope="col">Trans Status</th>
                                    <th scope="col">Trans Amount</th>
                                    <th scope="col">Curr Balance</th>
                                    <th scope="col">Prev Balance</th>
                                    <th scope="col">Bene Acc_no</th>
                                    <th scope="col">User Acc_no</th>
                                    <th scope="col">Trans Date</th>
                                    <th scope="col">Beneficiary Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.transType}</td>
                                        <td>{data.transStatus}</td>
                                        <td>{data.transAmount}</td>
                                        <td>{data.currBalance}</td>
                                        <td>{data.prevBalance}</td>
                                        <td>{data.beneAccountNumber}</td>
                                        <td>{data.userAccountNumber}</td>
                                        <td>{data.transDate}</td>
                                        <td>{data.beneficiaryName}</td>
                                    </tr>))}
                            </tbody>
                        </table>
                        <div className="col-md-6 text-start">
                            <button type="submit" className="btn btn-outline-success shadow p-1 mb-5 rounded-1 justify-content-center" onClick={generatePdf}>
                                Generate Pdf</button>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default TransactionData;