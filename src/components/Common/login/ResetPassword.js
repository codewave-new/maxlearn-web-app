import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Input from '@mui/material/Input';
import { LoginIcon } from '../../../assets';

import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { LoginVerification } from '../../../services/login';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailvalue, setemailvalue] = useState('');
  const [pwdEyeOnOff, setPwdEyeOnOff] = useState(true);
  const [apperrorLogin, setapperrorLogin] = useState('');
  const [loading, setLoading] = useState(false);

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

  const Sendverification = async (e) => {
    e.preventDefault();
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (emailvalue === '') {
      setapperrorLogin('Please enter email');
    } else if (regex.test(emailvalue) === false) {
      setapperrorLogin('Please enter valid email');
    } else {
      setLoading(true);
      let verificationData = {
        emailId: emailvalue,
      };

      const apiResp = await dispatch(LoginVerification(verificationData));
      if (apiResp.data.statusCode === 200) {
        setLoading(false);
        navigate('/reset_password_successful');
      }
    }
  };

  return (
    <div className='login_bg'>
      <div className='cwr_body'>
        <div className=''>
          <div className='formdiv '>
            <div className='fordiv-wrapper mt-4'>
              <h2 className='logintext'>Want to reset the password?</h2>
              <p className='verification'>
                In order to verify your account, we will send <br /> you a
                verification link via e-mail.
              </p>
              <form>
                <div className='row custom_div'>
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

                <div className='row custom_div'>
                  <button
                    className='login_button'
                    onClick={(e) => Sendverification(e)}
                  >
                    Send verification link
                  </button>
                </div>

                <p className='forgot_password'>
                  <a className='forgot_password' href='/login'>
                    Cancel
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
