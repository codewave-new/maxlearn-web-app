import React from 'react';
import { TimeLogo } from '../../../assets';
import GroupAvatars from '../../UI/GroupAvatars';
import moment from 'moment';

const QuestCard = ({ className, data, type }) => {
  return (
    <div className={`max-home__quest-wrapper ${className} `}>
      <div className='max-home__questcard-container'>
        <div className='quest-time-details'>
          <div className='d-flex quest-time-details-text justify-content-between'>
            <h6>
              <TimeLogo.default /> 10/30/2022 to 11/20/2022
            </h6>
            <h5>
              Expire in:
              <strong>{moment(data?.endDate).diff(moment(), 'days')}</strong>
              <small>days</small>
            </h5>
          </div>
          <h3>{data?.name}</h3>
          <div className='quest-home-content-container d-flex justify-content-between'>
            <div>{type === 'challenges' ? '' : <GroupAvatars />}</div>
            <div className='quest-home__progress'>
              <p className='progress'>In progress</p>
              <p className='quest'>quest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
