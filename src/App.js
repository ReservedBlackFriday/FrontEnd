import logo from "./logo.svg";
import "./App.css";
import NavBar from "./pageDir/NavBar";
import Login from "./pageDir/Login";
import HomeBF from "./pageDir/HomeBF";
import HomeBeforeBF from "./pageDir/HomeBeforeBF";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ApplyGroup from "./pageDir/ApplyGroup";
import SignUp from "./pageDir/SignUp";
import BFProductDetail from "./components/BFProductDetail";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <NavBar isLogin={isLogin} setIsLogin={setIsLogin}></NavBar>
      <Routes>
        <Route path="/" element={<HomeBF />}></Route>
        <Route path="/beforeBF" element={<HomeBeforeBF />}></Route>
        <Route
          path="/login"
          element={<Login setIsLogin={setIsLogin} />}
        ></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/applyGroup" element={<ApplyGroup />}></Route>
        <Route path="/productDetail/:id" element={<BFProductDetail />}></Route>
      </Routes>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
