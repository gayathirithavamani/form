import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Home from "./modules/home";

import ForgetPassword from "./modules/authflow/forget password";
import Header from "./components/header";
import Container from "./container/container";


function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
 
          <Route path="/forgetPassword" element={<ForgetPassword />} />
       
          <Route path="/header" element={<Header />} />
          <Route path="/main" element={<Container />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
