import React from "react";
import { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "../.././Admin/admindash.css"
import { GiHamburgerMenu,GiGoldBar } from "react-icons/gi";
import { BiLogOut,BiTransfer } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { RiLuggageDepositFill } from 'react-icons/ri'
import { FaHome, FaUserAlt, FaRegCreditCard, FaWpforms, FaQuestionCircle } from "react-icons/fa";
import Kakashi from "../../../../images/NavbarImages/kakashi.ico"
import axios from "axios";
import * as XLSX from "xlsx";


const Neft = () => {

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

    const [adminData, setAdminData] = useState(getCookie("adminData"));
    useEffect(() => {
        const cookieValue = JSON.parse(getCookie("adminData"));
        setAdminData(cookieValue);
    }, []);
    

    const [items,setItems] = useState([]);

    const readExcel =(file) =>{
        const promise = new Promise((resolve,reject) =>{
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file)

            fileReader.onload =(e) => {
                const bufferArray = e.target.result;
                
                const wb = XLSX.read(bufferArray, {type: 'buffer'})
                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname];

                const data =XLSX.utils.sheet_to_json(ws);

                resolve(data);
            };


            fileReader.onerror=(error) => {
                reject(error);
            };   
         });

         promise.then((d) => {
            setItems(d);
         })
    };

    const saveDataToDatabase = async () => {
        try {
          // Make POST request to backend API endpoint to save data
          const response = await axios.put('http://localhost:8080/api/neft/save', items);
          console.log(response.data); // log response data from server
        } catch (error) {
          console.error(error); // log any errors
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
                            <span >{adminData.adminName}</span>
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
                            <Link className="list-item d-flex" to="/admindash/accNo-Ifsc">
                                <BsPeopleFill className="me-3 mt-1" />
                                <span>Search AccountNo and IFSC</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/customer-kyc">
                                <FaQuestionCircle className="me-3 mt-1" />
                                <span>Customer Kyc Details</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/all-transactions">
                                <BiTransfer className="me-3 mt-1" />
                                <span>All Transactions</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/transactions-date">
                                <BiTransfer className="me-3 mt-1" />
                                <span>Transactions By Date</span>
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
                            <Link className="list-item d-flex" to="/admindash/usergoldloan-app">
                                <GiGoldBar className="me-3 mt-1" />
                                <span>User Gold Loan Appliaction</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/approved-loan">
                                <FaWpforms className="me-3 mt-1" />
                                <span>Approved Gold Loan</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/deposit">
                                <RiLuggageDepositFill className="me-3 mt-1" />
                                <span>Deposit In User Account</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="list-item d-flex" to="/admindash/neft">
                                <RiLuggageDepositFill className="me-3 mt-1" />
                                <span>Upload a Neft File</span>
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
                        <input type = "file" className="m-4" onChange={(e)=>{
                            const file = e.target.files[0];
                            readExcel(file);
                        }} />
                    </div>

                     <div>
                        <table className="table table-hover table-responsive">
                            <thead className="table-dark text-light">
                                <tr>
                                    <th scope="col">IFSC Code</th>
                                    <th scope="col">Branch Code</th>
                                    <th scope="col">Account Number</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((data) => (
                                    <tr key ={data.Id}>
                                    <td>{data.IFSCCode}</td>
                                    <td>{data.BranchCode}</td>
                                    <td>{data.AccountNo}</td>
                                    <td>{data.Amount}</td>
                                    {/* <td><button type="button" className="btn-sm btn btn-info m-1">Upload</button></td> */}
                                </tr>))}
                            </tbody>
                        </table>
                        <button className="btn-outline-primary" onClick={saveDataToDatabase}>Save Data</button>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default Neft;