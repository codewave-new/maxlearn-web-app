import React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { LoginIcon2 } from '../../../assets';

import Header from '../Header/Header';

const Login = () => {
  // const navigate = useNavigate();
  // const handleLogin = () => {
  //   localStorage.setItem('TOKEN_NAME', 'someValue');
  //   navigate('/');
  // };

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <>
      {/* // <div> */}
      {/* <div className='cwr_body' style={{ height: '100vh' }}> */}
      <div className='change_password_bg'>
        <div className='card_background'>
          <div className='fordiv-wrapper'>
            <h2 className='logintext'>
              Update your account <br /> with new password.
            </h2>
            <form>
              <div className='row custom_div'>
                <div className='col-sm-1'>
                  <LoginIcon2.default />
                </div>
                <div className='col-sm-11'>
                  <Input
                    type={values.showPassword ? 'text' : 'password'}
                    onChange={handlePasswordChange('password')}
                    value={values.password1}
                    placeholder='Your new password'
                    className='login_password'
                    // style={{ '-webkit-text-security': 'square' }}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </div>
              </div>

              <div className='row custom_div'>
                <div className='col-sm-1'>
                  <LoginIcon2.default />
                </div>
                <div className='col-sm-11'>
                  <Input
                    type={values.showPassword ? 'text' : 'password'}
                    onChange={handlePasswordChange('password')}
                    value={values.password2}
                    placeholder='Confirm new password'
                    className='login_password'
                    // style={{ '-webkit-text-security': 'square' }}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </div>
              </div>

              <div className='row custom_div1'>
                <button className='login_button'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    // </div>
    // </div>
  );
};

export default Login;
