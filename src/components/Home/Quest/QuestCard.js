import React, { useEffect, useState } from 'react';
import { Points, TimeLogo, ToDoCalendarIcon } from '../../../assets';
import GroupAvatars from '../../UI/GroupAvatars';
import moment from 'moment';
import Chip from '../../Common/chip/Chip';
import SquadAvatar from '../../../pages/Challenges/SquadAvatar';

const QuestCard = ({ className, data, type, status, challengeType }) => {
  const completionDate = moment(data?.endDate).diff(moment(), 'minutes');
  const endTime = moment('24:00:00', 'HH:mm:ss');
  const duration = moment.duration(endTime.diff(moment()));
  const challengeEndDate = moment(data?.endDate).diff(moment(), 'days');
  const challengeStartDate = moment(data?.startDate).diff(moment(), 'days');

  return (
    <div className={`max-home__quest-wrapper ${className} `}>
      <div className='max-home__questcard-container'>
        <div className='quest-time-details'>
          <div className='d-flex quest-time-details-text justify-content-between'>
            {(status === 'COMPLETED' || data?.status === 'COMPLETED') &&
            completionDate <= 0 ? (
              <h6 className='d-flex align-items-center'>
                <ToDoCalendarIcon.default /> &nbsp;
                {` Closed on ${moment(data?.endDate).format('MM/DD/YYYY')}`}
              </h6>
            ) : challengeType === 'upcoming' ? (
              <h6 className='d-flex align-items-center'>
                <ToDoCalendarIcon.default /> &nbsp;
                {` Starts on ${moment(data?.startDate).format('MM/DD/YYYY')}`}
              </h6>
            ) : (
              <h6>
                <TimeLogo.default />{' '}
                {`${parseInt(duration.asHours())} hours ${
                  parseInt(duration.asMinutes()) % 60
                } minutes `}
              </h6>
            )}
            {(status === 'COMPLETED' || data?.status === 'COMPLETED') &&
            completionDate <= 0 ? (
              <h5 className='text-end'>
                Your squad earned:
                <br />
                <img
                  className='points__earned-image'
                  src={Points.default}
                />{' '}
                <strong>{data?.pointsEarned}</strong>
                <small>points</small>
              </h5>
            ) : challengeType === 'upcoming' ? (
              <h6 className='d-flex align-items-center'>
                Schedule for:
                <strong>
                  {challengeStartDate ? challengeStartDate : 'Today'}
                </strong>
                <small>days</small>
              </h6>
            ) : (
              <h5>
                {challengeEndDate ? (
                  <>
                    Expire in:
                    <strong>{' '}{challengeEndDate}</strong>
                    <small> days</small>
                  </>
                ) : (
                  <>
                    Expires 
                    <strong>{' '}Today</strong>
                  </>
                )}
              </h5>
            )}
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
