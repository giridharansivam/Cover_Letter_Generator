import React, { useState } from 'react'

import {  Brand,Navbar } from './components'
import { Builder,Footer,Header } from './containers'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import PdfReader from './pages/resumeBuilder/resumeBuilder'
import CoverLetterGenerator from './pages/coverLetterGenerator/coverletterGenerator'
import Home from './pages/Home/Home'
import Contact from './pages/contact/Contact'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import GetStarted from './pages/GetStarted/GetStarted'
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial login status
  return (
    
     <Router>
     <div className="App">
       <div className="gradient__bg">
       {isLoggedIn && <Navbar />}
  
        <Routes>
            <Route path="/frontEnd" element={<GetStarted />} />
          </Routes>
         <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/resumebuilder" element={<><PdfReader /><Footer/></>} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<><Contact /><Footer /></>} />
          </Routes>
          <Routes>
          <Route path="/SignIn" element={<><SignIn setIsLoggedIn={setIsLoggedIn} /></>} />
          </Routes>
          <Routes>
            <Route path="/signUp" element={<><SignUp/></>} />
          </Routes>
          
          
       </div>
     </div>
   </Router>
  );
};

export default App

