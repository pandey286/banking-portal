import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../user.css"
import { GiHamburgerMenu, GiGoldBar } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { FaHome, FaUserAlt, FaRegCreditCard, FaRupeeSign, FaWpforms, FaQuestionCircle, FaUserPlus } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico"
import axios from 'axios';

const Beneficiaries = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    const [formData, setFormData] = useState({

        name: '',
        userAccountNumber: '',
        beneAccountNumber: '',
        ifscCode: '',
        bankName: '',
        branchName: '',
        accountType: '',
        createdAt: '',
        updatedAt: '',
    });

    const resetFormData = () => {
        setFormData({
            name: '',
            userAccountNumber: '',
            beneAccountNumber: '',
            ifscCode: '',
            bankName: '',
            branchName: '',
            accountType: '',
            createdAt: '',
            updatedAt: '',
        });
    };

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const url = "http://localhost:8080/api/transactions/beneficiary"



    // const [beneData, setbeneData] = useState([]);
    // const [info, setInfo] = useState({});

    // useEffect(() => {
    //     const storedData = JSON.parse(localStorage.getItem('accountInfo'));
    //     if (storedData) {
    //         setInfo(storedData);
    //     }
    // }, []);

    // console.log(info);

    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:8080/api/transactions/details/${info.userAccountNumber}`)
    //         .then((response) => {
    //             console.log(response.data);
    //             setbeneData(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });

    // }, []);

    const [beneData, setbeneData] = useState([]);
    const [info, setInfo] = useState({});

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('accountInfo'));
        if (storedData) {
            setInfo(storedData);
        }
    }, []);

    console.log(info);

    useEffect(() => {
        if (info.userAccountNumber) {
            axios
                .get(`http://localhost:8080/api/transactions/details/${info.userAccountNumber}`)
                .then((response) => {
                    console.log(response.data);
                    setbeneData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [info]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(url, formData);
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
                        <div className="card">
                            <div className="card-header bg-secondary fs-1 fw-bold text-white bg-dark">
                                Add Beneficiary <FaUserPlus />
                            </div>
                            <div className="card-body d-flex col">
                                <div className="row">
                                    <div className="col-xl-12 mt-3 ">
                                        <div className="row">
                                            <div className="form-outline col-md-6 mb-4">

                                                <input type="text" name="name" onChange={handleChange} id="form3Example1m" className="form-control form-control-lg" placeholder='Beneficiary Full-Name' />
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="text" name="userAccountNumber" id="userAccNo" onChange={handleChange} className="form-control form-control-lg" placeholder='User Account Number' />
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="text" name="beneAccountNumber" id="accountNo" onChange={handleChange} className="form-control form-control-lg" placeholder='Beneficiary Account Number' />
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="text" name="ifscCode" id="ifscCode" onChange={handleChange} className="form-control form-control-lg" placeholder='IFSC Code' />
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="text" name="bankName" id="bankName" onChange={handleChange} className="form-control form-control-lg" placeholder='Bank Name' />
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="text" name="branchName" id="BranchLocation" onChange={handleChange} className="form-control form-control-lg" placeholder='Branch Location' />
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="text" name="accountType" id="accountType" onChange={handleChange} className="form-control form-control-lg" placeholder='Account Type' />
                                            </div>
                                            <div className="row">
                                                <div className="form-outline col-md-6 mb-4">
                                                    <span className="fs-4">Created at : </span>
                                                </div>
                                                <div className="form-outline col-md-6 mb-4">
                                                    <input type="datetime-local" name="createdAt" id="creationDay" onChange={handleChange} className="form-control form-control-lg" />
                                                </div>
                                                <div className="form-outline col-md-6 mb-4">
                                                    <span className="fs-4">Updated at : </span>
                                                </div>
                                                <div className="form-outline col-md-6 mb-4">
                                                    <input type="datetime-local" name="updatedAt" id="updationDay" onChange={handleChange} className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                            <div className="row d-flex justify-content-center">
                                                <button type="reset" onClick={resetFormData} className="btn btn-outline-warning col-md-2 m-2" >Reset</button>
                                                <button className="btn btn-outline-primary col-md-2 m-2" type="submit" onClick={handleSubmit}>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <table className="table table-hover table-responsive">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">FullName </th>
                                        <th scope="col">Account Number</th>
                                        <th scope="col">Bene. Account Number</th>
                                        <th scope="col">IFSC Code </th>
                                        <th scope="col">Bank Name</th>
                                        <th scope="col">Branch Name</th>
                                        <th scope="col">Account Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {beneData.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>{data.userAccountNumber}</td>
                                            <td>{data.beneAccountNumber}</td>
                                            <td>{data.ifscCode}</td>
                                            <td>{data.bankName}</td>
                                            <td>{data.branchName}</td>
                                            <td>{data.accountType}</td>
                                        </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Beneficiaries;