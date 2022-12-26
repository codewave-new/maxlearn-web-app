import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Points, StartCertExam } from '../../../assets';
import { resumeCertExam, startCertExam } from '../../../services/certs';
import CustomButton from '../../Common/CustomButton/CustomButton';

const StartCertExamComponent = (props) => {
  const { certInfo } = props;

  const navigate = useNavigate();

  const handleClick = async (certInfoProp) => {
    // navigate('/start-cert-exam', {
    //   state: { ...certInfoProp, resultId: '63a5a50eecc6f8c11cb6d37d' },
    // });

    try {
      // const learnerId = localStorage.getItem('userid');
      let resp = '';
      if (certInfoProp.status === 'started') {
        resp = await resumeCertExam({
          certId: certInfoProp.certID,
          learnerId: certInfoProp.userID,
        });
      }
      if (certInfoProp.status !== 'started') {
        resp = await startCertExam({
          certId: certInfoProp.certID,
          learnerId: certInfoProp.userID,
        });
      }
      console.log(resp);
      if (resp.data.statusCode === 200) {
        const { resultId } = resp.data.data;
        const { lastQuestionIdIndex } = resp.data.data;
        navigate('/start-cert-exam', {
          state: { ...certInfoProp, resultId, lastQuestionIdIndex },
        });
      }
    } catch (err) {
      console.log(err.response);
      if (err.response?.data?.statusCode === 409) {
        toast.error('This Cert is completed');
      }
    }
  };

  return (
    <div className='row m-0 justify-content-start align-items-center'>
      <div className='col-md-5'>
        <img src={StartCertExam.default} alt='' className='w-100' />
      </div>
      <div className='col-md-7'>
        <h6 className=''>
          Hello {certInfo && certInfo.userName ? certInfo.userName : 'N/A'},
        </h6>
        <h4 className=''>
          {certInfo && certInfo.from === 'upcoming'
            ? 'Upcoming Cert!'
            : "It's time to take the Cert!"}
        </h4>
        <div className='d-flex'>
          <img
            className='detail__card__body-points-img'
            src={Points.default}
            alt=''
          />
          <p className=''>
            Sed ut perspiciatis unde omnis iste natus ers uptatem accusantium
            doloremque laudant.
          </p>
        </div>
        <CustomButton
          disabled={certInfo && certInfo.from === 'upcoming'}
          disabledText={
            certInfo.status === 'finished' || certInfo.status === 'completed'
              ? 'Completed'
              : certInfo && certInfo.from === 'upcoming' && 'Yet to start'
          }
          text={certInfo.status === 'started' ? 'Resume Cert' : 'Start Cert'}
          handleClick={() => handleClick(certInfo)}
        />
      </div>
    </div>
  );
};

export default StartCertExamComponent;
