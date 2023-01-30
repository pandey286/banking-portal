import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./component/Login";
import Services from "./component/Services";
import ContactForm from "./component/ContactForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


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
            <Route path="*" element={<Error />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
