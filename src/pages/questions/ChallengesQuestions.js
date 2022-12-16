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
  CloseButton,
} from '../../assets';
import { Points, ExamDetailBackground, CuteMonsters } from '../../assets';
import team from '../../assets/Images/usersquad/Team.jpg';
import oppentTeam from '../../assets/Images/usersquad/Group 3.png';
import '../../styles/questions/challengs-question.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';
import quesImage from '../../assets/Images/question/Rectangle-2.png';
import { Button, Col, Row } from 'react-bootstrap';

import { CardBody, Input } from 'reactstrap';
import { CheckBox } from '@mui/icons-material';
import ConfidenceSliderModal from '../../components/Common/CustomModal/ConfidenceSliderModal';

const ChallengesQuestions = () => {
  const activeClassName = 'active';
  const navActive = ({ isActive }) => (isActive ? activeClassName : undefined);
  const [openModal, setOpenModal] = useState(false);

  const CustomNavbar = () => {
    return (
      <>
        <header>
          <nav className='navbar navbar-expand-lg max__navbar'>
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
                    <li>
                      <NavLink className='p-0' to='/'>
                        <img src={team} className='team ' />
                        <span className='team_name'> Roasters</span>
                        <span className=' team_points'>130 Points</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className='p-0' to='/learn'>
                        <img src={team} className='team ' />
                        <span className='team_name'> Monsters</span>
                        <span className=' team_points'>130 Points</span>
                      </NavLink>
                    </li>
                  </ul>

                  <div className=' progress_bar  '>
                    <ProgressBar now={60} className='bar mr-1' />
                    <span className='d-inline progress_lable d-flex '>
                      {' '}
                      60%
                    </span>
                  </div>
                  {/* <div>Timer</div> */}
                  <div>
                    <a href='/to-do'>
                      <button className='close_btn'>
                        <CloseButton.default />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  };

  return (
    <div className=''>
      <div className='question_bg'>
        <CustomNavbar />
        <div>
          <Row className='question_card d-flex  col-sm-12'>
            <Col className='col-sm-6 mt-4 mb-4 ml-2 question_detail '>
              <div className='p-1'>
                <div className=''>Question - 1 OF 15</div>
                <p className='mt-1'>
                  Sed ut perspiciatis unde omnis istels natus error sit
                  voluptatem accu sanll ium doloremque laudantium?
                </p>
                <img className='quest_image mt-1' src={quesImage} />
              </div>
            </Col>
            <Col className='col-sm-5 mt-4 mr-1 mb-4'>
              <div className='mt-2 quest_ans'> SELECT YOUR ANSWER</div>
              <CardBody className='mt-3 ml-2'>
                <div className='quest_check p-2 d-flex'>
                  <div className='col-sm-1 d-flex justify-content-between '>
                    <input type='checkbox' />
                  </div>
                  <div className='col-sm-10  '>
                    <label className='quest_options'>Reverse Osmosis</label>
                  </div>
                </div>

                <div className='quest_check p-2 mt-3 d-flex'>
                  <div className='col-sm-1 d-flex justify-content-between '>
                    <input type='checkbox' />
                  </div>
                  <div className='col-sm-10  '>
                    <label className='quest_options'>Centrifugation</label>
                  </div>
                </div>

                <div className='quest_check p-2 mt-3 d-flex'>
                  <div className='col-sm-1 d-flex justify-content-between '>
                    <input type='checkbox' />
                  </div>
                  <div className='col-sm-10  '>
                    <label className='quest_options'>Diffusion</label>
                  </div>
                </div>

                <div className='quest_check p-2 mt-3 d-flex'>
                  <div className='col-sm-1 d-flex justify-content-between '>
                    <Input type='checkbox' />
                  </div>
                  <div className='col-sm-10  '>
                    <label className='quest_options'>Dialysis</label>
                  </div>
                </div>
              </CardBody>

              <div className='app_subtn'>
                {/* <a href='/challenge-squad-detail'> */}
                <Button
                  className='add-new-btn add_btnctprev'
                  color='primary'
                  onClick={() => setOpenModal(true)}
                >
                  Submit
                </Button>
                {/* </a> */}
              </div>
            </Col>
          </Row>
        </div>

        {/* </div> */}
      </div>

      <ConfidenceSliderModal
        modalStatus={openModal}
        handleClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default ChallengesQuestions;
