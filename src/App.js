// import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Home from "./modules/home/index1";

// import ForgetPassword from "./modules/authflow/forget password";
import Header from "./components/header";
import Container from "./container/container";
import Resetpassword from "./modules/authflow/reset pass";
import Home1 from "./modules/home/index";

function App() {
  // const token=localStorage.getItem("token")
  return (
    <div style={{ height: "100vh" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Container />}/>
          <Route path="/inde" element={<Home />} />
 
          {/* <Route path="/forgetPassword" element={<ForgetPassword />} /> */}
          {/* <Route path="/reset" element={<Resetpassword />} /> */}
          <Route path="/home" element={< Home1/>}></Route>
          <Route path="/header" element={<Header />} />
          <Route path="/main" element={<Container />} />
          

<Route path="/accountverify" element={<Resetpassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
