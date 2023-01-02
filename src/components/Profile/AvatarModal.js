import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { AvatarTick } from '../../assets';
import { editProfileDetails, getProfileAvatars, uploadFromGallery } from '../../services/profile';
import { userImageChange } from '../../state/slices/loginSlice.';
import { convertToBase64 } from '../../utility/helper';
import Modal from '../Common/CustomModal/Modal';
import { ButtonLoader, OutlineButtonLoader } from '../loader/loader';

const AvatarModal = ({avatarsList,closeModal,showAvatar,avatarLoader}) => {
  const dispatch = useDispatch();
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [loader, setLoader] = useState(false);
  const [filledLoader, setFilledLoader] = useState(false);

  const profileImageChange = (image) => {
    return {
      learner_obj: {
        profilePic: image,
      },
    };
  };

  const handleFileUpload = async (e) => {
    if (e.target.files[0] !== undefined) {
      setLoader(true);
      const file = e.target.files[0];
      const fsize = e.target.files[0].size;
      const filesizeval = Math.round(fsize / 1024);
      if (filesizeval >= 3000) {
        toast.error('file cant be more than 3mb');
        setLoader(false);
      } else {
        const base64 = await convertToBase64(file);
        let imagevalues = {
          fileName: file.name,
          moduleType: 'profile',
          base64File: base64,
        };
        const imageupload = await uploadFromGallery(imagevalues);
        if (imageupload?.statusCode === 200) {
          const response = await editProfileDetails(
            profileImageChange(imageupload.data.documentUrl)
          );
          if (response?.statusCode === 200) {
            localStorage.removeItem('profileImage');
            localStorage.setItem('profileImage', imageupload.data.documentUrl);
            dispatch(userImageChange(imageupload.data.documentUrl));
            toast.success('profile image updated sucessfully');
          } else {
            toast.error('something went wrong');
          }
          setLoader(false);
        } else {
          toast.error('could not connect to server try after some time');
        }
        closeModal();
      }
    }
  };

  const handleProfilePicSelection = (id) => {
    selectedAvatar === id ? setSelectedAvatar('') : setSelectedAvatar(id);
  };

  const changeProfilePic = async () => {
    const [selectAvatar, ...rest] = avatarsList.filter(
      (avatar) => avatar._id === selectedAvatar
    );
    if (selectedAvatar) {
      setFilledLoader(true);
      const response = await editProfileDetails(
        profileImageChange(selectAvatar?.image)
      );
      setFilledLoader(false);
      if (response?.statusCode === 200) {
        localStorage.removeItem('profileImage');
        localStorage.setItem('profileImage', selectAvatar?.image);
        dispatch(userImageChange(selectAvatar?.image));
        toast.success('profile image updated successfully');
      } else {
        toast.error('something went wrong');
      }
    }
    setSelectedAvatar('');
    closeModal();
  };
  return (
    <div>
      <Modal
        button={false}
        open={showAvatar}
        className='avatar__selection-modal'
      >
        <div className='avatar__selection-wrapper'>
          <h5 className='avatar__selection-header'>
            Please select the avatar for your profile
          </h5>
          <div className='avatar__pics-section'>
            {avatarsList?.map((avatar) => {
              return (
                <button
                  id={avatar?._id}
                  key={avatar?._id}
                  className={`${
                    avatarLoader ? 'image_loader' : 'images__avatar'
                  }`}
                  onClick={() => handleProfilePicSelection(avatar?._id)}
                >
                  {!avatarLoader && (
                    <img
                      className='avatars_image'
                      src={avatar?.image}
                      alt='avatars'
                    />
                  )}
                  {selectedAvatar === avatar?._id && (
                    <div className='selection_tick'>
                      <AvatarTick.default />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          <div className='row button__container'>
            <div className='col-6'>
              <button className='outlined__button' disabled={loader}>
                <input
                  id='file-input'
                  type='file'
                  onChange={handleFileUpload}
                  className='file_input'
                  accept='image/x-png,image/jpeg'
                />
                {loader ? <OutlineButtonLoader /> : 'Upload from Camera'}
              </button>
            </div>
            <div className='col-6 '>
              <button
                className='filled__button'
                onClick={changeProfilePic}
                disabled={filledLoader}
              >
                {filledLoader ? <ButtonLoader /> : 'Submit feedback'}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AvatarModal;
