import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../user.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaHome, FaUserAlt, FaRegCreditCard, FaRupeeSign, FaWpforms, FaQuestionCircle } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico"

const CardMan = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <>
           <div className="wrapper">
                 {/* <!-- Sidebar  --> */}
                <nav id="sidebar" className={sidebarOpen ? "active" : ""}>
                    <div className="sidebar-header fs-5">
                        <Link className="list-item d-flex" to="/userdash">
                            <FaUserAlt className="me-3 mt-1" />
                            <span >UserEmail</span>
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
                    <div className="card">
                            <div className="card-header fs-2 "> Apply For Card</div>
                            <div className="card-body d-flex col">
                                <div className="row">
                                    <div className="col-xl-5">
                                        <img src="https://images.samsung.com/is/image/samsung/assets/in/samsung-card/slider-mob-31.jpg?$ORIGIN_JPG$" className="img-fluid" />
                                    </div>
                                    <div className="col-xl-7 mt-3 ">
                                        <div className="row">
                                            <div className="col-md-3 mb-4">
                                                <div className="form-outline">
                                                    <select id="Loan" className="select form-control form-control-lg" placeholder='Loan'>
                                                        <option selected>Title</option>
                                                        <option value="Mr">Mr.</option>
                                                        <option value="Mrs">Mrs.</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-outline col-md-9 mb-4">
                                                <input type="text" id="name" className="form-control form-control-lg" placeholder='Full-Name' />
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                               <span className="fs-4">Date Of Birth:- </span>
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="date" id="monthlyIncome" className="form-control form-control-lg"  />
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="text" id="mobileNo" className="form-control form-control-lg" placeholder='Phone No' />
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <select id="gender" className="select form-control form-control-lg" placeholder='Gender'>
                                                        <option selected>Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="other">Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <select id="profession" className="select form-control form-control-lg" placeholder='profession'>
                                                        <option selected>Profession</option>
                                                        <option value="self">Self-Employeed</option>
                                                        <option value="salary">Salaried</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <select id="cardtype" className="select form-control form-control-lg" placeholder='Card Type'>
                                                        <option selected>Card Type</option>
                                                        <option value="platinum">Platinum</option>
                                                        <option value="gold">Gold</option>
                                                        <option value="silver">Silver</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-outline col-md-12 mb-4">
                                                <input type="text" id="address" className="form-control form-control-lg" placeholder='Address' />
                                            </div>
                                            <div className="row d-flex justify-content-center">
                                                <button className="btn btn-outline-primary col-md-4 mt-3" type="submit">Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardMan;