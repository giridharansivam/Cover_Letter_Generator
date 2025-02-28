import React, { useState, useEffect } from 'react';
import {  Brand,Navbar } from './components'
import { Builder,Footer,Header } from './containers'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import PdfReader from './pages/resumeBuilder/resumeBuilder'
import Profile from './pages/Profile/Profile';
import CoverLetterGenerator from './pages/coverLetterGenerator/coverletterGenerator'
import Home from './pages/Home/Home'
import Contact from './pages/contact/Contact'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import { auth } from './Firebase';  // Make sure to import auth from Firebase
import GetStarted from './pages/GetStarted/GetStarted'
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial login status
  

  // Check if the user is already logged in when the app starts
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

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
          <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Protect Profile route */}
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <SignIn setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/" element={isLoggedIn ? <Profile /> : <SignIn setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
          
          
       </div>
     </div>
   </Router>
  );
};

export default App

