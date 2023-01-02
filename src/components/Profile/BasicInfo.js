import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BasicInfoEdit } from '../../assets';
import { BasicInformation } from '../../services/profile';
import { removeAuth } from '../../state/slices/loginSlice.';
import { CenterLoadingBar } from '../loader/loader';
import EditUserDetailsModal from '../Modals/EditUserDetailsModal';

const BasicInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth);
  const [showEditUserDetailsForm, setShowEditUserDetailsForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [learnerDetails, setLearnerDetails] = useState({
    learnerBio: '',
    learnerInfo: {
      'Full name': '',
      'Employee ID': '',
      'Email addess': '',
      'Mobile number': '',
      'Work mail ID': '',
      Department: '',
      'Job Title': '',
    },
    learnerCompany: {
      'Company name': '',
      Country: '',
      State: '',
    },
  });
  console.log(learnerDetails);

  useEffect(() => {
    learnerInformation(authData.learnerId);
  }, []);

  const learnerInformation = async (learnerId) => {
    setIsLoading(true);
    const response = await BasicInformation(learnerId);
    setIsLoading(false);
    if (response.statusCode === 200) {
      const learnerInfo = response?.data;
      setLearnerDetails({
        learnerBio: learnerInfo?.bio,
        learnerInfo: {
          'Full name': learnerInfo?.fullName,
          'Employee ID': learnerInfo?.empId,
          'Email addess': learnerInfo?.emailId,
          'Mobile number': learnerInfo?.mobile,
          'Work mail ID': learnerInfo?.emailId,
          Department: learnerInfo?.departmentInfo?.department,
          'Job Title': learnerInfo?.jobTitleInfo?.jobTitle,
        },
        learnerCompany: {
          'Company name': learnerInfo?.company_name,
          Country: learnerInfo?.country,
          State: learnerInfo?.state,
        },
      });
    } else if (response.statusCode === 440) {
      navigate('/login');
      localStorage.clear();
      dispatch(removeAuth());
      toast.error('session expired');
    }
  };

  const handleEditUserDetailsForm = () => setShowEditUserDetailsForm(true);
  const closeModal = () => setShowEditUserDetailsForm(false);

  return (
    <>
      {isLoading ? (
        <CenterLoadingBar />
      ) : (
        <div className='ml-pbi row'>
          <div className='ml-pbi__user-details col-12 col-md-6'>
            <h5 className='m-0 mb-3 basic-info-title'>
              User details
              <span
                className='basic-info-edit-btn'
                onClick={handleEditUserDetailsForm}
              >
                <BasicInfoEdit.default />
              </span>
            </h5>
            <div className='ml-pbi__usd-bio-block white-block mb-3'>
              <h5 className='ml-pbi__text ml-pbi-grey'>My bio</h5>
              <p className='bio-desc'>{learnerDetails?.learnerBio || '-'}</p>
            </div>
            <div className='ml-pbi__usd-block white-block'>
              {Object.keys(learnerDetails?.learnerInfo)?.map(
                (learnerKeys, index) => (
                  <div className='row usd-row' key={`profile-0${index}`}>
                    <div className='col-4 p-0'>
                      <span className='ml-pbi__text ml-pbi-grey'>
                        {learnerKeys}
                      </span>
                    </div>
                    <div className='col-8 pr-0'>
                      <span className='ml-pbi__text ml-pbi-black w-100'>
                        {learnerDetails?.learnerInfo?.[learnerKeys] || '-'}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className='ml-pbi__company-details col-12 col-md-6'>
            <h5 className='m-0 mb-3 basic-info-title'>Company details</h5>
            <div className='ml-pbi__usd-comp-block white-block'>
              {Object.keys(learnerDetails?.learnerCompany)?.map(
                (companyKeys, index) => (
                  <div className='row usd-row' key={`profile-7${index}`}>
                    <div className='col-4 p-0'>
                      <span className='ml-pbi__text ml-pbi-grey'>
                        {companyKeys}
                      </span>
                    </div>
                    <div className='col-8 pr-0'>
                      <span className='ml-pbi__text ml-pbi-black w-100'>
                        {learnerDetails?.learnerCompany?.[companyKeys] || '-'}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      <EditUserDetailsModal
        show={showEditUserDetailsForm}
        onHide={closeModal}
        mobileNo={learnerDetails?.learnerInfo?.['Mobile number']}
        bio={learnerDetails?.learnerBio}
      />
    </>
  );
};

export default BasicInfo;
