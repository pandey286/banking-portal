import React, { useRef, useState, useEffect } from "react";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { Link } from "react-router-dom";
import "../user.css"
import { GiHamburgerMenu, GiGoldBar } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaHome, FaUserAlt, FaRegCreditCard, FaRupeeSign, FaWpforms, FaQuestionCircle, FaUserPlus } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico";
import csb from "../../image/csb.jpeg"
import jsPDF from "jspdf";
import "jspdf-autotable";


let SuccessIcon = { color: "green" };
let FailedIcon = { color: "red" };
let Trans = { color: "white" };

const ViewTrans = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    const [info, setInfo] = useState({});

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('accountInfo'));
        if (storedData) {
          setInfo(storedData);
        }
      }, []);
      
    console.log(info);

    const tableRef = useRef(null);

    const generatePdf = () => {
        const doc = new jsPDF();
        // const img = new Image();
        const imgData = "https://www.goodreturns.in/img/2019/11/csbbanklogo-1574336687.jpeg";

        doc.addImage(imgData, "JPEG", 4, 4, 25, 10);
        doc.autoTable({ html: "#my-table" });
        doc.save("Mini_Statement.pdf");
    };


    return (
        <>
            <div className="wrapper">
                {/* <!-- Sidebar  --> */}
                <nav id="sidebar" className={sidebarOpen ? "active" : ""}>
                    <div className="sidebar-header fs-5">
                        <Link className="list-item d-flex" to="/userdash">
                            <FaUserAlt className="me-3 mt-1" />
                            <span >{info.userName}</span>
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
                            <Link className="list-item d-flex" to="/userdash/KYC">
                                <FaUserAlt className="me-3 mt-1" />
                                <span>Upload KYC</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/userdash/beneficiary">
                                <FaUserPlus className="me-3 mt-1" />
                                <span>Add Beneficiary</span>
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
                            <Link className="list-item d-flex" to="/userdash/goldloanApp">
                                <GiGoldBar className="me-3 mt-1" />
                                <span>Apply For Gold Loan</span>
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
                        <div className="row">
                            <div className="col-lg-12 grid-margin stretch-card align-middle">
                                <div className="card">
                                    <div className="card-header fw-bold text-white bg-dark fs-1">
                                        All Transaction <GrTransaction style={Trans} />
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive" >
                                            {/* <h3><span><img className='mb-1' src={Kakashi} width="30px" /></span><strong>PSL Bank Ltd.</strong></h3> */}
                                            <table className="table bg-white shadow-sm  text-center table-hover" ref={tableRef} id="my-table">
                                                <thead>
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
                                                    <tr>
                                                        <td>Debit</td>
                                                        <td>Success<AiFillCheckCircle style={SuccessIcon} /></td>
                                                        <td>$500</td>
                                                        <td>$1200</td>
                                                        <td>$1700</td>
                                                        <td>878745455577</td>
                                                        <td>098876756509</td>
                                                        <td>12-02-2023</td>
                                                        <td>John Doe</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center row">
                                    <div className="col-md-6 text-end">
                                        <button type="submit" className="btn btn-outline-warning shadow p-1 mb-5 rounded-1 justify-content-center">
                                            <Link to="/userdash" className="text-dark p-3" style={{ textDecoration: "none" }}><BiLogOut className="me-3" />Back To Home</Link></button><br />
                                    </div>
                                    <div className="col-md-6 text-start">
                                        <button type="submit" className="btn btn-outline-success shadow p-1 mb-5 rounded-1 justify-content-center" onClick={generatePdf}>
                                            Get Statement</button>
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

export default ViewTrans