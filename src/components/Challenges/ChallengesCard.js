import { ModeComment } from '@mui/icons-material';
import moment from 'moment';
import React from 'react';
import { Points, TimeLogo, ToDoCalendarIcon } from '../../assets';

const ChallengesCard = (props) => {
  const {
    id,
    challenger,
    discription,
    opponent,
    time,
    expire,
    challengerImg,
    opponentImg,
    type,
    completionStatus,
  } = props;

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const completionDate = moment(completionStatus.endDate).diff(
    moment(),
    'minutes'
  );
  const endTime = moment('24:00:00', 'HH:mm:ss');
  const duration = moment.duration(endTime.diff(moment()));

  const endDateTz = moment.tz(completionStatus.endDate, timeZone);
  const startDateTz = moment.tz(completionStatus.startDate, timeZone);
  const start = moment(startDateTz).format('h:mm:ss ');
  const end = moment(endDateTz).format('h:mm:ss ');

  const timeDifference = startDateTz - endDateTz;

  const hourdiff = Math.floor(timeDifference / (1000 * 3600));
  const mindiff = Math.floor(timeDifference % (1000 * 3600));

  console.log(moment(startDateTz).format('h:mm:ss '), 'chandan');
  console.log(timeDifference);

  const challengeEndDate = moment
    .tz(new Date(), timeZone)
    .diff(startDateTz, 'days');

  console.log(
    moment
      .utc(completionStatus.endDate, 'YYYY-MM-DD HH:mm:ss')
      .tz(timeZone)
      .format('l')
  );
  const challengeStartDate = endDateTz.diff(startDateTz, 'days') + 1;

  console.log(completionStatus, 'status ');
  return (
    <div className='max-home_challenges__card-wrapper'>
      <div className='d-flex max-home_challenges__card-container'>
        {/* <img className='max-home-challenges-bg' src={HomeFlashBg.default} alt='' /> */}
        <div className='left_challenges-container'>
          <div className='left_challenge_icon-container'>
            <img
              src={challengerImg}
              className={type === 'SQUAD' ? 'image_own' : 'image_own_learner'}
              alt=''
            />
          </div>
          <p>{challenger}</p>
        </div>
        <div className='right_challenges-container'>
          <div className='right_challenge_icon-container'>
            <img
              src={opponentImg}
              alt=''
              className={
                type === 'SQUAD' ? 'image_opponent ' : 'image_opponent_learner'
              }
            />
          </div>
          <p>{opponent}</p>
          <p className='remain_members'>
            {type === 'SQUAD' && completionStatus.squadList.length > 1
              ? `+ ${completionStatus.squadList.length - 1} Squad(s)`
              : type === 'INDIVIDUAL' && completionStatus.learnerList.length > 1
              ? `+ ${completionStatus.learnerList.length - 1} People`
              : ''}
          </p>
        </div>
      </div>
      <div>
        <div className='max-challenges-content-container'>
          <div className='time-details'>
            <div className='d-flex time-details-text justify-content-between'>
              {completionStatus.completionStatus === 'ONGOING' ? (
                <h6>
                  {' '}
                  <TimeLogo.default />{' '}
                  {`${parseInt(duration.asHours())} hours ${
                    parseInt(duration.asMinutes()) % 60
                  } minutes `}
                </h6>
              ) : (
                <h6>
                  {' '}
                  <TimeLogo.default /> Start on{' '}
                  {moment(startDateTz).format('DD/MM/YYYY')}{' '}
                </h6>
              )}
              {/* <h6>5 hrs 6 min left</h6> */}
              {completionStatus.completionStatus === 'ONGOING' ? (
                <h5>
                  Expire in: <strong>{challengeEndDate} </strong>{' '}
                  <small>Days</small>
                </h5>
              ) : (
                <h5>
                  Scheduled for <strong>{challengeEndDate} </strong>{' '}
                  <small>Days</small>
                </h5>
              )}
            </div>
            <h3>{discription}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChallengesCard;
