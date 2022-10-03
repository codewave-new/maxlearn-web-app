import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo, RightArrowShort } from '../assets';
import Header from '../components/Common/Header/Header';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem('TOKEN_NAME', 'someValue');
    navigate('/');
  };
  return (
    <div className='cwr_homepage_wrapper'>
      <Header />
      <div className='cwr_body'>
        <div className='cwr_login'>
          <h1>Authenticate Yourself</h1>
          <button onClick={handleLogin}>Authenticate</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
