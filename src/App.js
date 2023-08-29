import logo from "./logo.svg";
import "./App.css";
import NavBar from "./pageDir/NavBar";
import Login from "./pageDir/Login";
<<<<<<< Updated upstream
import HomeBF from "./pageDir/HomeBF";
import HomeBeforeBF from "./pageDir/HomeBeforeBF";
import {Routes, Route} from 'react-router-dom';
import ApplyGroup from './pageDir/ApplyGroup';
=======
import HomeBeforeBF from "./pageDir/HomeBeforeBF";
import HomeBF from "./pageDir/HomeBF";
>>>>>>> Stashed changes

function App() {
  return (
    <div>
      <NavBar></NavBar>
<<<<<<< Updated upstream
      <Routes>
        <Route path="/" element={<HomeBF/>}></Route>
        <Route path="/beforeBF" element={<HomeBeforeBF/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/applyGroup" element={<ApplyGroup/>}></Route>
      </Routes>
=======
      <HomeBF />
>>>>>>> Stashed changes
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
