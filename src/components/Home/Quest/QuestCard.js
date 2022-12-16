import React, { useEffect, useState } from 'react';
import { TimeLogo } from '../../../assets';
import GroupAvatars from '../../UI/GroupAvatars';
import moment from 'moment';
import Chip from '../../Common/chip/Chip';
import SquadAvatar from '../../../pages/Challenges/SquadAvatar';

const QuestCard = ({ className, data, type, status }) => {
  const endTime = moment('24:00:00', 'HH:mm:ss');
  const duration = moment.duration(endTime.diff(moment()));

  return (
    <div className={`max-home__quest-wrapper ${className} `}>
      <div className='max-home__questcard-container'>
        <div className='quest-time-details'>
          <div className='d-flex quest-time-details-text justify-content-between'>
            <h6>
              <TimeLogo.default />{' '}
              {`${parseInt(duration.asHours())} hours ${
                parseInt(duration.asMinutes()) % 60
              } minutes `}
            </h6>
            <h5>
              Expire in:
              <strong>{moment(data?.endDate).diff(moment(), 'days')}</strong>
              <small>days</small>
            </h5>
          </div>
          <h3>{data?.name}</h3>
          <div className='quest-home-content-container d-flex justify-content-between'>
            <div>
              {type === 'challenges' ? (
                <SquadAvatar
                  data={data}
                  yourSquad={data?.yourSquad}
                  opponentSquads={data?.opponentSquads}
                />
              ) : (
                <GroupAvatars />
              )}
            </div>
            <div className='quest-home__progress'>
              {/* <p className='progress'>In progress</p>
              <p className='quest'>quest</p> */}
              <Chip status={status || data?.status} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
