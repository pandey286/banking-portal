import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../user.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaHome, FaUserAlt, FaRegCreditCard, FaRupeeSign, FaWpforms, FaQuestionCircle, FaUserPlus } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico"
import axios from "axios";
import swal from "sweetalert";

const CardMan = () => {
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

    // Get data from cookies user data
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

    const [Data, setUserData] = useState(getCookie("userData"));
    useEffect(() => {
        const cookieValue = JSON.parse(getCookie("userData"));
        setUserData(cookieValue);
    }, []);

    const [formData, setFormData] = useState({

        title: '',
        userFullName: '',
        email: '',
        dob: '',
        userPhoneNo: '',
        userGender: '',
        userProfession: '',
        userCardType: '',
        userCard: '',
        userAddress: '',
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
            subject: `Application for ${formData.userCard}`,
            body: `Thank You Applying for  ${formData.userCard} from PSL Bank Online Platform.You have Applied for ${formData.userCard} with following Drtails
            Name:${formData.userFullName},
            Email:${formData.email},
            Date of Brth:${formData.dob},
            Phone Number:${formData.userPhoneNo},
            Profession:${formData.userProfession},
            Card-Type:${formData.userCardType},
            Card:${formData.userCard},
            Address: ${formData.userAddress},
            We Will let you know by Email if you card application have been approve or decline.`
        })
    };

    const cardUrl = "http://localhost:8080/api/users/apply-card"
    const notificationurl = "http://localhost:8080/api/v1/notifications"

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(cardUrl, formData);
            const notification = await axios.post(notificationurl, emailData)
            setCookie("cardAppl", JSON.stringify(response.data), 7);
            swal({
                title: "Card Application Succesfully!! ",
                text: "You have Successfully applied for a Card",
                icon: "success",
            })
            // console.log(response.data);
        } catch (error) {
            swal({
                title: "Card Application Failed!! ",
                text: "Pleas try later",
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
                            <span >{Data.userFirstName}{Data.userLastName}</span>
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
                            <div className="card-header fs-2 fw-bold text-white bg-dark"> Apply For Card</div>
                            <div className="card-body d-flex col">
                                <div className="row">
                                    <div className="col-xl-5">
                                        <img src="https://images.samsung.com/is/image/samsung/assets/in/samsung-card/slider-mob-31.jpg?$ORIGIN_JPG$" className="img-fluid" />
                                    </div>
                                    <div className="col-xl-7 mt-3 ">
                                        <div className="row">
                                            <div className="col-md-3 mb-4">
                                                <div className="form-outline">
                                                    <select id="Loan" className="select form-control form-control-lg" placeholder='Loan' name="title" onChange={handleChange}>
                                                        <option selected>Title</option>
                                                        <option value="Mr.">Mr.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-outline col-md-9 mb-4">
                                                <input type="text" id="name" className="form-control form-control-lg" placeholder='Full-Name' onChange={handleChange} name="userFullName" />
                                            </div>

                                            <div className="form-outline col-md-6 mb-4" >
                                                <span className="fs-4">Date Of Birth:- </span>
                                            </div>
                                            <div className="form-outline col-md-6 mb-4" >
                                                <input type="date" id="monthlyIncome" className="form-control form-control-lg" onChange={handleChange} name="dob" />
                                            </div>
                                            <div className="form-outline col-md-6 mb-4" >
                                                <input type="text" id="mobileNo" className="form-control form-control-lg" placeholder='Phone No' onChange={handleChange} name="userPhoneNo" />
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <select id="gender" className="select form-control form-control-lg" placeholder='Gender' onChange={handleChange} name="userGender">
                                                        <option selected>Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Other">Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <select id="profession" className="select form-control form-control-lg" placeholder='profession' onChange={handleChange} name="userProfession">
                                                        <option selected>Profession</option>
                                                        <option value="self-employeed">Self-Employeed</option>
                                                        <option value="salaried">Salaried</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <select id="cardtype" className="select form-control form-control-lg" placeholder='Card Type' onChange={handleChange} name="userCardType">
                                                        <option selected>Card Type</option>
                                                        <option value="platinum">Platinum</option>
                                                        <option value="gold">Gold</option>
                                                        <option value="silver">Silver</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <select id="cardtype" className="select form-control form-control-lg" placeholder='Card Type' onChange={handleChange} name="userCard">
                                                        <option selected>Card</option>
                                                        <option value="platinum">Credit-Card</option>
                                                        <option value="gold">Debit-Card</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-outline col-md-6 mb-4">
                                                <input type="text" id="email" className="form-control form-control-lg" placeholder='Enter Email' onChange={handleChange} name="email" />
                                            </div>
                                            <div className="form-outline col-md-12 mb-4">
                                                <input type="text" id="address" className="form-control form-control-lg" placeholder='Address' onChange={handleChange} name="userAddress" />
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
                </div>
            </div>
        </>
    )
}

export default CardMan;