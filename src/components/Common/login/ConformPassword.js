import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import jwt_decode from 'jwt-decode';

import { LoginIcon2 } from '../../../assets';

import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ConfirmPasswordChange } from '../../../services/login';
import Swal from 'sweetalert2';
import { Spinner } from 'react-bootstrap';

const ConfirmPassword = () => {
  // const navigate = useNavigate();
  // const handleLogin = () => {
  //   localStorage.setItem('TOKEN_NAME', 'someValue');
  //   navigate('/');
  // };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [pass1Error, setPass1Error] = useState('');
  const [Pass2Error, setPass2Error] = useState('');
  const [pwdEyeOnOff1, setPwdEyeOnOff1] = useState(true);
  const [pwdEyeOnOff2, setPwdEyeOnOff2] = useState(true);
  const togglePwdEyeOnOff1 = () => setPwdEyeOnOff1(!pwdEyeOnOff1);
  const togglePwdEyeOnOff2 = () => setPwdEyeOnOff2(!pwdEyeOnOff2);
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [tokenValue, setTokenValue] = useSearchParams();

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiY2hhbmRhbkBjb2Rld2F2ZS5jb20iLCJpYXQiOjE2NzAyNTIyNTYsImV4cCI6MTY3MDI1Mjg1Nn0.Pn-z4aWbCybThwslJoQLovEFxcy8Itv52sWFUzebzvM';

  useEffect(() => {
    var decoded = jwt_decode(token);
    setEmail(decoded.data);
  }, []);

  const handlePassword1 = (e) => {
    e.preventDefault();
    var field = document.querySelector('[name="email"]');

    field.addEventListener('keypress', function (event) {
      var key = event.keyCode;
      if (key === 32) {
        event.preventDefault();
      }
    });

    setPassword1(e.target.value);
    setPass1Error('');
  };

  const handlePassword2 = (e) => {
    e.preventDefault();
    var field = document.querySelector('[name="password"]');

    field.addEventListener('keypress', function (event) {
      var key = event.keyCode;
      if (key === 32) {
        event.preventDefault();
      }
    });

    setPassword2(e.target.value);
    setPass2Error('');
  };

  const passwordChange = async (e) => {
    e.preventDefault();
    let passData = {
      email_id: email,
      password: password2,
    };

    if (password1 === '') {
      setPass1Error('Please Enter Password');
    } else if (password2 === '') {
      setPass2Error('Please enter Repeat-password');
    } else if (password1 !== password2) {
      setPass2Error('Password does not match ');
    } else {
      setLoading(true);
      const apiResp = await dispatch(ConfirmPasswordChange(passData));
      if (apiResp.data.statusCode === 200) {
        setLoading(false);
        navigate('/update_password_successful');
      } else if (apiResp.data.statusCode === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: apiResp.data.message,
          focusConfirm: false,
          confirmButtonColor: ' #FF6633  ',
        });
        setLoading(false);
      } else if (apiResp.data.statusCode === 404) {
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: apiResp.data.message,
          focusConfirm: false,
          confirmButtonColor: ' #FF6633  ',
        });
        setLoading(false);
      }
    }
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <>
      {/* // <div> */}
      {/* <div className='cwr_body' style={{ height: '100vh' }}> */}
      <div className='change_password_bg'>
        <div className='card_background '>
          <div className='fordiv-wrapper'>
            <h2 className='logintext'>
              Update your account <br /> with new password.
            </h2>
            <form>
              <div className='row custom_div'>
                <div className='row input_div'>
                  <div className='col-sm-1'>
                    <LoginIcon2.default />
                  </div>
                  <div className='col-sm-11'>
                    <Input
                      type={pwdEyeOnOff1 ? 'text' : 'password'}
                      onChange={(e) => handlePassword1(e)}
                      value={password1}
                      placeholder='Password'
                      className='login_password'
                      name='email'
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton onClick={togglePwdEyeOnOff1}>
                            {pwdEyeOnOff1 ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <p className='Log_err m-0'>{pass1Error}</p>
                  </div>
                </div>
              </div>

              <div className='row custom_div'>
                <div className='row input_div'>
                  <div className='col-sm-1'>
                    <LoginIcon2.default />
                  </div>
                  <div className='col-sm-11'>
                    <Input
                      type={pwdEyeOnOff2 ? 'text' : 'password'}
                      onChange={handlePassword2}
                      value={password2}
                      placeholder='Repeat-password'
                      className='login_password'
                      name='password'
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton onClick={togglePwdEyeOnOff2}>
                            {pwdEyeOnOff2 ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <p className='Log_err m-0'>{Pass2Error}</p>
                  </div>
                </div>
              </div>

              <div className='row custom_div1'>
                {!loading ? (
                  <button
                    className='login_button'
                    onClick={(e) => passwordChange(e)}
                  >
                    Submit
                  </button>
                ) : (
                  <Spinner style={{ marginLeft: '50%', color: '#FF6633 ' }} />
                )}
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

export default ConfirmPassword;
