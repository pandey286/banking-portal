import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../.././Admin/admindash.css"
import { GiHamburgerMenu, GiGoldBar } from "react-icons/gi";
import { BiLogOut, BiTransfer } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FaHome, FaUserAlt, FaRegCreditCard, FaWpforms, FaQuestionCircle } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico"
import { RiLuggageDepositFill } from 'react-icons/ri'
import axios from "axios";
import swal from "sweetalert";


const UserGoldLoanApp = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const [emailData, setEmailData] = useState({
        to: '',
        subject: '',
        body: ''
    });


    const notificationurl = "http://localhost:8080/api/v1/notifications"


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

    const [approvedLoanData, setApprovedLoanData] = useState([]);


    const [goldInfo, setGoldInfo] = useState({});

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('goldData'));
        if (storedData) {
            setGoldInfo(storedData);
        }
    }, []);

    console.log(goldInfo);

    const [goldLoanData, setgoldData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/users/all-users-gold-loan-request")
            .then((response) => {
                const approvedLoans = response.data.filter((loan) => loan.status === "Approved");
                setgoldData(response.data);
                setApprovedLoanData(approvedLoans);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);



    console.log(goldLoanData);

    const sendApprovalEmail = async () => {
        const emailData = {
            to: goldInfo.email,
            subject: `Gold Loan Application Approved`,
            body: `Dear ${goldInfo.userFullName},
      
          We are pleased to inform you that your application for a gold loan has been approved. The details of your loan are as follows:
      
          Gold Weight: ${goldInfo.goldweight} gm
          Loan Amount: Rs. ${goldInfo.goldloanAmountInRupees}
      
          Thank you for choosing PSL Bank for your financial needs.
      
          Best regards,
          The PSL Bank Team`
        };

        try {
            const response = await axios.post(notificationurl, emailData);
            swal("Loan Approved", "Mail Has Been Send To User", "success");
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const sendDenialEmail = async () => {
        // First delete the record from backend
        try {
            await axios.delete(`http://localhost:8080/api/users/goldloan-application/${goldInfo.id}`);
            console.log(`Gold loan request with ID ${goldInfo.id} deleted successfully`);
        } catch (error) {
            console.error(`Error deleting gold loan request with ID ${goldInfo.id}:`, error);
            return; // exit the function if delete request fails
        }

        // If delete request was successful, send email notification
        const emailData = {
            to: goldInfo.email,
            subject: `Gold Loan Application Denied`,
            body: `Dear ${goldInfo.userFullName},
      
          We regret to inform you that your application for a gold loan has been denied. 
      
          Thank you for considering PSL Bank for your financial needs.
      
          Best regards,
          The PSL Bank Team`
        };

        try {
            const response = await axios.post(notificationurl, emailData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
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


                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button type="button" onClick={toggleSidebar} id="sidebarCollapse" className="btn btn-outline-dark align-middle">
                                <GiHamburgerMenu />
                            </button>
                            <h3><span><img className='mb-1' src={Kakashi} width="30px" /></span><strong>PSL Bank Ltd.</strong></h3>
                        </div>
                    </nav>

                    <div>
                        <table className="table table-hover table-responsive">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">FullName </th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone Number </th>
                                    <th scope="col">Account Number</th>
                                    <th scope="col">AadharNo </th>
                                    <th scope="col">Gold weight(gm)</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {goldLoanData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.userFullName}</td>
                                        <td>{data.email}</td>
                                        <td>{data.userPhoneNo}</td>
                                        <td>{data.accountNo}</td>
                                        <td>{data.aadharNo}</td>
                                        <td>{data.goldweight}</td>
                                        <td>{data.goldloanAmountInRupees}</td>
                                        <td>{data.userAddress}</td>
                                        <td>
                                            <button type="button" className="btn-sm btn btn-outline-success m-1" onClick={sendApprovalEmail}> Approve</button>
                                            <button type="button" className="btn-sm btn btn-outline-danger m-1" onClick={sendDenialEmail}> Deny </button>
                                        </td>
                                    </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    )
}
export default UserGoldLoanApp;