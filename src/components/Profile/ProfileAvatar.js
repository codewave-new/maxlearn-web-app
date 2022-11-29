import React from 'react'
import { ProfileEditIcon } from '../../assets'

const ProfileAvatar = () => {
  return (
    <div className='avatar-container'>
        <div className="avatar-img-container">
            <img src="" alt="" />
            <div className="edit">
                <ProfileEditIcon.default/>
            </div>
        </div>
        <h4>Chrisbell Antony</h4>

    </div>
  )
}

export default ProfileAvatar