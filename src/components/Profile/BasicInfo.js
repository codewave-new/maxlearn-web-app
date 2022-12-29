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
  const [userInformation, setUserInformation] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    learnerInformation(authData.learnerId);
  }, []);

  const learnerInformation = async (learnerId) => {
    setIsLoading(true);
    const response = await BasicInformation(learnerId);
    setIsLoading(false);
    if (response.statusCode === 200) {
      setUserInformation(response?.data);
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
              <p className='bio-desc'>{userInformation?.bio}</p>
            </div>
            <div className='ml-pbi__usd-block white-block'>
              <div className='row usd-row'>
                <div className='col-4 p-0'>
                  <span className='ml-pbi__text ml-pbi-grey'>Full name</span>
                </div>
                <div className='col-8 pr-0'>
                  <span className='ml-pbi__text ml-pbi-black w-100'>
                    {userInformation?.fullName}
                  </span>
                </div>
              </div>
              <div className='row usd-row'>
                <div className='col-4 p-0'>
                  <span className='ml-pbi__text ml-pbi-grey'>Employee ID</span>
                </div>
                <div className='col-8 pr-0'>
                  <span className='ml-pbi__text ml-pbi-black w-100'>
                    {userInformation?.empId}
                  </span>
                </div>
              </div>
              <div className='row usd-row'>
                <div className='col-4 p-0'>
                  <span className='ml-pbi__text ml-pbi-grey'>Email addess</span>
                </div>
                <div className='col-8 pr-0'>
                  <span className='ml-pbi__text ml-pbi-black w-100'>
                    {userInformation?.emailId}
                  </span>
                </div>
              </div>
              <div className='row usd-row'>
                <div className='col-4 p-0'>
                  <span className='ml-pbi__text ml-pbi-grey'>
                    Mobile number
                  </span>
                </div>
                <div className='col-8 pr-0'>
                  <span className='ml-pbi__text ml-pbi-black w-100'>
                    {userInformation?.mobile}
                  </span>
                </div>
              </div>
              <div className='row usd-row'>
                <div className='col-4 p-0'>
                  <span className='ml-pbi__text ml-pbi-grey'>Work mail ID</span>
                </div>
                <div className='col-8 pr-0'>
                  <span className='ml-pbi__text ml-pbi-black w-100'>
                    {userInformation?.emailId}
                  </span>
                </div>
              </div>
              <div className='row usd-row'>
                <div className='col-4 p-0'>
                  <span className='ml-pbi__text ml-pbi-grey'>Department</span>
                </div>
                <div className='col-8 pr-0'>
                  <span className='ml-pbi__text ml-pbi-black w-100'>
                    {userInformation?.departmentInfo?.department}
                  </span>
                </div>
              </div>
              <div className='row usd-row'>
                <div className='col-4 p-0'>
                  <span className='ml-pbi__text ml-pbi-grey'>Job Title</span>
                </div>
                <div className='col-8 pr-0'>
                  <span className='ml-pbi__text ml-pbi-black w-100'>
                    {userInformation?.jobTitleInfo?.jobTitle}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='ml-pbi__company-details col-12 col-md-6'>
            <h5 className='m-0 mb-3 basic-info-title'>Company details</h5>
            <div className='ml-pbi__usd-comp-block white-block'>
              <div className='row usd-row'>
                <div className='col-4 p-0'>
                  <span className='ml-pbi__text ml-pbi-grey'>Company name</span>
                </div>
                <div className='col-8 pr-0'>
                  <span className='ml-pbi__text ml-pbi-black w-100'>
                    {userInformation?.company_name}
                  </span>
                </div>
              </div>
              <div className='row usd-row'>
                <div className='col-4 p-0'>
                  <span className='ml-pbi__text ml-pbi-grey'>Country</span>
                </div>
                <div className='col-8 pr-0'>
                  <span className='ml-pbi__text ml-pbi-black w-100'>
                    {userInformation?.country}
                  </span>
                </div>
              </div>
              <div className='row usd-row'>
                <div className='col-4 p-0'>
                  <span className='ml-pbi__text ml-pbi-grey'>State</span>
                </div>
                <div className='col-8 pr-0'>
                  <span className='ml-pbi__text ml-pbi-black w-100'>
                    {userInformation?.state}
                  </span>
                </div>
              </div>
              {/* <div className='row usd-row'>
               <div className='col-4 p-0'>
                <span className='ml-pbi__text ml-pbi-grey'>Location</span>
              </div>
              <div className='col-8 pr-0'>
                <span className='ml-pbi__text ml-pbi-black w-100'>
                  Bangalore, KA, India
                </span>
              </div>
            </div>  */}
            </div>
          </div>
        </div>
      )}

      <EditUserDetailsModal
        show={showEditUserDetailsForm}
        onHide={closeModal}
      />
    </>
  );
};

export default BasicInfo;
