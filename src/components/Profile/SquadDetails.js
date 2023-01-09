import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import {
  Points,
  ProfileGem,
  ProfileStanding,
  SquadBackGround,
} from '../../assets';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import { yourSquadDetails } from '../../services/profile';
import SquadDetailChallenges from './SquadDetailChallenges';
import { useSelector } from 'react-redux';
import { CenterLoadingBar } from '../loader/loader';
import useActiveTab from '../CustomHooks/ActiveTab';

const SquadDetails = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const authDetails = useSelector((state) => state.auth);
  const [activeTab, setActivetab] = useActiveTab('members');
  const [squadMemeberDetails, setSquadMemberDetails] = useState({});
  const [teamPoints, setTeamPoints] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    squadInfomation();
  }, []);

  const squadInfomation = async () => {
    setIsLoading(true);
    const response = await yourSquadDetails(id);
    setIsLoading(false);
    if (response?.statusCode === 200) {
      setSquadMemberDetails(response?.data?.squadInfo?.[0]);
      setTeamPoints(response?.data?.challengeInfo);
    }
  };

  return (
    <div>
      <Header />
      <div className='max__profile-wrapper container'>
        <div className='row margin-top-main'>
          <div className='col-12 col-xl-3'>
            <div
              style={{
                backgroundImage: `url(${SquadBackGround.default})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
              className='squad__logo-image'
            >
              <div className='squad__logo-container'>
                <div className='squad__logo-background m-auto'>
                  <img
                    className='squad__detail-logo'
                    src={squadMemeberDetails?.doc?.imageUrl}
                  />
                </div>
                <h2 className='squad__detail-teamname'>
                  {squadMemeberDetails?.doc?.name}
                </h2>
                <hr />
                <div className='m-auto row squad_standing-container '>
                  <div className='col-6'>
                    <div className='d-flex align-items-center'>
                      <ProfileGem.default />
                      <h2 className='squad-text mb-0'>{teamPoints}</h2>
                    </div>
                    <p className='mb-0 squad-subheader'>Points earned</p>
                  </div>
                  <div className='col-6'>
                    <div className='d-flex align-items-center'>
                      <ProfileStanding.default />
                      <h2 className='squad-text mb-0 '>1st</h2>
                    </div>
                    <p className='mb-0 squad-subheader '>Rank achieved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-9'>
            <button
              className='squad__back-btn'
              onClick={() => {
                navigate({
                  pathname: `/profile`,
                  search: createSearchParams({
                    tab: `yourSquad`,
                  }).toString(),
                });
              }}
            >
              <ArrowBackIosNewIcon />
              Squad details
            </button>
            <Tabs
              defaultActiveKey={activeTab}
              id='uncontrolled-tab-example'
              className={`mb-3  max__profile-activity-tab`}
              onSelect={setActivetab}
            >
              <Tab eventKey='members' title='Members'>
                {activeTab === 'members' && (
                  <div>
                    {isLoading ? (
                      <CenterLoadingBar />
                    ) : (
                      <div className='squad-details-wrapper'>
                        {squadMemeberDetails?.members
                          ?.sort((a, b) => b?.pointsEarned - a?.pointsEarned)
                          ?.map((individaual) => (
                            <div
                              key={individaual?._id}
                              className={`squad-details-container ${props.className} d-flex align-items-center justify-content-between`}
                            >
                              <div className='user d-flex align-items-center'>
                                <Avatar
                                  sx={{ width: 36, height: 36 }}
                                  alt='Remy Sharp'
                                  src={individaual?.profilePic}
                                />
                                <h5 className=' squad__member-name'>
                                  {authDetails?.learnerId === individaual?._id
                                    ? 'You'
                                    : individaual?.fullName}
                                </h5>
                              </div>
                              <div className='points d-flex align-items-center'>
                                <h6 className='total__points'>
                                  <img
                                    src={Points.default}
                                    className='squad__points-image'
                                  />
                                  {individaual?.pointsEarned} points
                                </h6>
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                )}
              </Tab>
              <Tab eventKey='challenges' title='Challenges'>
                {activeTab === 'challenges' && <SquadDetailChallenges />}
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SquadDetails;
