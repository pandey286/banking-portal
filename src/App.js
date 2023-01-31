import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Home from "./components/HomeComponent/Home";
import Login from "./components/Logins/Login";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import AboutUs from "./components/AboutUs";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../src/css/style.css';


function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contactform" element={<ContactForm/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}></Route>
            <Route path="*" element={<Error />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
