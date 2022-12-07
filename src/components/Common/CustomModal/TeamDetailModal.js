import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { CuteMonsters } from '../../../assets';
import TeamMembersDetail from '../../Questions/TeamMembersDetail';
import QuestionCard, {
  DetailComponent,
  ThumNailComponent,
} from '../QuestionCard.js/QuestionCard';
import Modal from './Modal';

const TeamDetailModal = ({ modalStatus, handleClose }) => {
  return (
    <Modal open={modalStatus} close={handleClose}>
      <QuestionCard className={'width-60'}>
        <ThumNailComponent>
          <div className='our__team '>
            <div className='team__logo'>
              <CuteMonsters.default />
              {/* <img src={CuteMonsters.default} alt='team logo'/> */}
            </div>
            <h4 className='team__name'>Monsters</h4>
          </div>
        </ThumNailComponent>
        <DetailComponent>
          <div>
            <div className='points__data row'>
              <div className='points__data-graph col-4'>
                <CircularProgressbarWithChildren
                  value={80}
                  strokeWidth={7}
                  // text={`${100}`}
                  linearGradient={['red', 'blue']}
                  circleRatio={0.5}
                  initialAnimation={true}
                  styles={buildStyles({
                    rotation: 3 / 4,
                    pathColor: '#2A7776',
                    strokeLinecap: 'round',
                    trailColor: '#eee',
                  })}
                >
                  <div>
                    <div>100</div>
                    <p>Points</p>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <div className='col-7 text-bottom'>
                <span className='points__data-text mb-0'>
                  Points earned by the team
                </span>
              </div>
            </div>
            <div className='team__members'>
              <h5 className='team__members-header'>
                Team Roasters member list
              </h5>
              {[1, 2, 3, 3, 3, 1]?.map((val) => (
                <TeamMembersDetail />
              ))}
            </div>
          </div>
        </DetailComponent>
      </QuestionCard>
    </Modal>
  );
};

export default TeamDetailModal;
