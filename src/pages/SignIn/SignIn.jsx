// src/components/SignIn.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../../containers';
import { auth, signInWithEmailAndPassword } from '../../Firebase';  // Import Firebase methods

const SignIn = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // For redirect after successful sign-in

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Firebase sign-in logic
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true); // Update logged-in state

      // Redirect to home or dashboard after successful sign-in
      navigate('/');  // Change '/dashboard' to wherever you want to redirect
    } catch (error) {
      setError(error.message);  // Display Firebase error
    }
  };

  return (
    <div className="container" style={{ color: 'white', paddingTop: '6rem' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4" style={{ textAlign: 'center' }}>Sign In</h2>

          {/* Show error message if any */}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSignIn}>
            <div className="mb-3" style={{ maxWidth: '50%' }}>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3" style={{ maxWidth: '50%' }}>
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
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign In
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
