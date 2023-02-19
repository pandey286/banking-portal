import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "../.././Admin/admindash.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FaHome, FaUserAlt, FaRegCreditCard, FaWpforms } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico"
import { RiLuggageDepositFill } from 'react-icons/ri'

let SuccessIcon = { color: "green" };
let FailedIcon = { color: "red" };

const AllCustomer = () => {

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

    const [Data, setUserData] = useState(getCookie("adminData"));
    useEffect(() => {
        const cookieValue = JSON.parse(getCookie("adminData"));
        setUserData(cookieValue);
    }, []);

    return (
        <>
            <div className="wrapper">
                {/* <!-- Sidebar  --> */}
                <nav id="sidebar" className={sidebarOpen ? "active" : ""}>
                    <div className="sidebar-header fs-5">
                        <Link className="list-item d-flex" to="/userdash">
                            <FaUserAlt className="me-3 mt-1" />
                            <span >{Data.adminName}</span>
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
                    <div className="text-center fs-1 mb-5">All the Customer </div>
                    <div className="card">
                        <div className="card-body">
                            <input type="text" id="pan" className="form-control" placeholder='Search Customer by Account Number' />
                            <div className="d-flex justify-content-center pt-3">
                                <button type="button" className="btn-sm btn btn-secondary m-auto"> Search </button>
                            </div>

                        </div>
                    </div>


                    <div className="card">
                        <div className="card-body">
                            <div className="col data-table mt-4">
                                <table className="table bg-white shadow-sm  text-center table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col">Acc no.</th>
                                            <th scope="col">User_Name</th>
                                            <th scope="col">User_Email</th>
                                            <th scope="col">Adhar_Card</th>
                                            <th scope="col">PAN_Card</th>
                                            <th scope="col">Transactions</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Contact_Info</th>
                                            <th scope="col">DOB</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>TRANS0000012</td>
                                            <td>@zoro</td>
                                            <td>zoro12@example.com</td>
                                            <td>7726-8766-2983</td>
                                            <td>KJQP0890L</td>
                                            <td>TRANS0000012</td>
                                            <td><AiFillCheckCircle style={SuccessIcon} /></td>
                                            <td>1234567897</td>
                                            <td>08.3.1999</td>
                                            <td>Male</td>
                                            <td>Bangalore,India</td>
                                            <td>
                                                <button type="button" className="btn-sm btn btn-success m-1"> Approve</button>
                                                <button type="button" className="btn-sm btn btn-danger m-1"> Deny </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AllCustomer;