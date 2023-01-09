import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BasicInformation } from '../../services/profile';
import { userImageChange } from '../../state/slices/loginSlice.';
import {
  saveProfile,
  startLoading,
  stopLoading,
} from '../../state/slices/profileInfo';
import useAuthenticationError from '../CustomHooks/ApiErrors';
import Overall from '../Profile/Overall';
import ProfileAvatar from '../Profile/ProfileAvatar';
import ProfileTab from '../Profile/ProfileTab';

const ProfileLayout = () => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth);
  const authError = useAuthenticationError();

  useEffect(() => {
    learnerInformation(authData.learnerId);
  }, []);

  const learnerInformation = async (learnerId) => {
    dispatch(startLoading());
    const response = await BasicInformation(learnerId);
    dispatch(stopLoading());
    if (response.statusCode === 200) {
      const learnerInfo = response?.data;
      dispatch(userImageChange(learnerInfo.profilePic));
      dispatch(saveProfile(learnerInfo));
    } else if (response.statusCode === 440) {
      authError();
    }
  };
  return (
    <div className='max__profile-wrapper container'>
      <div className='row margin-top-main'>
        <div className='col-12  col-lg-3'>
          <ProfileAvatar />
          <Overall />
        </div>
        <div className='col-12 col-md-9 '>
          <ProfileTab className='max__profile-tab' />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
