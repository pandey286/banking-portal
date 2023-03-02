import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Kakashi from "../images/NavbarImages/kakashi.ico";




const Navbar = () => {
    return (
        
        <header className="header-container p-2">
            <nav className="navbar fixed-top navbar-expand-lg box-shadow mb-3 bg-white">
                <div className="container-fluid">
                    <div className='d-flex justify-content-center'> <Link className='navbar-brand fst-italic fs-3' to='/'><img className='mb-1' src={Kakashi} width="30px"/><span className='ps-2 mt-5'>PSL Bank</span></Link></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active fs-5 " to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 " to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 " to="/contactUs">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 " to="/aboutUs">About Us</NavLink>
                            </li>
                        </ul>
                        <div className="dropdown me-4">
                            <button className="btn btn-outline-primary dropdown-toggle m-2 shadow mb-2" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                <small className='me-5'>LOGIN</small>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark " aria-labelledby="dropdownMenuButton2">
                                <li className='pe-2 text-center'><a className="dropdown-item" href="/login"> <small className='me-3'>User Login </small> </a></li>
                                <li className='pe-2 text-center'><a className="dropdown-item" href="/adminlogin"> <small className='me-3'>Admin Login </small> </a></li>
                            </ul>
                        </div>
                    </div>
               </div>
            </nav>
        </header>



    );
}

export default Navbar;