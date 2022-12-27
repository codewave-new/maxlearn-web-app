import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  MaxLogo,
  CloseButton,
  timerLogo
} from '../../assets';
import team from '../../assets/Images/usersquad/Team.jpg';
import '../../styles/questions/challengs-question.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';


const CustomNavbar = ({time,
  progress,
  points,
  name,
  stat,
  submitCliked,
  statusVal,
  nextButtonClicked,
  opponentPoints,
  opponentName,
  logo1,
  logo2
}) => {
    return (
      <>
        <header>
          <nav className='navbar navbar-expand-lg max__navbar question_navbar'>
            <div className='container-fluid'>
              <div style={{ borderRight: '1px solid' }}>
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
              </div>

              {/* <div className='d-flex'>
                <div className=''>
                  <img src={team} className='team ' />
                  <span className='team_name'> Roasters</span>
                  <span className=' team_points'>130 Points</span>
                </div>

                <div className=''>
                  <img src={oppentTeam} className='team ' />
                  <span className='team_name'> Monsters</span>
                  <span className=' team_points'>130 Points</span>
                </div>
              </div> */}

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
                  <ul className='navbar-nav max__menunav-list justify-content-start  border-end '>
                    <li className='d-flex align-items-center justify-content-center'>
                      {/* <NavLink className='p-0' to='/'> */}
                        <img src={logo1} className='team' style={{marginRight:'10px'}} />
                        <div className='d-flex  flex-column justify-content-start '>
                        <span className='team_name'>
                        {name.length > 15 ? `${name.slice(0, 15)}...` : name}
                        </span>
                        <span className=' team_points'>{points} Points</span>
                        </div>
                      {/* </NavLink> */}
                    </li>
                    <li className='d-flex align-items-center justify-content-center'>
                      {/* <NavLink className='p-0' to='/'> */}
                        <img src={logo2} className='team' style={{marginRight:'10px'}} />
                        <div className='d-flex  flex-column justify-content-start '>
                        <span className='team_name'>
                        {opponentName.length > 10? `${opponentName.slice(0, 10)}...` : opponentName}
                        </span>
                        <span className=' team_points'>{opponentPoints} Points</span>
                        </div>
                      {/* </NavLink> */}
                    </li>
                    {/* <li>
                      <NavLink className='p-0' to='/learn'>
                        <img src={team} className='team ' />
                        <div className='d-flex  flex-column justify-content-start '>
                        <span className='team_name'>
                        {opponentName.length > 15 ? `${opponentName.slice(0, 15)}...` : opponentName}
                        </span>
                        <span className=' team_points'>{opponentPoints} Points</span>
                        </div>
                      </NavLink>
                    </li> */}
                  </ul>

                  <div className=' progress_bar  '>
                    <ProgressBar now={progress} className='bar mr-1' />
                    <span className='d-inline progress_lable d-flex '>
                      {' '}
                     {progress}%
                    </span>
                  </div>
                  {!((stat === 'IN-PROGRESS'&&!submitCliked)||(stat === 'COMPLETED'&&statusVal&&!nextButtonClicked&&!submitCliked))?    
                  <div className='header-timer'>
                  <timerLogo.default />
                  {time=='NaNmin:NaNsec'?"00:00":time}
                    </div>
                     :''
                    }
                    <a href='/to-do'>
                      <button className='close_btn right-0'>
                        <CloseButton.default />
                      </button>
                    </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  };

export default CustomNavbar;