import React, { useEffect, useState } from 'react';
import { Versus } from '../../assets';

const SquadAvatar = ({ data, yourSquad, opponentSquads }) => {
  const [learnerData, setLearnerData] = useState({});
  const [opponentData, setOpponentData] = useState([]);

  const imageVarient = {
    INDIVIDUAL: 'individual__image-img',
    SQUAD: 'squad__image-img',
  };

  useEffect(() => {
    const currentlearner = '63738c435aaa893eecc9dbc1';
    if (data?.challengeType == 'SQUAD') {
      segregation(data?.squadList, data?.mySquad);
    } else {
      segregation(data?.learnerList, currentlearner);
    }

    if (yourSquad || opponentSquads) {
      setLearnerData(yourSquad);
      setOpponentData(opponentSquads);
    }
  }, []);

  const segregation = (array, currentlearner) => {
    const opponents = array?.filter(
      (individualOpponent) => individualOpponent?._id !== currentlearner
    );
    setOpponentData(opponents);
    const myData = array?.filter(
      (individualOpponent) => individualOpponent?._id === currentlearner
    );
    setLearnerData(myData?.[0]);
  };

  return (
    <>
      <span className='squad__image-container'>
        <img
          className={`${imageVarient[data?.challengeType]}`}
          src={learnerData?.profilePic || learnerData?.imageUrl}
          alt='data'
        />
      </span>
      <span className='squad__versus-img'>
        <Versus.default />
      </span>
      {opponentData?.slice(0, 2).map((individualOpponent, index) => (
        <span className='squad__image-container' key={individualOpponent?._id}>
          <img
            className={`${imageVarient[data?.challengeType]} image__grid`}
            src={individualOpponent?.profilePic || individualOpponent?.imageUrl}
            alt='no'
          />
          {index === 1 && opponentData.length - 2 > 0 ? (
            <span className='more__opponents'>
              + {opponentData.length - 2} more
            </span>
          ) : (
            ''
          )}
        </span>
      ))}
    </>
  );
};

export default SquadAvatar;
