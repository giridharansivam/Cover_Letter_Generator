import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Routes } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';
import Apps from '../../pages/resumeBuilder/resumeBuilder';
import App from '../../App';
import resume from '../../assets/resume.png'
import house from '../../assets/house.png'
import telephone from '../../assets/telephone.png' 
import profile from '../../assets/profile.png'
import Home from '../../pages/Home/Home';
import PdfReader from '../../pages/resumeBuilder/resumeBuilder';
import { Footer } from '../../containers';
import Contact from '../../pages/contact/Contact';
import SignIn from '../../pages/SignIn/SignIn';
import SignUp from '../../pages/SignUp/SignUp';
import GetStarted from '../../pages/GetStarted/GetStarted';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const list = document.querySelectorAll('.list');
    list.forEach((item) => item.addEventListener('click', activeLink));

    // Cleanup the event listeners when the component unmounts
    return () => {
      list.forEach((item) => item.removeEventListener('click', activeLink));
    };
  }, []);

  function activeLink() {
    const list = document.querySelectorAll('.list');
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
  }

  return (
      <div className="navbar">
          {/* <div className="navbar-links_logo">
            <img src={logo} alt="logo" />
          </div> */}
          {/* <div className="navbar-links_container">
            <p><Link to="/"><ion-icon name="home-outline"></ion-icon></Link></p>
            <p><Link to="/resumebuilder">Resume Builder</Link></p>
            <p><Link to="/contact"><ion-icon name="call-outline"></ion-icon></Link></p>
          </div>   */}
          <div className="navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className='navigation'>
            <ul>
              <li className='list active'>
                <Link className="link"to="/">
                  <span className='icon'><img src={house}/></span>
                  <span className='text'>Home</span>
                  </Link>
              </li>
              <li className='list'>
                <Link className="link" to="/resumebuilder">
                  <span className='icon'><img src={resume}/></span>
                  <span className='text'>Coverletter</span>
                  </Link>
              </li>
              <li className='list'>
                <Link className="link" to="/contact">
                  <span className='icon'><img src={telephone}/></span>
                  <span className='text'>Contact</span>
                  </Link>
              </li>
              <li className='list'>
                <Link className="link" to="/signIn">
                  <span className='icon'><img src={profile}/></span>
                  <span className='text'>Profile</span>
                  </Link>
              </li>
          
              <div className='indicator'>

              </div>
            </ul>
          </div>

        <div className="navbar-sign">
          <button type='button'><Link to="/signin">Sign in</Link></button>
          <button type="button"><Link to="/signUp">Sign Up</Link></button>
        </div>
        <div className="navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="navbar-menu_container slide-bottom">
              <div className="navbar-menu_container-links ">
                <p>
                  <Link to="/signIn">SignIn</Link></p>
                <p><Link to="/signUp">SignUp</Link></p>
              </div>
              {/* <div className="navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div> */}
            </div>
          )}
        </div>
        
      </div>
      
      
      
    
  );
};

export default Navbar;