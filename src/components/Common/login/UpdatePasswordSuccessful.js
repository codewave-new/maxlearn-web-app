import React from 'react';
// import { useNavigate } from 'react-router-dom';

// import { LoginIcon } from '../../../assets';

import Header from '../Header/Header';

const UpdatePasswordSuccessful = () => {
  return (
    <div className='cwr_homepage_wrapper'>
      <div className='cwr_body'>
        <div className='login_bg '>
          <div className='formdiv'>
            <div className='fordiv-wrapper ' style={{ marginTop: '40px' }}>
              <h2 className='logintext'>New password updated</h2>
              <p className='verification'>
                Your account password has been successfully <br />
                updated. Please login to continue.
              </p>
              <form>
                <div className='row input_div'>
                  <a className='login_button' href='/login'>
                    Back to login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePasswordSuccessful;
