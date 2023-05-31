
import React from 'react';
import  "./App.css";
// import LoginPage from  "./Component/LoginPage";
// import LogoutPage from './Component/LogoutPage';
import {Routes,Route, Link} from "react-router-dom";
import Home from "./Component/Home"
import About from './Component/About';
import Contact from './Component/Contact';
import Image from "./images/comp.png";



const App = () => {

  return (

<div>
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
</li>
  <li>
    <Link to="/Contact">Contact</Link>
</li>
  
</ul>


    <Routes>
   <Route path="/" element={<Home/>}    img src={Image} className="images" alt="loading"/>     
    <Route path="/about" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    
    </div>

     
      
   
  );
};

export default App;


    