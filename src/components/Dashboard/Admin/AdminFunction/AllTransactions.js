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
import _ from "lodash";

const pageSize = 5;

const AllTransactions = () => {

    // To Trigger the Menu
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


    const tableRef = useRef(null);

    const generatePdf = () => {
        const doc = new jsPDF();
        const imgData = "https://www.goodreturns.in/img/2019/11/csbbanklogo-1574336687.jpeg";
        //const pdfWidth = pdf.internal.pageSize.getWidth();
        doc.addImage(imgData, "JPEG", 4, 4, 25, 10);
        doc.autoTable({ html: "#my-table" });
        doc.save("All_Transactions.pdf");
    };

    // Pagination Part
    const [posts, setposts] = useState();
    const [pageinated, setPaginated] = useState();
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        axios.get(`http://localhost:8080/api/transactions/all-transactions`).then(res => {
            console.log(res.data);
            setposts(res.data);
            setPaginated(_(res.data).slice(0).take(pageSize).value())
        })
    }, [])
    const pageCount = posts ? Math.ceil(posts.length / pageSize) : 0;
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1)

    const pagination = (pageNo) => {
        setCurrentPage(pageNo);
        const startIndex = (pageNo - 1) * pageSize;
        const pageinated = _(posts).slice(startIndex).take(pageSize).value();
        setPaginated(pageinated);
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
                                <span>Approved Loan</span>
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
                    <div className="text-center fs-2 mb-5 fw-bold">All the Transactions</div>
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
                                {!pageinated ? ("No Data Found") : (pageinated.map((post, index) => (
                                    <tr key={index}>
                                        <td>{post.transType}</td>
                                        <td>{post.transStatus}</td>
                                        <td>{post.transAmount}</td>
                                        <td>{post.currBalance}</td>
                                        <td>{post.prevBalance}</td>
                                        <td>{post.beneAccountNumber}</td>
                                        <td>{post.userAccountNumber}</td>
                                        <td>{post.transDate}</td>
                                        <td>{post.beneficiaryName}</td>
                                    </tr>
                                )))}
                            </tbody>
                        </table>
                        <nav className="d-flex justify-content-end">
                            <ul className="pagination">
                                {
                                    pages.map((page) => (
                                        <li className={page === currentPage ? "page-item active" : "page-item"}><p className="page-link" onClick={() => pagination(page)} >{page}</p></li>
                                    ))
                                }
                            </ul>
                        </nav>
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

export default AllTransactions;