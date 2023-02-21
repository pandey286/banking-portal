import React from "react";
import { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "../.././Admin/admindash.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { RiLuggageDepositFill } from 'react-icons/ri'
import { FaHome, FaUserAlt, FaRegCreditCard, FaWpforms,FaQuestionCircle } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico"


const CustomerCard = () => {

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
    
    const [CardData, setCardData] = useState(getCookie("cardAppl"));
    useEffect(() => {
        const cookieValue = JSON.parse(getCookie("cardAppl"));
        setCardData(cookieValue);
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

                    <div>
                        <table className="table table-hover table-responsive">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">FullName</th>
                                    <th scope="col">Date Of Birth</th>
                                    <th scope="col">Phone Number </th>
                                    <th scope="col">Gender </th>
                                    <th scope="col">Profession </th>
                                    <th scope="col">Card Type </th>
                                    <th scope="col">Card</th>
                                    <th scope="col">Address </th>
                                    <th scope="col">Status </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">{CardData.title}</td>
                                    <td>{CardData.userFullName}</td>
                                    <td>{CardData.dob}</td>
                                    <td>{CardData.userPhoneNo}</td>
                                    <td>{CardData. userGender}</td>
                                    <td>{CardData. userProfession}</td>
                                    <td>{CardData.userCardType}</td>
                                    <td>{CardData.userCard}</td>
                                    <td>{CardData.userAddress}</td>
                                    <td>
                                        <button type="button" className="btn-sm btn btn-success m-1"> Approve</button>
                                        <button type="button" className="btn-sm btn btn-danger m-1"> Deny </button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                </div>
            </div>
        </>

    )
}

export default CustomerCard;