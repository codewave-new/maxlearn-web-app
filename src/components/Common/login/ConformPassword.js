import React from 'react';
// import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
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
              <h2 className='logintext'>
                Update your account <br /> with new password.
              </h2>
              <form>
                <div className='row input_div'>
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

                <div className='row input_div'>
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

                <div className='row input_div'>
                  <button className='login_button'>Submit</button>
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
