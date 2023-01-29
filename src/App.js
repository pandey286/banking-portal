import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./component/Login";

function App(props) {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Home" element={<Home />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Error />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </main>

  );
}

export default App;
