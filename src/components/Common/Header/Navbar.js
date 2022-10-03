import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NotificationIcon } from '../../../assets';

const Navbar = () => {
  let activeClassName = 'active';
  const navActive = ({ isActive }) => (isActive ? activeClassName : undefined);

  return (
    // <nav className='max_menu'>
    //     <img src="" alt="" />
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
    //                        <img src='' alt="" /> Home
    //                     </Link>
    //                 </li>
    //                 <li  className={`menu-nav__item  ${menu ? "": 'open'}`}>
    //                     <Link to='/' className="menu-nav__link">
    //                         <img src="" alt="" />Learn
    //                     </Link>
    //                 </li>
    //                 <li  className={`menu-nav__item  ${menu ? "": 'open'}`}>
    //                     <Link to='/' className="menu-nav__link">
    //                         <img src="" alt="" />To-Dos
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
      <div className='max__menu-btn'>
        <span></span>
      </div>
      <nav className='max__navbar'>
        <h1>maxlearn</h1>
        <ul className='max__nav-list'>
          <li>
            <NavLink className={navActive} to='/'>
              <img src='' alt='' /> Home
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
          <li>
            <Link to='/'>search</Link>
          </li>
          <li>
            <Link to='/'>
              <img src={NotificationIcon.default} alt='' /> notification
            </Link>
          </li>
          <li>
            <Link to='/'>user</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
