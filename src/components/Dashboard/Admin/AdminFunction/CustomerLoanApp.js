import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../.././Admin/admindash.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FaHome, FaUserAlt, FaRegCreditCard, FaWpforms } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico"


const CustomerLoan = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div className="wrapper">
                {/* <!-- Sidebar  --> */}
                <nav id="sidebar" className={sidebarOpen ? "active" : ""}>
                    <div className="sidebar-header fs-5">
                        <Link className="list-item d-flex" to="/userdash">
                            <FaUserAlt className="me-3 mt-1" />
                            <span >Admin</span>
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

                    <div className="container">
                        <h2 className="text-center">Application For Loan</h2>
                        <div className="card mt-5">
                            <div className="card-body fs-4">
                                <div className="card-body row  d-flex ">
                                    <div className="col-md-6"><p>Selected Loan Type:-</p></div><div className="col-md-6 justify-content-end"><p>Home Loan</p></div>
                                    <div className="col-md-6"><p>FullName :-</p></div><div className="col-md-6 justify-content-end"><p>John Doe</p></div>
                                    <div className="col-md-6"><p>Phone Number :-</p></div><div className="col-md-6 justify-content-end"><p>9974567890</p></div>
                                    <div className="col-md-6"><p>Loan Ammount In Rupees :-</p></div><div className="col-md-6 justify-content-end"><p>15,00,000</p></div>
                                    <div className="col-md-6"><p>Monthly Income :-</p></div><div className="col-md-6 justify-content-end"><p>65,000</p></div>
                                    <div className="col-md-6"><p>Annual Income :-</p></div><div className="col-md-6 justify-content-end"><p>7,80,000</p></div>
                                    <div className="col-md-6"><p>Profession :-</p></div><div className="col-md-6 justify-content-end"><p>Salaried</p></div>
                                    <div className="col-md-6"><p>Address :-</p></div><div className="col-md-6 justify-content-end"><p>Thane</p></div>
                                </div>
                            </div>
                            <div className="card-footer">
                            <button className="btn btn-outline-success col-md-4 m-3" type="submit">Approve</button> 
                            <button className="btn btn-outline-danger col-md-4 m-3" type="submit">Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CustomerLoan;