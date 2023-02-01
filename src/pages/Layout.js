import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/footer";
import Login from "../components/Logins/Login";
import Navbar from "../components/Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
           
            <div className="main-container">
            <Outlet />
            <Footer/>
            </div>
           
        </>
    )
}

export default Layout;