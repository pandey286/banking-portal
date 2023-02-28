import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../user.css"
import { GiHamburgerMenu, GiGoldBar } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaHome, FaUserAlt, FaRegCreditCard, FaRupeeSign, FaWpforms, FaQuestionCircle, FaUserPlus } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico";
import "jspdf-autotable";
import axios from "axios";
import swal from "sweetalert";


const Upload = () => {
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



    const [aadharImg, setAadharImg] = useState(null);
    const [panImg, setPanImg] = useState(null);

    const handleAadharImgUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setAadharImg(reader.result);
        };
    };

    const handlePanImgUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPanImg(reader.result);
        };
    };

    const addKyc = (event) => {
        event.preventDefault();
        const url = `http://localhost:8080/api/customers/add-kyc/${info.userAccountNumber}`;

        const formData = new FormData();
        formData.append("aadharImg", dataURLtoFile(aadharImg, 'aadharImg.png'));
        formData.append("panImg", dataURLtoFile(panImg, 'panImg.png'));

        axios.put(url, formData)
            .then(res => {
                console.log(res.data)
                setAadharImg(null)
                setPanImg(null)
                swal({
                    title: "Updated Successfully",
                    text: "You have registered your account",
                    icon: "success"
                })
            })
            .catch(err => {
                console.log(err);
                swal({
                    title: "Not Updated",
                    text: "Invalid Data!",
                    icon: "warning",
                    dangerMode: true,
                });
            })
    }

    const dataURLtoFile = (dataurl, filename) => {
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
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
                        <p className="fw-bold mb-2 ms-4"><i className="fa fa-user me-2"></i> Welcome {info.userName}</p>
                        <div className='alert alert-info m-4' role='alert'>Upload Aadhaar / PAN Docs ("Should be under 60KB")</div>
                        <div className="cur-bal bg-white p-4 m-4">
                            <div className="row">
                                <div className="col">
                                    <p className="ms-2">Upload Aadhaar : </p>
                                    <input type="file" className="p-2" name="userAadharImg" onChange={handleAadharImgUpload} />
                                    {aadharImg ? (
                                        <img src={aadharImg} alt="Aadhaar" className="mt-4" width="300" />
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="col">
                                    <p className="ms-2">Upload PAN : </p>
                                    <input type="file" className="p-2" name="userPanImg" onChange={handlePanImgUpload} />
                                    {panImg ? (
                                        <img src={panImg} alt="PAN" className="mt-4" width="300" />
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-sm btn-primary text-center p-3 text-uppercase" onClick={addKyc}>Upload</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Upload