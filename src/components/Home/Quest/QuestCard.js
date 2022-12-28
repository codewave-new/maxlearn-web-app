import React, { useEffect, useState } from 'react';
import { Points, TimeLogo, ToDoCalendarIcon } from '../../../assets';
import GroupAvatars from '../../UI/GroupAvatars';
import moment from 'moment-timezone';
import Chip from '../../Common/chip/Chip';
import SquadAvatar from '../../../pages/Challenges/SquadAvatar';

const QuestCard = ({ className, data, type, status, challengeType }) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const completionDate = moment(data?.endDate).diff(moment(), 'minutes');
  const endTime = moment('24:00:00', 'HH:mm:ss');
  const duration = moment.duration(endTime.diff(moment()));

  const endDateTz = moment.tz(data?.endDate, timeZone);
  const startDateTz = moment.tz(data?.startDate, timeZone);

  const challengeEndDate = moment
    .tz(new Date(), timeZone)
    .diff(startDateTz, 'days');

  const challengeStartDate = endDateTz.diff(startDateTz, 'days') + 1;

  return (
    <div className={`max-home__quest-wrapper ${className} `}>
      <div className='max-home__questcard-container'>
        <div className='quest-time-details'>
          <div className='d-flex quest-time-details-text justify-content-between'>
            {(status === 'COMPLETED' || data?.status === 'COMPLETED') &&
            completionDate <= 0 ? (
              <h6 className='d-flex align-items-center'>
                <ToDoCalendarIcon.default /> &nbsp;
                {` Closed on ${moment
                  .utc(data?.endDate, 'YYYY-MM-DD HH:mm:ss')
                  .tz(timeZone)
                  .format('l')}`}
              </h6>
            ) : challengeType === 'upcoming' ? (
              <h6 className='d-flex align-items-center'>
                <ToDoCalendarIcon.default /> &nbsp;
                {` Starts on ${moment
                  .utc(data?.startDate, 'YYYY-MM-DD HH:mm:ss')
                  .tz(timeZone)
                  .format('l')}`}
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
                <strong>{challengeStartDate}</strong>
                <small>days</small>
              </h6>
            ) : (
              <h5>
                {challengeEndDate ? (
                  <>
                    Expire in:
                    <strong> {challengeEndDate}</strong>
                    <small> days</small>
                  </>
                ) : (
                  <>
                    Expires
                    <strong> Today</strong>
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
