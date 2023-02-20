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
import UserDashBoard from "./components/Dashboard/User/UserDashBoard";
import Header from "./components/Registration/Header";
import HomeLoan from "./components/LoanComponents/homeloan";
import EductionLoan from "./components/LoanComponents/eductionloan";
import PersonalLoan from "./components/LoanComponents/personalloan";
import GoldLoan from "./components/LoanComponents/goldloan";
import AdminDashBoard from "./components/Dashboard/Admin/AdminDashBoard";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ViewTrans from "./components/Dashboard/User/UserDashBoardFunction/ViewTransaction";
import "../node_modules/@fortawesome/free-solid-svg-icons/faBars"
import '../src/css/style.css';
import ForgetPass from "./components/Logins/ForgetPassword/ForgetPassword";
import AccountInfo from "./components/Dashboard/User/UserDashBoardFunction/AccountInfo";
import CardMan from "./components/Dashboard/User/UserDashBoardFunction/CardManage";
import LoanApp from "./components/Dashboard/User/UserDashBoardFunction/LoanApp";
import Faq from "./components/Dashboard/User/UserDashBoardFunction/Faq";
import AllCustomer from "./components/Dashboard/Admin/AdminFunction/SeeAllCustomer";
import CustomerLoan from "./components/Dashboard/Admin/AdminFunction/CustomerLoanApp";
import CustomerCard from "./components/Dashboard/Admin/AdminFunction/CustomerCardApp";
import Beneficiaries from "./components/Dashboard/User/UserDashBoardFunction/Beneficiary";
import AdminLogin from "./components/Dashboard/Admin/AdminLogin";
import DepositInUser from "./components/Dashboard/Admin/AdminFunction/DepositInUser";
import Dummy from "./components/dummy";


function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            <Route path="/services" element={<Services />} />
            <Route path="/contactUs" element={<ContactForm />} />
            <Route path="/aboutUs" element={<AboutUs />}></Route>
            <Route path='/Header' element={<Header />} />
            <Route path='/gold-loan' element={<GoldLoan />} />
            <Route path='/home-loan' element={<HomeLoan />} />
            <Route path='/personal-loan' element={<PersonalLoan />} />
            <Route path='/education-loan' element={<EductionLoan />} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpass" element={<ForgetPass/>}/>
          <Route path="/userdash" element={<UserDashBoard />} />
          <Route path='/register' element={<Register />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admindash" element={<AdminDashBoard />} />
          <Route path="/admindash/allcustomer" element={<AllCustomer />} />
          <Route path="/admindash/customer-loan" element={<CustomerLoan />} />
          <Route path="/admindash/customer-card" element={<CustomerCard />} />
          <Route path="/admindash/deposit" element={<DepositInUser />} />
          <Route path="/userdash/viewtrans" element={<ViewTrans/>}/>
          <Route path="/userdash/accountInfo" element={<AccountInfo/>}/>
          <Route path="/userdash/card" element={<CardMan/>}/>
          <Route path="/userdash/loanApp" element={<LoanApp/>}/>
          <Route path="/userdash/beneficiary" element={<Beneficiaries/>}/>
          <Route path="/userdash/faq" element={<Faq/>}/>
          <Route path="/dummy" element={<Dummy/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
