import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../../containers'; 
import { auth, createUserWithEmailAndPassword } from '../../Firebase';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [error, setError] = useState('');  // To display any error messages
  const navigate = useNavigate(); // For navigation after sign-up

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validate if passwords match
    if (password !== reEnterPassword) {
      setError("Passwords don't match!");
      return;
    }

    try {
      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Email:', email);  // Debugging line
      console.log('Password:', password);
      // Optionally, save additional user information like first name, last name, etc.
      console.log('User created:', user);

      // Redirect to SignIn page after successful sign-up
      navigate('/signin');
    } catch (error) {
      setError(error.message);  // Display any error message from Firebase
    }
  };

  return (
    <div className="container" style={{ color: 'white', maxWidth: '60%', paddingTop: '3rem' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4 text-center">Sign Up</h2>

          {/* Show error message */}
          {error && <div className="alert alert-danger">{error}</div>} 

          <form onSubmit={handleSignUp}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="mb-3">
              <label htmlFor="reEnterPassword" className="form-label">
                Re-enter Password
              </label>
              <input
                type="password"
                className="form-control"
                id="reEnterPassword"
                value={reEnterPassword}
                onChange={(e) => setReEnterPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>

          <p className="mt-3">
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
