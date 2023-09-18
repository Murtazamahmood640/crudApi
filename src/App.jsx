import React from "react";
import NavBar from "./component/Navbar/NavBar";
import About from "./component/About/About";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sheraz from "./component/Sheraz/Sheraz";

const App = () => {
  // const myName = "jhon doe";
  // const check = {
  //   name: "sheraz",
  //   karachi: "karacahi",
  // };
  // return (
  //   <div>
  //     <img src="" />
  //     <NavBar name={myName} abc={check} />
  //     <About name={myName} />
  //   </div>
  // );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sheraz />} />

        <Route path="/navbar" element={<NavBar />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
