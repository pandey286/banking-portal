import React from "react";
import Nav from "../Navbar";
import { Link } from "react-router-dom";
// import "./userdash.css"
// import "./wizard.css"


const UserDashBoard = () => {
    return (
        <>
        <Nav/>

        <div className="d-flex mt-3 ps-1 " id="wrapper">

            <div className="bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading fw-bold border-bottom">
                    <img src="" alt="" width="30px" />
                    <span className="px-2">Welcome User</span>
                </div>
                <div className="list-group my-3">

                    <Link className="list-item" to="#">
                        <i className="fa fa-user-circle me-2"></i>
                        <span>Account Information</span>
                    </Link>
                    <Link className="list-item" to="#">
                        <i className="fa fa-credit-card"></i>
                        <span>Cards Management </span>
                    </Link>
                    <Link className="list-item" to="#">
                        <i className="fa fa-inr me-2"></i>
                        <span>View Transactions</span>
                    </Link>
                    <Link className="list-item" to="#">
                        <i className="fa fa-file-text me-2"></i>
                        <span>Apply for loans</span>
                    </Link>
                    <Link className="list-item" to="#">
                        <i className="fa fa-cog me-2"></i>
                        <span>Settings</span>
                    </Link>
                    <Link className="list-item" to="#">
                        <i className="fa fa-phone me-2"></i>
                        <span>Contact Us</span>
                    </Link>
                    <Link className="list-item" to="/login">
                        <i className="fas fa-power-off me-2"></i>
                        <span>Logout</span>
                    </Link>
                </div>
            </div>

            <div id="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                    <div className="d-flex align-items-center">
                        <h3 className="m-0">Dashboard</h3>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </nav>

                <div className="container-fluid px-4 mt-4">
                    <div className="container row g-3"></div>
                    <div className="cur-bal p-3 bg-white shadow-sm">
                        <h5>Available Balance : 0.00</h5>
                    </div></div>

                <div className="container-fluid px-4 mt-4">
                    <div className="row g-3">
                        <div className="transac">

                            <div className="newtran p-3 bg-white shadow-sm">
                                <div className="radio">
                                    <div className="form-check p-4">
                                        <input type="radio" className="form-check-input item" id="radio1" name="optradio" value="option1" checked />Quick Transfer
                                        <label className="form-check-label" for="radio1"></label>
                                    </div>
                                    <div class="form-check p-4">
                                        <input type="radio" className="form-check-input item" id="radio2" name="optradio" value="option2" />NEFT Transfer
                                        <label className="form-check-label" for="radio2"></label>
                                    </div>
                                </div>

                                <form className="form-card">
                                    <p className="p">Pay new Beneficiary - Enter new Beneficiary details</p>
                                    Name <input type="text" />
                                    Account Number <input type="text" />
                                    Re-Enter Account Number <input type="text" />
                                    IFSC Code <input type="text" />
                                    Enter Amount <input type="text" />
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">Make Transaction</button>
                                    </div>
                                </form>


                            </div>

                            <div className="viewAll">

                                <div className="col m-4">
                                    <h5 className="mb-4">Recent Transactions</h5>
                                    <table className="table bg-white shadow-sm  text-center table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Transaction Id</th>
                                                <th scope="col">Transaction Date</th>
                                                <th scope="col">Beneficiary</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>TRANS0000012</td>
                                                <td></td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td className="fa fa-check-circle success"></td>
                                            </tr>
                                            <tr>
                                                <td>TRANS0007718</td>
                                                <td></td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td className="fa fa-times-circle failed"></td>
                                            </tr>
                                            <tr>
                                                <td>TRANS0000012</td>
                                                <td></td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td className="fa fa-check-circle success"></td>
                                            </tr>
                                            <tr>
                                                <td>TRANS0007718</td>
                                                <td></td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td className="fa fa-times-circle failed"></td>
                                            </tr>
                                            <tr>
                                                <td>TRANS0000012</td>
                                                <td></td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td className="fa fa-check-circle success"></td>
                                            </tr>
                                            <tr>
                                                <td>TRANS0007718</td>
                                                <td></td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td className="fa fa-times-circle failed"></td>
                                            </tr>
                                            <tr>
                                                <td>TRANS0000012</td>
                                                <td></td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td className="fa fa-check-circle success"></td>
                                            </tr>
                                            <tr>
                                                <td>TRANS0007718</td>
                                                <td></td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td className="fa fa-times-circle failed"></td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default UserDashBoard;