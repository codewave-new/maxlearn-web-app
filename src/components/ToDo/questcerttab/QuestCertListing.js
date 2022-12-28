import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { TimeLogo, CalenderIcon, RightArrow } from '../../../assets';
import Chip from '../../Common/chip/Chip';
import SquadAvatar from '../../../pages/Challenges/SquadAvatar';
import { getCertBasedOnLearnerId } from '../../../services/certs';
import { CenterLoadingBar } from '../../loader/loader';
import CertQuestUpcommingModal from '../../Modals/CertQuestUpcommingModal';

const useFetchCertQuestListing = (userID) => {
  const [certsQuests, setCertsQuests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataToBeReturned, setDataToBeReturned] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const resp = await getCertBasedOnLearnerId(userID);
        if (resp.data.statusCode === 200) {
          const { data } = resp.data;
          setCertsQuests(data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err.response);
        setLoading(false);
      }
    })();
  }, [userID]);

  useEffect(() => {
    if (!loading) setDataToBeReturned(certsQuests);
    if (loading) setDataToBeReturned('loading');
  }, [loading]);

  return dataToBeReturned;
};

const useCreateQuestCards = (certsAndQuestData) => {
  const navigate = useNavigate();
  // const endTime = moment('24:00:00', 'HH:mm:ss');
  // const duration = moment.duration(endTime.diff(moment()));

  const [questCards, setQuestCards] = useState([]);

  const handleCardClick = (ele) => {
    const userName = localStorage.getItem('fullname');
    const userID = localStorage.getItem('userid');
    if (ele.type === 'cert') {
      navigate('/to-do/cert/start', {
        state: {
          type: 'cert',
          status: ele?.certResults?.certStatus ?? '',
          certName: ele.name,
          // eslint-disable-next-line no-underscore-dangle
          certID: ele._id,
          userName,
          userID,
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
        // eslint-disable-next-line no-underscore-dangle
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
                    {!ele.startDate && !ele.endDate
                      ? 'Time is not limited'
                      : moment(ele.endDate).diff(moment(), 'days') > 1
                      ? `${moment(ele.startDate).format(
                          'MM/DD/yy'
                        )} to ${moment(ele.endDate).format('MM/DD/yy')}`
                      : moment(ele.endDate).diff(moment(), 'days') > -1 &&
                        moment(ele.endDate).diff(moment(), 'days') < 1
                      ? `${moment
                          .duration(moment(ele.endDate).diff(moment()))
                          .asHours()} hours ${
                          moment
                            .duration(moment(ele.endDate).diff(moment()))
                            .asMinutes() % 60
                        } minutes 
                      `
                      : 'Expired'}
                  </h6>
                  {moment(ele.endDate).diff(moment(), 'days') > 1 ? (
                    <h5>
                      Expire in:{' '}
                      <strong>
                        {ele.endDate
                          ? moment(ele.endDate).diff(moment(), 'days')
                          : ' '}
                      </strong>
                      <small>days</small>
                    </h5>
                  ) : (
                    ''
                  )}
                </div>
                <h3>{ele?.name}</h3>
                <div className='quest-home-content-container d-flex justify-content-between'>
                  <div>{<SquadAvatar data={ele} />}</div>
                  <div className='quest-home__progress'>
                    <Chip
                      status={
                        ele.type === 'cert' && ele.certResults
                          ? (ele.certResults.certStatus === 'finished' &&
                              'COMPLETED') ||
                            (ele.certResults.certStatus === 'started' &&
                              'IN-PROGRESS')
                          : ele.questResults &&
                            (ele.questResults.status === 'in_progress' ||
                              ele.questResults.status === 'started') &&
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

  return certQuestListingData === 'loading' ? (
    <CenterLoadingBar />
  ) : (
    <>
      <div className='' style={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <div className='row m-0'>{questCards}</div>
      </div>
      <button
        className='upcomming__todo-btn w-100 mt-4'
        onClick={handleModalOpen}
      >
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

      <CertQuestUpcommingModal
        show={modalStatus}
        onHide={closeModal}
        userId={userId}
      />
    </>
  );
};

export default QuestCertListing;
