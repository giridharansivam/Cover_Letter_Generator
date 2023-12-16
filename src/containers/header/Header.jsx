import React from 'react'
import './header.css'
import builder  from '../../assets/builder.png'
import Builder from '../builder/Builder';
import { Link, Route, Routes } from 'react-router-dom';
import SignUp from '../../pages/SignUp/SignUp';

const Header = () => (
    <div>
    <div className="header section__padding" style={{color:"white",paddingTop:'7rem'}}id="home">
    <div className="header-content">
      <h1>Introducing our Cover Letter Builder: <br></br>Your Gateway to Impressive Job Applications!</h1>
      <p>Are you ready to take the next step in your career journey? A well-crafted cover letter can be your ticket to landing that dream job, and our Cover Letter Builder is here to make the process easier than ever.</p>

      
      <div className="header-content__input">
      <Link to='/signUp' className='link'>
      <button type="button">Get Started</button>
      </Link>
      <Routes>
            <Route path="/signUp" element={<SignUp/>} />
          </Routes>
      </div>
       
    </div>
    <div className="header-image">
      <img src={builder} />
    </div>
  </div>
  </div>
);


export default Header
