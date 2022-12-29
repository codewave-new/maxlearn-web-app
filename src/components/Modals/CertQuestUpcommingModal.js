import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { TimeLogo } from '../../assets';
import SquadAvatar from '../../pages/Challenges/SquadAvatar';
import { getCertBasedOnLearnerId } from '../../services/certs';
import Chip from '../Common/chip/Chip';
import { CenterLoadingBar } from '../loader/loader';

const CertQuestUpcommingModal = (props) => {
  const { show, onHide, userId } = props;

  const navigate = useNavigate();

  const [certsQuests, setCertsQuests] = useState([]);
  const [loading, setLoading] = useState(false);

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
          from: 'upcoming',
        },
      });
    }
  };

  useEffect(() => {
    (async () => {
      if (userId && show) {
        setLoading(true);
        try {
          const resp = await getCertBasedOnLearnerId(userId, true);
          if (resp.data.statusCode === 200) {
            const { data } = resp.data;
            setCertsQuests(data);
            setLoading(false);
          }
        } catch (err) {
          console.log(err.response);
          setLoading(false);
        }
      }
    })();
  }, [userId, show]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop='static'
      keyboard={false}
      className='ml-edit-user-details'
      dialogClassName='ml-edit-user-details__modal-dialog ml-modal-blur'
      contentClassName='ml-edit-user-details__modal-content'
    >
      <Modal.Header closeButton className='ml-edit-user-details__modal-header'>
        <Modal.Title>Upcoming quests & certs</Modal.Title>
      </Modal.Header>
      <Modal.Body className='ml-edit-user-details__modal-body'>
        <h4 className='modal__body-header'>
          You have {certsQuests?.list?.length ?? 0} upcoming learn quests
        </h4>

        <div className='' style={{ maxHeight: '100vh', overflowY: 'auto' }}>
          {loading ? (
            <CenterLoadingBar />
          ) : (
            <div className='row m-0'>
              {certsQuests && certsQuests.list && certsQuests.list.length
                ? certsQuests.list.map((ele) => (
                    // eslint-disable-next-line no-underscore-dangle
                    <div className='col-12 pl-0' key={ele._id}>
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
                                {/* {`${parseInt(duration.asHours())} hours ${
                      parseInt(duration.asMinutes()) % 60
                    } minutes `} */}
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
                              <div>
                                <SquadAvatar data={ele} />
                              </div>
                              <div className='quest-home__progress'>
                                <Chip
                                  status={
                                    ele.type === 'cert' && ele.certResults
                                      ? ele.certResults.certStatus ===
                                          'finished' && 'COMPLETED'
                                      : ele.questResults &&
                                        ele.questResults.status ===
                                          'in_progress' &&
                                        'IN-PROGRESS'
                                  }
                                />
                              </div>
                              <div
                                className={
                                  ele.type === 'cert'
                                    ? 'ml-cert-chip'
                                    : 'ml-quest-chip'
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
                  ))
                : ''}
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CertQuestUpcommingModal;
