// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { auth } from '../../Firebase';  // Make sure to import auth from Firebase
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../../containers';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();  // Hook to navigate to other pages

  useEffect(() => {
    const currentUser = auth.currentUser;  // Get current user from Firebase
    if (currentUser) {
      setUser(currentUser);  // Set user data if logged in
      setLoading(false);  // Stop loading when the user data is set
    } else {
      setLoading(false);
      navigate('/signin');  // Redirect to SignIn page if not authenticated
    }
  }, [navigate]);

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out successfully');
        window.location.reload();  // Refresh the page after sign out
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;  // Show loading text while fetching user info
  }

  return (
    <div className="container" style={{ color: 'white', paddingTop: '6rem' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4" style={{ textAlign: 'center' }}>Profile</h2>
          
          {user ? (
            <div>
              <h4>Name: {user.displayName || 'N/A'}</h4>
              <h4>Email: {user.email}</h4>
              <h4>UID: {user.uid}</h4>
              {/* Optionally show more user details here */}
            </div>
          ) : (
            <p>No user data available.</p>
          )}

          <button className="btn btn-danger mt-3" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
