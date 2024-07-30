import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import bannariLogo from '../assets/images/bannari-logo.png';
import googleLogo from '../assets/images/google-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h1>Welcome Back!</h1>
          <img src={bannariLogo} className="logo" alt="Bannari Logo" />
          <div className="subtext-container">
            <FontAwesomeIcon icon={faBook} className="assessment-icon" />
            <p className="subtext">Assessment Platform</p>
          </div>
          <button className="google-button" onClick={handleLogin}>
            <img src={googleLogo} className="button-logo" alt="Google logo" />
            Sign in with Google
          </button>
          <p className="bitsathy-text">Sign in with your BITSathy Account</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
