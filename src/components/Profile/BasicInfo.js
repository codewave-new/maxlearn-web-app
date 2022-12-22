import React, { useState } from 'react';
import { BasicInfoEdit } from '../../assets';
import EditUserDetailsModal from '../Modals/EditUserDetailsModal';

const BasicInfo = () => {
  const dummyUserId = '6399d070af314ab863dce89c';
  const [showEditUserDetailsForm, setShowEditUserDetailsForm] = useState(false);

  const handleEditUserDetailsForm = () => setShowEditUserDetailsForm(true);
  const closeModal = () => setShowEditUserDetailsForm(false);

  return (
    <>
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
            <p className='bio-desc'>
              Sed ut perspiciatis unde omnis iste natus ers amets uptatem
              accusantium doloremque laudant undeoml nis iste unde omnis iste.
            </p>
          </div>
          <div className='ml-pbi__usd-block white-block'>
            <div className='row usd-row'>
              <div className='col-4 p-0'>
                <span className='ml-pbi__text ml-pbi-grey'>Full name</span>
              </div>
              <div className='col-8 pr-0'>
                <span className='ml-pbi__text ml-pbi-black w-100'>
                  Chrisbell Antony
                </span>
              </div>
            </div>
            <div className='row usd-row'>
              <div className='col-4 p-0'>
                <span className='ml-pbi__text ml-pbi-grey'>Employee ID</span>
              </div>
              <div className='col-8 pr-0'>
                <span className='ml-pbi__text ml-pbi-black w-100'>
                  CWST2007
                </span>
              </div>
            </div>
            <div className='row usd-row'>
              <div className='col-4 p-0'>
                <span className='ml-pbi__text ml-pbi-grey'>Email addess</span>
              </div>
              <div className='col-8 pr-0'>
                <span className='ml-pbi__text ml-pbi-black w-100'>
                  chrisbellan@codewave.com
                </span>
              </div>
            </div>
            <div className='row usd-row'>
              <div className='col-4 p-0'>
                <span className='ml-pbi__text ml-pbi-grey'>Mobile number</span>
              </div>
              <div className='col-8 pr-0'>
                <span className='ml-pbi__text ml-pbi-black w-100'>
                  +91 8899978880
                </span>
              </div>
            </div>
            <div className='row usd-row'>
              <div className='col-4 p-0'>
                <span className='ml-pbi__text ml-pbi-grey'>Work mail ID</span>
              </div>
              <div className='col-8 pr-0'>
                <span className='ml-pbi__text ml-pbi-black w-100'>
                  chrisbellan@codewave.com
                </span>
              </div>
            </div>
            <div className='row usd-row'>
              <div className='col-4 p-0'>
                <span className='ml-pbi__text ml-pbi-grey'>Department</span>
              </div>
              <div className='col-8 pr-0'>
                <span className='ml-pbi__text ml-pbi-black w-100'>
                  Creative Design
                </span>
              </div>
            </div>
            <div className='row usd-row'>
              <div className='col-4 p-0'>
                <span className='ml-pbi__text ml-pbi-grey'>Job Title</span>
              </div>
              <div className='col-8 pr-0'>
                <span className='ml-pbi__text ml-pbi-black w-100'>
                  UI/UX Designer
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
                  Codewave Technologies
                </span>
              </div>
            </div>
            <div className='row usd-row'>
              <div className='col-4 p-0'>
                <span className='ml-pbi__text ml-pbi-grey'>Country</span>
              </div>
              <div className='col-8 pr-0'>
                <span className='ml-pbi__text ml-pbi-black w-100'>India</span>
              </div>
            </div>
            <div className='row usd-row'>
              <div className='col-4 p-0'>
                <span className='ml-pbi__text ml-pbi-grey'>State</span>
              </div>
              <div className='col-8 pr-0'>
                <span className='ml-pbi__text ml-pbi-black w-100'>
                  Karnataka, KA
                </span>
              </div>
            </div>
            <div className='row usd-row'>
              <div className='col-4 p-0'>
                <span className='ml-pbi__text ml-pbi-grey'>Location</span>
              </div>
              <div className='col-8 pr-0'>
                <span className='ml-pbi__text ml-pbi-black w-100'>
                  Bangalore, KA, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditUserDetailsModal
        show={showEditUserDetailsForm}
        onHide={closeModal}
      />
    </>
  );
};

export default BasicInfo;
