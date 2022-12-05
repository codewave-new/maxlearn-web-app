import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';

import InputAdornment from '@mui/material/InputAdornment';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Loginauth } from '../services/login/index';

import {
  MaxLogo,
  LoginIcon,
  LoginIcon2,
  GoogleIcon,
  LinkedinIcon,
} from '../assets';

import Header from '../components/Common/Header/Header';
import { useDispatch } from 'react-redux';
import { Email, Password } from '@mui/icons-material';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [emailvalue, setemailvalue] = useState('');
  const [pwsdValue, setpwdvalue] = useState('');
  const [pwdEyeOnOff, setPwdEyeOnOff] = useState(true);
  const [apperrorLogin, setapperrorLogin] = useState('');
  const [pwderror, setpwderror] = useState('');

  const togglePwdEyeOnOff = () => setPwdEyeOnOff(!pwdEyeOnOff);

  const emailchangeValue = (e) => {
    var field = document.querySelector('[name="email"]');

    field.addEventListener('keypress', function (event) {
      var key = event.keyCode;

      if (key === 32) {
        event.preventDefault();
      }
    });
    setemailvalue(e.target.value);
    setapperrorLogin('');
  };

  const passwordchangeValue = (e) => {
    var field = document.querySelector('[name="password"]');

    field.addEventListener('keypress', function (event) {
      var key = event.keyCode;
      if (key === 32) {
        event.preventDefault();
      }
    });
    setpwdvalue(e.target.value);
    setpwderror('');
  };

  const loginClick = async (e) => {
    e.preventDefault();
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (emailvalue === '') {
      setapperrorLogin('Please enter email');
    } else if (regex.test(emailvalue) === false) {
      setapperrorLogin('Please enter valid email');
    } else if (pwsdValue === '') {
      setpwderror('Please enter Password');
    } else {
      setIsLoading(true);
      let logindata = {
        email_id: emailvalue,
        password: pwsdValue,
      };
      const loginapi = await dispatch(Loginauth(logindata));
      console.log(loginapi, 'ppp');
      if (loginapi.data.statusCode === 200) {
        setIsLoading(false);
        localStorage.setItem('token', loginapi.data.data.loginDetails.token);
        localStorage.setItem(
          'TOKEN_NAME',
          loginapi.data.data.loginDetails.token
        );
        localStorage.setItem(
          'applicationId',
          loginapi.data.data.loginDetails.user.registrations[0].applicationId
        );
        localStorage.setItem(
          'fullname',
          loginapi.data.data.loginDetails.user.fullName
        );
        localStorage.setItem('userid', loginapi.data.data.loginDetails.user.id);

        navigate('/');
      } else if (loginapi.data.statusCode === 401) {
        Swal.fire({
          icon: 'info',
          title: 'Oops',
          text: loginapi.data.message,
          focusConfirm: false,
          confirmButtonColor: ' #FF6633  ',
        });
      } else if (loginapi.data.statusCode === 404) {
        Swal.fire({
          icon: 'info',
          title: 'Oops',
          text: loginapi.data.message,
          focusConfirm: false,
        });
      }
    }
  };

  return (
    <div className='cwr_homepage_wrapper'>
      <div className='cwr_body'>
        <div className='login_bg'>
          <div className='formdiv'>
            <div className='fordiv-wrapper'>
              <p className='welcome'>Welcome back!</p>
              <h2 className='logintext'>
                Log in to <MaxLogo.default />
              </h2>
              <form>
                <div className='row input_div'>
                  <div className='col-sm-1'>
                    <LoginIcon.default />
                  </div>
                  <div className='col-sm-11'>
                    <Input
                      type='email'
                      id='user_name'
                      placeholder='Email Id'
                      name='email'
                      className='login_name'
                      onChange={emailchangeValue}
                      value={emailvalue}
                    />
                    <p className='Log_err'>{apperrorLogin}</p>
                  </div>
                </div>

                <div className='row input_div'>
                  <div className='col-sm-1'>
                    <LoginIcon2.default />
                  </div>
                  <div className='col-sm-11'>
                    <Input
                      type={pwdEyeOnOff ? 'text' : 'password'}
                      onChange={passwordchangeValue}
                      value={pwsdValue}
                      placeholder='Password'
                      className='login_password'
                      name='password'
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton onClick={togglePwdEyeOnOff}>
                            {pwdEyeOnOff ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <p className='Log_err'>{pwderror}</p>
                  </div>
                </div>

                <div className='row input_div'>
                  <button
                    className='login_button'
                    onClick={(e) => loginClick(e)}
                  >
                    Login
                  </button>
                </div>

                <p className='forgot_password'>
                  <a className='forgot_password' href='/reset_password'>
                    Forgot password?
                  </a>
                </p>

                <div className='row input_div'>
                  <p className='login_with'>or login with</p>
                </div>
                <div className='row input_div'>
                  <div className='col-sm-6'>
                    <a href='/'>
                      <div className='social_innerdiv'>
                        <GoogleIcon.default />
                        <span className='google_text'>Google</span>
                      </div>
                    </a>
                  </div>
                  <div className='col-sm-6'>
                    <a href='/'>
                      <div className='social_innerdiv'>
                        <LinkedinIcon.default />
                        <span className='google_text'>Linkedin</span>
                      </div>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
