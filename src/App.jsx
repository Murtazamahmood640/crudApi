import React from "react";
import NavBar from "./component/Navbar/NavBar";
import About from "./component/About/About";
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import Sheraz from "./component/Sheraz/Sheraz";
const user =  localStorage.getItem('user')
if(user){
  const myUser = JSON.parse(user)
  console.log(myUser.name)
}
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
        <Route path="/" element={
          <Secure>
            <Sheraz />
          </Secure>
        } />

        <Route path="/navbar" element={<NavBar />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
const Secure =({children})=>{
  return user?(
    <Navigate to ='/about' />
  ):
    (
      children
    )
}
export default App;
