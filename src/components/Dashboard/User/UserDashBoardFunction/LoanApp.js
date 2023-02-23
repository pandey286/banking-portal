import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../user.css"
import { GiHamburgerMenu, GiGoldBar } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaHome, FaUserAlt, FaRegCreditCard, FaRupeeSign, FaWpforms, FaQuestionCircle, FaUserPlus } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico"
import axios from "axios";
import swal from "sweetalert";

const LoanApp = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

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
        userLoanType: '',
        userFullName: '',
        email: '',
        userPhoneNo: '',
        loanAmountInRupees: '',
        monthlyIncome: '',
        annualIncome: '',
        userProfession: '',
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
            subject: `Application for ${formData.userLoanType}`,
            body: `Thank You Applying for  ${formData.userLoanType} from PSL Bank Online Platform.You have Applied for ${formData.userLoanType} with following Details
            Loan Type: ${formData.userLoanType},
            FullName: ${formData.userFullName},
            Email: ${formData.email},
            Phone Number: ${formData.userPhoneNo},
            Loan Amount You Want: ${formData.loanAmountInRupees},
            Your Monthly Income: ${formData.monthlyIncome},
            YourAnuual Income: ${formData.annualIncome},
            Your Profession: ${formData.userProfession},
            Your Address: ${formData.userAddress},
            We Will let you know by Email if you card application have been approve or decline.`
        })
    };

    const loanUrl = "http://localhost:8080/api/users/apply-loan"
    const notificationurl = "http://localhost:8080/api/v1/notifications"

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(loanUrl, formData);
            const notification = await axios.post(notificationurl, emailData)
            setCookie("loanAppl", JSON.stringify(response.data), 7);
            swal({
                title: "Loan application succesfully submitted!! ",
                text: "You have Successfully applied for Loan",
                icon: "success",
            })
            // console.log(response.data);
        } catch (error) {
            swal({
                title: "Loan Application Failed!! ",
                text: "Please try later",
                icon: "warning",
            })
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
                            <div className="card-header fs-2 fw-bold text-white bg-dark"> Apply For Loan</div>
                            <div className="card-body d-flex col">
                                <div className="row">
                                    <div className="col-xl-5">
                                        <img src="https://www.hdbfs.com/themes/custom/hdbfs/images/new-img/Business-Loan.webp" className="img-fluid" />
                                    </div>
                                    <div className="col-xl-7 mt-3">
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <select id="Loan" className="select form-control form-control-lg" placeholder='Loan' name="userLoanType" onChange={handleChange}>
                                                        <option selected>Select Loan Type</option>
                                                        <option value="Home Loan">Home Loan</option>
                                                        <option value="Education Loan">Education Loan</option>
                                                        <option value="Business Loan">Business Loan</option>
                                                        <option value="Gold Loan">Gold Loan</option>
                                                        <option value="Vehical Loan">Vehical Loan</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="text" id="name" className="form-control form-control-lg" placeholder='Full-Name' name="userFullName" onChange={handleChange}/>
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="text" id="email" className="form-control form-control-lg" placeholder='Enter Email' name="email" onChange={handleChange}/>
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="text" id="mobileNo" className="form-control form-control-lg" placeholder='Phone No' name="userPhoneNo" onChange={handleChange} />
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="text" id="loanAmount" className="form-control form-control-lg" placeholder='Loan Amount In Rupees' name="loanAmountInRupees" onChange={handleChange} />
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="text" id="monthlyIncome" className="form-control form-control-lg" placeholder='Monthly Income' name="monthlyIncome" onChange={handleChange} />
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="text" id="annualIncome" className="form-control form-control-lg" placeholder='Annual Income' name="annualIncome" onChange={handleChange} />
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <select id="profession" className="select form-control form-control-lg" placeholder='profession' name="userProfession" onChange={handleChange}>
                                                        <option selected>Profession</option>
                                                        <option value="self">Self-Employeed</option>
                                                        <option value="salary">Salaried</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="text" id="annualIncome" className="form-control form-control-lg" placeholder='Address' name="userAddress" onChange={handleChange} />
                                            </div>
                                            <div className="row d-flex justify-content-center">
                                                <button className="btn btn-outline-primary col-md-4 mt-3" type="submit"  onClick={handleSubmit}>Apply</button>
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

export default LoanApp;