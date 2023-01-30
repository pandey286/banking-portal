import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiLotus } from "react-icons/gi";



const Navbar = () => {
    return (
        <header className="header-container p-2">
            <nav className="navbar navbar-transparent fixed-top navbar-expand-lg shadow mb-3 bg-white">
                <div className="container-fluid">
                    <Link className='navbar-brand fst-italic fs-3' to='/'><GiLotus /> PSL Bank</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active " to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active " to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active " to="/contactForm">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active " to="/aboutUs">About Us</NavLink>
                            </li>
                        </ul>
                        <button className="btn btn-outline-primary m" type="button"><NavLink className="nav-link text-dark" to="/login">Login</NavLink></button>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Navbar;