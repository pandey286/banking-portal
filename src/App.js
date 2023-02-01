import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Home from "./components/HomeComponent/Home";
import Login from "./components/Logins/Login";
import Services from "./components/ServicesPage/Services";
import ContactForm from "./components/ContactUs/ContactForm";
import AboutUs from "./components/AboutUs";
import Register from "./components/Registration/Register";
import UserDashBoard from "./components/Dashboard/UserDashBoard";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../src/css/style.css';
import Header from "./components/Registration/Header";
import HomeLoan from "./components/LoanComponents/homeloan";
import EductionLoan from "./components/LoanComponents/eductionloan";
import PersonalLoan from "./components/LoanComponents/personalloan";
import GoldLoan from "./components/LoanComponents/goldloan";


function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contactUs" element={<ContactForm/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}></Route>
            <Route path='/register' element={<Register/>} />
            <Route path='/Header' element={<Header/>} />
            <Route path='/gold-loan' element={<GoldLoan/>}/>
            <Route path='/home-loan' element={<HomeLoan/>}/>
            <Route path='/personal-loan' element={<PersonalLoan/>}/>
            <Route path='/education-loan' element={<EductionLoan/>}/>
            <Route path="*" element={<Error />}/>
          </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/userdash" element={<UserDashBoard/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
