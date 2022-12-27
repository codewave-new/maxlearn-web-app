import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { TimeLogo, CalenderIcon, RightArrow } from '../../../assets';
import Chip from '../../Common/chip/Chip';
import SquadAvatar from '../../../pages/Challenges/SquadAvatar';
import { getCertBasedOnLearnerId } from '../../../services/certs';

const useFetchCertQuestListing = (userID) => {
  const [certsQuests, setCertsQuests] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const resp = await getCertBasedOnLearnerId(userID);
        if (resp.data.statusCode === 200) {
          const { data } = resp.data;
          setCertsQuests(data);
        }
      } catch (err) {
        console.log(err.response);
      }
    })();
  }, [userID]);

  return certsQuests;
};

const useCreateQuestCards = (certsAndQuestData) => {
  const navigate = useNavigate();
  const endTime = moment('24:00:00', 'HH:mm:ss');
  const duration = moment.duration(endTime.diff(moment()));

  const [questCards, setQuestCards] = useState([]);

  // const certsAndQuestData1 = {
  //   list: [
  //     {
  //       name: 'resr',
  //       _id: 1,
  //       endDate: '12/12/2022',
  //       type: 'cert',
  //     },
  //   ],
  // };

  const handleCardClick = (ele) => {
    const userName = localStorage.getItem('fullname');
    if (ele.type === 'cert') {
      navigate('/to-do/cert/start', {
        state: {
          type: 'cert',
          status: ele?.certResults?.certStatus ?? '',
          certName: ele.name,
          certID: ele._id,
          userName,
        },
      });
    }
  };

  useEffect(() => {
    if (
      certsAndQuestData &&
      certsAndQuestData.list &&
      certsAndQuestData.list.length
    ) {
      const cards = certsAndQuestData.list.map((ele) => (
        <div className='col-md-6 col-12' key={ele._id}>
          <div
            className='max-home__quest-wrapper'
            style={{ cursor: 'pointer' }}
            onClick={() => handleCardClick(ele)}
          >
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
                    <strong>
                      {ele.endDate
                        ? moment(ele.endDate).diff(moment(), 'days')
                        : ' '}
                    </strong>
                    <small>days</small>
                  </h5>
                </div>
                <h3>{ele?.name}</h3>
                <div className='quest-home-content-container d-flex justify-content-between'>
                  <div>{<SquadAvatar data={ele} />}</div>
                  <div className='quest-home__progress'>
                    <Chip
                      status={
                        ele.type === 'cert' && ele.certResults
                          ? ele.certResults.certStatus === 'finished' &&
                            'COMPLETED'
                          : ele.questResults &&
                            ele.questResults.status === 'in_progress' &&
                            'IN-PROGRESS'
                      }
                    />
                  </div>
                  <div
                    className={
                      ele.type === 'cert' ? 'ml-cert-chip' : 'ml-quest-chip'
                    }
                  >
                    {ele?.type?.charAt(0).toUpperCase() +
                      ele?.type?.slice(1).toLowerCase() ?? 'N/A'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
      setQuestCards(cards);
    }
    return () => {};
  }, [certsAndQuestData]);

  return questCards;
};

const QuestCertListing = () => {
  const userId = localStorage.getItem('userid');

  const [modalStatus, setModalStatus] = useState(false);

  const certQuestListingData = useFetchCertQuestListing(userId);

  const questCards = useCreateQuestCards(certQuestListingData);

  const handleModalOpen = async () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <>
      <div className='' style={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <div className='row'>{questCards}</div>
      </div>
      <button className='upcomming__todo-btn w-100' onClick={handleModalOpen}>
        <div>
          <CalenderIcon.default />
          <span className='upcomming__todo-text mb-0'>
            Get update on your upcoming quests and certs
          </span>
        </div>
        <div>
          <RightArrow.default />
        </div>
      </button>
    </>
  );
};

export default QuestCertListing;
