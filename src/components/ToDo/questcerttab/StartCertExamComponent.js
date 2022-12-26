import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Points, StartCertExam } from '../../../assets';
import { startCertExam } from '../../../services/certs';
import CustomButton from '../../Common/CustomButton/CustomButton';

const StartCertExamComponent = (props) => {
  const { certInfo } = props;

  const navigate = useNavigate();

  const handleClick = async (certInfo) => {
    navigate('/start-cert-exam', {
      state: { ...certInfo, resultId: '63a5a50eecc6f8c11cb6d37d' },
    });
    // try {
    //   const learnerId = localStorage.getItem('userid');
    //   const res = await startCertExam({
    //     certId: certInfo.certID,
    //     learnerId,
    //   });
    //   console.log(res);
    //   if (res.data.statusCode === 200) {
    //     const { resultId } = res.data.data;
    //     navigate('/start-cert-exam', {
    //       state: { ...certInfo, resultId },
    //     });
    //   }
    // } catch (err) {
    //   console.log(err.response);
    //   if (err.response?.data?.statusCode === 409) {
    //     toast.error('This Cert is completed');
    //   }
    // }
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
        <h4 className=''>It's time to take the Cert!</h4>
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
          // disabled={
          //   certInfo.status === 'finished' || certInfo.status === 'completed'
          // }
          disabledText={
            certInfo.status === 'finished' || certInfo.status === 'completed'
              ? 'Completed'
              : 'Start Cert'
          }
          text={
            // stat === '' && !questionsInfo?._id && isLoading ? (
            //   <WaitingLoader />
            // ) : (
            'Start Cert'
            // )
          }
          handleClick={() => handleClick(certInfo)}
        />
      </div>
    </div>
  );
};

export default StartCertExamComponent;
