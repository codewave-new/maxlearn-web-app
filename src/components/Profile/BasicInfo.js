import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BasicInfoEdit } from '../../assets';
import { CenterLoadingBar } from '../loader/loader';
import EditUserDetailsModal from '../Modals/EditUserDetailsModal';

const BasicInfo = () => {
  const { profileDetails, loading } = useSelector((state) => state.profile);
  const [showEditUserDetailsForm, setShowEditUserDetailsForm] = useState(false);

  const handleEditUserDetailsForm = () => setShowEditUserDetailsForm(true);
  const closeModal = () => setShowEditUserDetailsForm(false);

  return (
    <>
      {loading ? (
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
              <p className='bio-desc'>{profileDetails?.learnerBio || '-'}</p>
            </div>
            <div className='ml-pbi__usd-block white-block'>
              {Object.keys(profileDetails?.learnerInfo)?.map(
                (learnerKeys, index) => (
                  <div className='row usd-row' key={`profile-0${index}`}>
                    <div className='col-4 p-0'>
                      <span className='ml-pbi__text ml-pbi-grey'>
                        {learnerKeys}
                      </span>
                    </div>
                    <div className='col-8 pr-0'>
                      <span className='ml-pbi__text ml-pbi-black w-100'>
                        {profileDetails?.learnerInfo?.[learnerKeys] || '-'}
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
              {Object.keys(profileDetails?.learnerCompany)?.map(
                (companyKeys, index) => (
                  <div className='row usd-row' key={`profile-7${index}`}>
                    <div className='col-4 p-0'>
                      <span className='ml-pbi__text ml-pbi-grey'>
                        {companyKeys}
                      </span>
                    </div>
                    <div className='col-8 pr-0'>
                      <span className='ml-pbi__text ml-pbi-black w-100'>
                        {profileDetails?.learnerCompany?.[companyKeys] || '-'}
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
        mobileNo={profileDetails?.learnerInfo?.['Mobile number']}
        bio={profileDetails?.learnerBio}
      />
    </>
  );
};

export default BasicInfo;
