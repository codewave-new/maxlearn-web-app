import React from 'react';
// import { useNavigate } from 'react-router-dom';

import { LoginIcon } from '../../../assets';

import Header from '../Header/Header';

const ResetPasswordSuccessful = () => (
  //   const navigate = useNavigate();
  //   const handleLogin = () => {
  //     localStorage.setItem('TOKEN_NAME', 'someValue');
  //     navigate('/');
  //   };

  //   const [values, setValues] = React.useState({
  //     password: '',
  //     showPassword: false,
  //   });

  <div className='cwr_homepage_wrapper'>
    <Header />
    <div className='cwr_body'>
      {/* <div className='cwr_login'>
          <h1>Authenticate Yourself</h1>
          <button onClick={handleLogin}>Authenticate</button>
        </div> */}
      <div className='login_bg'>
        <div className='formdiv'>
          <div className='fordiv-wrapper'>
            <h2 className='logintext'>New password updated</h2>
            <p className='verification'>
              Your account password has been successfully <br />
              updated. Please login to continue.
            </p>
            <form>
              {/* <div className='row input_div'>
                <div className='col-sm-1'>
                  <LoginIcon.default />
                </div>
                <div className='col-sm-11'>
                  <input
                    type='email'
                    id='user_name'
                    placeholder='Email ID'
                    name='user_name'
                    className='login_name'
                  />
                </div>
              </div> */}

              <div className='row input_div'>
                <button className='login_button'>Back to login</button>
              </div>

              {/* <p className='forgot_password'>
                <a className='forgot_password' href='/'>
                  Resend verification link
                </a>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ResetPasswordSuccessful;
