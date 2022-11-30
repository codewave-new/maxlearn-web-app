import React from 'react';
import Overall from '../Profile/Overall';
import ProfileAvatar from '../Profile/ProfileAvatar';
import ProfileTab from '../Profile/ProfileTab';

const ProfileLayout = () => {
  return (
    <div className='max__profile-wrapper container'>
      <div className='row margin-top-main'>
        <div className='col-12 col-lg-3'>
          <ProfileAvatar />
          <Overall />
        </div>
        <div className='col-12 col-lg-9'>
          <ProfileTab className='max__profile-tab' />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
