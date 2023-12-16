// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5" style={{ color: 'white' }}>
              <h2 style={{ textAlign: 'center', paddingTop: '2rem' }}>Contact Us</h2>
    <div className="row align-items-center">
      <div className="col-md-6">
        <div style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center' }}>
          <h3>Company Address:</h3>
          <p>941 Progress Ave,</p>
          <p> Scarborough,</p>
          <p>ON M1G 3T8</p>
        </div>
      </div>
      <div className="col-md-6">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" style={{ maxWidth: '60%' }} id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" style={{ maxWidth: '60%' }} id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control" style={{ maxWidth: '80%' }} id="message" rows="7"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
);
};

export default Contact;