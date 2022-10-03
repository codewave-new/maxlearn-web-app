import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  HomeLogo,
  HomeNotificationLogo,
  MaxLogo,
  HomeSearchLogo,
  NavLearnLogo,
  NavToDoLogo,
  NavRangingLogo,
  HomeUserLogo,
} from '../../../assets';

const Navbar = () => {
  const activeClassName = 'active';
  const navActive = ({ isActive }) => (isActive ? activeClassName : undefined);

  return (
    // <nav className='max_menu'>
    //
    //     <ul>
    //         <li><Link to='/'>Home</Link></li>
    //         <li><Link to='/'>Learn</Link></li>
    //         <li><Link to='/'>To-Do</Link></li>
    //         <li><Link to='/'>Rankings</Link></li>
    //         <li><Link to='/'>search</Link></li>
    //         <li><Link to='/'>notification</Link></li>
    //         <li><Link to='/'>user</Link></li>
    //     </ul>
    // </nav>
    // <header>
    //         <div className="menu-btn">
    //             <span  className={`menu-btn__burger ${menu ? "": 'open'}`}></span>
    //         </div>

    //         <nav className={`nav ${menu ? "": 'open'}`}>
    //             <ul  className={`menu-nav ${menu ? "": 'open'}`}>
    //                 <li  className={`menu-nav__item active ${menu ? "": 'open'}`}>
    //                     <Link to='/' className="menu-nav__link">
    //
    //                     </Link>
    //                 </li>
    //                 <li  className={`menu-nav__item  ${menu ? "": 'open'}`}>
    //                     <Link to='/' className="menu-nav__link">
    //
    //                     </Link>
    //                 </li>
    //                 <li  className={`menu-nav__item  ${menu ? "": 'open'}`}>
    //                     <Link to='/' className="menu-nav__link">
    //
    //                     </Link>
    //                 </li>
    //                 <li className={`menu-nav__item ${menu ? "": 'open'}`}>

    //                 </li>
    //                 <li className={`menu-nav__item  ${menu ? "": 'open'}`}>

    //                 </li>
    //                 <li className={`menu-nav__item ${menu ? "": 'open'}`}>

    //                 </li>
    //             </ul>
    //         </nav>
    //     </header>
    <header>
      {/* <div className='max__menu-btn'>
        <span></span>
      </div>
      <nav className='max__navbar'>
        <h1>maxlearn</h1>
        <ul className='max__menunav-list'>
          <li>
            <NavLink className={navActive} to='/'>
              <HomeLogo.default /> Home
            </NavLink>
          </li>
          <li>
            <NavLink className={navActive} to='/login'>
              Learn
            </NavLink>
          </li>
          <li>
            <NavLink className={navActive} to='/'>
              To-Do
            </NavLink>
          </li>
          <li>
            <NavLink className={navActive} to='/'>
              Rankings
            </NavLink>
          </li>
          <li className='max__nav-search'>
            <div className='max__nav-search-container'>
            <button >
              <NotificationIcon.default />
            </button>
            </div>

          </li>

          <li className='max__notification'>
            <div className='max__nav-notification-container'>
            <button >
              <HomeNotificationLogo.default />
            </button>
            </div>

          </li>
          <li className='max__nav-user'>
            <div className='max__nav-user-container'>
            <button >

            </button>
            </div>

          </li>
        </ul>
      </nav> */}
      <nav className='navbar navbar-expand-lg max__navbar'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/src#'>
            <MaxLogo.default />
          </a>
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
                  <NavLink className={navActive} to='/'>
                    <HomeLogo.default /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navActive} to='/learn'>
                    <NavLearnLogo.default /> Learn
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navActive} to='/to-do'>
                    <NavToDoLogo.default />
                    To-Do
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navActive} to='/rankings'>
                    <NavRangingLogo.default /> Rankings
                  </NavLink>
                </li>
              </ul>
              {/* <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
              <div className='d-flex'>
                <ul className='navbar-nav max__menunav-list ms-5'>
                  <li className='max__nav-search'>
                    <div className='max__nav-search-container'>
                      <button>
                        <HomeSearchLogo.default />
                      </button>
                    </div>
                  </li>

                  <li className='max__notification'>
                    <div className='max__nav-notification-container'>
                      <button>
                        <HomeNotificationLogo.default />
                      </button>
                    </div>
                  </li>
                  <li className='max__nav-user'>
                    <div className='max__nav-user-container'>
                      <button>
                        <HomeUserLogo.default />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
