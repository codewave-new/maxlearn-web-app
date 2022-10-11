import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { BadgeBgImg } from '../../assets';

const GroupAvatars = () => {
  return (
    <AvatarGroup max={4}>
      <Avatar
        sx={{ width: 30, height: 30 }}
        alt='Remy Sharp'
        src={BadgeBgImg.default}
      />
      <Avatar
        sx={{ width: 30, height: 30 }}
        alt='Travis Howard'
        src={BadgeBgImg.default}
      />
      <Avatar
        sx={{ width: 30, height: 30 }}
        alt='Cindy Baker'
        src={BadgeBgImg.default}
      />
    </AvatarGroup>
  );
};

export default GroupAvatars;
