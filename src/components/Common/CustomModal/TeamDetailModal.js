import React from 'react';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import TeamMembersDetail from '../../Questions/TeamMembersDetail';
import QuestionCard, {
  DetailComponent,
  ThumNailComponent,
} from '../QuestionCard.js/QuestionCard';
import Modal from './Modal';

const TeamDetailModal = ({
  modalStatus,
  handleClose,
  teamBgColor,
  teamDetails,
}) => {
  return (
    <Modal open={modalStatus} close={handleClose}>
      <QuestionCard className={'width-60 detail_team_margin'}>
        <ThumNailComponent className='col-lg-12'>
          <div className={teamBgColor}>
            <div className='team__logo'>
              <img
                className='team__logo-main-image'
                src={teamDetails?.imageUrl}
                alt='team logo'
              />
            </div>
            <h4 className='team__name'>{teamDetails?.name}</h4>
          </div>
        </ThumNailComponent>
        <DetailComponent>
          <div>
            <div className='points__data d-flex align-items-center justify-content-between'>
              <div className='points__data-graph col-4 progress-icon'>
                <svg style={{ height: 0 }}>
                  <defs>
                    <linearGradient
                      id={'progress'}
                      gradientTransform={`rotate(85)`}
                    >
                      <stop offset='1%' stopColor='#eee' />
                      <stop offset='99%' stopColor='#2A7776' />
                    </linearGradient>
                  </defs>
                </svg>
                <CircularProgressbarWithChildren
                  value={100}
                  strokeWidth={5}
                  circleRatio='0.45'
                  styles={{
                  
                    path: {
                      stroke: `url(#${'progress'})`,
                      height: '100%',
                      transform: 'rotate(0.77turn)',
                      transformOrigin: 'center center',
                    },
                    trail: {
                      stroke: '#2e2e2e',
                      transform: 'rotate(0.55turn)',
                      marginTop:'-120%'
                    },
                  }}
                  initialAnimation={true}
                 
                >
                  <div className='d-flex align-items-center justify-content-center flex-column'>
                    <h3 className='mb-0 text-center circular-progress'
                    >
                      {teamDetails?.pointsEarned} 
                    </h3>
                    <small className='points__data-small-points'>Points</small>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <div className='col-7 mt-md-2'>
                <span className='points__data-text mb-0'>
                  Points earned <br/> by the team
                </span>
              </div>
            </div>
            <div className='team__members'>
              <h5 className='team__members-header'>
                Team {teamDetails?.name} member list
              </h5>
              <div className='member__listing-modal'>
                {teamDetails?.learners?.map((memberDetail, index) => (
                  <TeamMembersDetail
                    member={memberDetail}
                    key={`teamMembers-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </DetailComponent>
      </QuestionCard>
    </Modal>
  );
};

export default TeamDetailModal;
