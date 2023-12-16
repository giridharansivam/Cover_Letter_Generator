import React from 'react'
import Logo  from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div  className="footer  section padding">
      <div className="footer-heading">
        <h1 className="gradient__text">Do you want to know more about our service</h1>
      </div>
      <div className="footer-btn">
      <p><Link to="/contact">Contact Us</Link></p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p><Link to ="https://www.instagram.com/theprofessorpatel/"target="_blank" rel="noopener noreferrer">Social Media</Link></p>
        <p><Link to ="https://orbit5.ca/"target="_blank" rel="noopener noreferrer">Company</Link></p>
        <p><Link to="/contact">Contact</Link></p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
    </div>
    </div>
  )
}

export default Footer