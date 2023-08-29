import logo from "./logo.svg";
import "./App.css";
import NavBar from "./pageDir/NavBar";
import Login from "./pageDir/Login";
import HomeBF from "./pageDir/HomeBF";
import HomeBeforeBF from "./pageDir/HomeBeforeBF";
import { Routes, Route } from "react-router-dom";
import ApplyGroup from "./pageDir/ApplyGroup";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomeBF />}></Route>
        <Route path="/beforeBF" element={<HomeBeforeBF />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/applyGroup" element={<ApplyGroup />}></Route>
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
