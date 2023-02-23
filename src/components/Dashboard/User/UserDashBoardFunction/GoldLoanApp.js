import React, { useState, useEffect } from "react";
import axios from "axios";
import "../user.css"
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiGoldBar } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaHome, FaUserAlt, FaRegCreditCard, FaRupeeSign, FaWpforms, FaQuestionCircle, FaUserPlus } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico";
import swal from "sweetalert";



const GoldLoanApp = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const [weight, setWeight] = useState(0);
    const [karat, setKarat] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanAmount, setLoanAmount] = useState(0);
  
    const marketRate = 5000; // Assuming Rs. 5000 per gram of gold
    const loanToValueRatio = 0.8; // Assuming the loan amount is 80% of the gold's market value
  
    const handleWeightChange = (event) => {
      setWeight(parseFloat(event.target.value));
    };
  
    const handleKaratChange = (event) => {
      setKarat(parseInt(event.target.value));
    };
  
    const handleInterestRateChange = (event) => {
      setInterestRate(parseFloat(event.target.value));
    };
  
    const calculateLoanAmount = () => {
      const purity = karat / 24;
      const value = weight * marketRate * purity;
      const interest = (interestRate / 100) * value;
      const totalValue = value + interest;
      const loanAmount = totalValue * loanToValueRatio;
      setLoanAmount(loanAmount);
    };
  

    const setCookie = (name, value, days) => {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    const [info, setInfo] = useState({});

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('accountInfo'));
        if (storedData) {
          setInfo(storedData);
        }
      }, []);
      
    console.log(info);

    
    const [formData, setFormData] = useState({
        userFullName: '',
        email: '',
        userPhoneNo: '',
        accountNo: '',
        aadharNo: '',
        goldweight:'', 
        goldloanAmountInRupees:'',
        userAddress: ''
    });

    const [emailData, setEmailData] = useState({
        to: '',
        subject: '',
        body: ''
    });

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

        setEmailData({
            ...emailData,
            to: formData.email,
            subject: `Application for Gold Loan: ${formData.userFullName}`,
            body: `Thank You Applying for Gold Loan from PSL Bank Online Platform.You have Applied for ${formData.userLoanType} with following Details
            FullName: ${formData.userFullName},
            Email: ${formData.email},
            Phone Number: ${formData.userPhoneNo},
            Gold weight(gm):  ${formData.goldweight}
            Account Number:  ${formData.accountNo}
            Aadhar Number: ${formData.aadharNo}
            GoldLoan Amount : ${formData.goldloanamount},
            Your Address: ${formData.userAddress},
            We Will let you know by Email if you card application have been approve or decline.`
        })
    };

    const goldloanUrl = "http://localhost:8080/api/users/apply-goldloan"
    const notificationurl = "http://localhost:8080/api/v1/notifications"


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(goldloanUrl, formData);
            setCookie("goldData", JSON.stringify(response.data), 7);
            swal({
                title: "GoldLoan application succesfully submitted!! ",
                text: "You have successfully applied for Goldloan",
                icon: "success",
            })
            const notification = await axios.post(notificationurl, emailData)
            // console.log(response.data);
        } catch (error) {
            swal({
                title: "Goldloan application failed!! ",
                text: "Please try later",
                icon: "warning",
            })
            console.error(error);
        }
    };

    return (

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
                    <section>
                        <div className='card ms-5 me-5'>
                            <div className="card-header fw-bold text-center">
                                <h1 className="title">Gold Loan Calculator</h1>
                            </div>
                            <div className="card-body row d-flex justify-content center">
                                <div className="col-md-6 mb-4">
                                    <span className='fs-4 fw-bold'>Weight (gm) : </span>
                                </div>
                                <div className="form-outline col-md-6 mb-4">
                                    <input className="input form-control form-control-lg" type="number" value={weight} onChange={handleWeightChange} placeholder='Loan Amount' />
                                </div>

                                <div className="col-md-6 mb-4">
                                    <span className='fs-4 fw-bold'>Interest Rate (%):</span>
                                </div>
                                <div className="form-outline col-md-6 mb-4">
                                    <input className="input form-control form-control-lg" type="number" value={interestRate} onChange={handleInterestRateChange} placeholder='Interset Rate' />
                                </div>

                                <div className="col-md-6 mb-4">
                                    <span className='fs-4 fw-bold '>Gold Quality (karat):</span>
                                </div>
                                <div className="form-outline col-md-6 mb-4">
                                    <input className="input form-control form-control-lg" type="number" value={karat} onChange={handleKaratChange} placeholder='Loan Term' />
                                </div>
                                <div className="col-md-12 mb-4 text-center">
                                    <button className="btn btn-outline-info col-md-6 fw-bold" onClick={calculateLoanAmount}>
                                        Calculate
                                    </button>
                                </div>
                                <div className="card-footer text-center fw-bold fs-4">
                                    <span className="payment">GoldLoan Amount: Rs. {loanAmount.toFixed(2)} ₹</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="card">
                        <div className="card-header fs-2 fw-bold text-white bg-dark"> Apply For Gold Loan <GiGoldBar /></div>
                        <div className="card-body d-flex col">
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <input type="text" id="name" className="form-control form-control-lg" placeholder='Enter FullName' name="userFullName" onChange={handleChange} />
                                </div>
                                <div className="form-outline col-md-6 mb-4">
                                    <input type="text" id="email" className="form-control form-control-lg" placeholder='Enter Email' name="email" onChange={handleChange} />
                                </div>
                                <div className="form-outline col-md-6 mb-4">
                                    <input type="text" id="mobileNo" className="form-control form-control-lg" placeholder='Enter Phone No' name="userPhoneNo" onChange={handleChange} />
                                </div>
                                <div className="form-outline col-md-6 mb-4">
                                    <input type="text" id="accountNo" className="form-control form-control-lg" placeholder='Enter Account No' name="accountNo" onChange={handleChange} />
                                </div>
                                <div className="form-outline col-md-6 mb-4">
                                    <input type="text" id="aadharNo" className="form-control form-control-lg" placeholder='Enter Aadhar No' name="aadharNo" onChange={handleChange} />
                                </div>
                                <div className="form-outline col-md-6 mb-4">
                                    <input type="number" id="goldWeight" className="form-control form-control-lg" placeholder='Enter Gold weight(gm)' name="goldweight" onChange={handleChange} />
                                </div>
                                <div className="form-outline col-md-6 mb-4">
                                    <input type="text" id="loanAmount" className="form-control form-control-lg" placeholder='Goldloan amount(Rupees)' name="goldloanAmountInRupees" onChange={handleChange} />
                                </div>
                                <div className="form-outline col-md-6 mb-4">
                                    <input type="text" id="address" className="form-control form-control-lg" placeholder='Enter Address' name="userAddress" onChange={handleChange} />
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <button className="btn btn-outline-primary col-md-4 mt-3" type="submit" onClick={handleSubmit}>Apply</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default GoldLoanApp;