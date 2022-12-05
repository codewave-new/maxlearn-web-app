import React from 'react';
// import { useNavigate } from 'react-router-dom';

import { LoginIcon } from '../../../assets';

import Header from '../Header/Header';

const ResetPasswordSuccessful = () => (
  <div className='login_background '>
    <div className='formdiv  '>
      <div className='fordiv-wrapper'>
        <h2 className='logintext'>
          A verification email has been <br />
          sent successfully
        </h2>
        <p className='verification'>
          We have sent a verification link to your email ID. <br />
          Please click on the link to update password.
        </p>
        <form>
          <div className='row input_div'>
            <button className='login_button' href='/login'>
              Back to login
            </button>
          </div>

          <p className='forgot_password'>
            <a className='forgot_password' href='/reset_password'>
              Resend verification link
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
);
export default ResetPasswordSuccessful;
