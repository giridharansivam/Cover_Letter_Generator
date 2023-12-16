// src/components/SignIn.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../../containers';

const SignIn = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();

    // Add your sign-in logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    setIsLoggedIn(true)
  };

  return (
    <div className="container" style={{color:'white',paddingTop:'6rem'}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4"style={{textAlign:'center'}}>Sign In</h2>
          <form onSubmit={handleSignIn}>
            <div className="mb-3" style={{maxWidth:'50%'}}>
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3" style={{maxWidth:'50%'}}>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSignIn}>
              <Link to='/'>Sign In</Link>
            </button>
          </form>
          <p className="mt-3">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
