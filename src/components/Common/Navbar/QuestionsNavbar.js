import React from 'react';
import { MaxLogo } from '../../../assets';

const QuestionsNavbar = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-lg max__navbar'>
          
            {/* <a className='navbar-brand' href='/src#'> */}
              <MaxLogo.default />
            {/* </a> */}
            {/* <p>kjdsbfk</p> */}
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasNavbar'
              aria-controls='offcanvasNavbar'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div
              className='offcanvas offcanvas-end'
              tabIndex='-1'
              id='offcanvasNavbar'
              aria-labelledby='offcanvasNavbarLabel'
            >
              <div className='offcanvas-header'>
                <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                  Offcanvas
                </h5>
                <button
                  type='button'
                  className='btn-close text-reset'
                  data-bs-dismiss='offcanvas'
                  aria-label='Close'
                />
              </div>
              <div className='offcanvas-body'>
                <ul className='navbar-nav max__menunav-list justify-content-end flex-grow-1 border-end pe-5'>
                  <li>
                    {/* <NavLink className={navActive} to='/'>
                      <HomeLogo.default /> Home
                    </NavLink> */}
                    shjsd
                  </li>
                  <li>
                    {/* <NavLink className={navActive} to='/learn'>
                      <NavLearnLogo.default /> Learn
                    </NavLink> */}
                    dsfjs
                  </li>
                  <li>
                    {/* <NavLink className={navActive} to='/to-do'>
                      <NavToDoLogo.default />
                      To-Do
                    </NavLink> */}
                  </li>
                  <li>
                    {/* <NavLink className={navActive} to='/rankings'>
                      <NavRangingLogo.default /> Rankings
                    </NavLink> */}
                  </li>
                </ul>
                <div className='d-flex'>
                  <ul className='navbar-nav max__menunav-list ms-5'>
                    <li className='max__nav-search'>
                      <div className='max__nav-search-container'>
                        <button>
                          {/* <HomeSearchLogo.default /> */}
                        </button>
                      </div>
                    </li>

                    <li className='max__notification'>
                      <div className='max__nav-notification-container'>
                        {/* <button>
                          <HomeNotificationLogo.default />
                        </button> */}
                      </div>
                    </li>
                    <li className='max__nav-user'>
                      <div className='max__nav-user-container'>
                        {/* <button>
                          <HomeUserLogo.default />
                        </button> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          
        </nav>
      </header>
    </div>
  );
};

export default QuestionsNavbar;
