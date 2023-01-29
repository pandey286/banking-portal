import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiLotus } from "react-icons/gi";



const Navbar = () => {
    return (
        <header class="header-container">
            <nav class="navbar navbar-nav navbar-expand-lg bg-warning">
                <div class="container-fluid">
                    <Link className='navbar-brand fst-italic fs-3' to='/'><GiLotus /> PSL Bank</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="nav-link active fs-5" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link active fs-5" to="/services">Services</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link active fs-5" to="/contactUs">Contact Us</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link active fs-5" to="/aboutUs">About Us</NavLink>
                            </li>
                        </ul>
                        <button class="btn btn-primary" type="button"><NavLink className="nav-link fs-5 text-light" to="/login">Login</NavLink></button>
                    </div>
                </div>
            </nav>

        </header>
    );
}

export default Navbar;