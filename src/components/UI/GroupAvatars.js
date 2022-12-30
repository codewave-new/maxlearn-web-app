import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { BadgeBgImg } from '../../assets';

const GroupAvatars = (props) => {
  console.log(props, '2');
  return (
    <AvatarGroup max={4}>
      {/* {props.images.map((all) => {
        return (
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt='Remy Sharp'
            src={all.profilePic}
          />
        );
      })} */}

      <Avatar
        sx={{ width: 30, height: 30 }}
        alt='Travis Howard'
        src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299426/challenges_dtiuny.svg'
      />
      <Avatar
        sx={{ width: 30, height: 30 }}
        alt='Cindy Baker'
        src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg'
      />
    </AvatarGroup>
  );
};

export default GroupAvatars;
