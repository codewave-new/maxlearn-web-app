import React from 'react';
import { NavToDoLogo } from '../../assets';
import Badge from '@mui/material/Badge';

const badgeStyle = {
  '& .MuiBadge-badge': {
    height: '12px',
    width: '12px',
    border: ' 1px solid #F0F0F0',
    backgroundColor: '#DE5021',
    borderRadius: '50%',
    right: '-6px',
    top: '-6px',
  },
};

// classname for all the color for the notification
const colorClassName = {
  purple: 'purple',
  yellow: 'yellow',
  green: 'green',
  pink: 'pink',
};

const CardData = ({ data }) => {
  return (
    <div className='row'>
      <div className='col-2 icon_wrapper'>
        <NavToDoLogo.default />
      </div>
      <div className='col-7'>
        <div className='card_title'>{data.name}</div>
      </div>
      <div className='col-3 notification_time'>
        <div>{data.time} ago</div>
      </div>
    </div>
  );
};

const CardModalNotification = ({ data, index }) => {
  return (
    <div className={`notification_card_wrapper ${data.bgColor}`}>
      {index <= 1 ? (
        <Badge sx={badgeStyle} variant='dot'>
          <CardData data={data} />
        </Badge>
      ) : (
        <CardData data={data} />
      )}
    </div>
  );
};

export default CardModalNotification;
