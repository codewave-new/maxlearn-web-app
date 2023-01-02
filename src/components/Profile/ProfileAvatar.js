import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProfileEditIcon } from '../../assets';
import { getProfileAvatars } from '../../services/profile';
import AvatarModal from './AvatarModal';
import { data } from './data';

const ProfileAvatar = () => {
  const auth = useSelector((state) => state.auth);
  const [avatarsList, setAvatarsList] = useState([]);
  const [showAvatar, setShowAvatar] = useState(false);
  const [avatarLoader, setAvatarLoader] = useState(false);
  const [userDetail, setUserDetail] = useState({
    profileImage: '',
    fullName: '',
  });

  useEffect(() => {
    setUserDetail({
      ...userDetail,
      profileImage: auth?.profileImage,
      fullName: auth?.fullName,
    });
  }, [auth?.profileImage, auth?.fullName]);

  const closeModal = () => setShowAvatar(false);

  const handleProfilePicChange = () => {
    avatars();
    setShowAvatar(true);
  };

  const avatars = async () => {
    setAvatarLoader(true);
    setAvatarsList(data);
    const response = await getProfileAvatars();
    setAvatarLoader(false);
    if (response.statusCode === 200) {
      setAvatarsList(response?.data?.avatars);
    } else {
      setAvatarsList([]);
    }
  };

  return (
    <div>
      <div className='avatar-container'>
        <div className='avatar-img-container'>
          {/*loading_skeleton loading animation */}
          <img
            className='profile_photo'
            src={userDetail?.profileImage}
            alt='user profile'
          />
          <div className='edit' onClick={handleProfilePicChange}>
            <ProfileEditIcon.default />
          </div>
        </div>
        <h4 className='user__profile-name'>{userDetail?.fullName}</h4>
      </div>
      <AvatarModal
        avatarsList={avatarsList}
        closeModal={closeModal}
        avatarLoader={avatarLoader}
        showAvatar={showAvatar}
      />
    </div>
  );
};

export default ProfileAvatar;
