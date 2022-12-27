import { value } from 'dom7';
import React from 'react';
import SidebarModal from '../Common/CustomModal/SidebarModal';
import CardModalNotification from './CardModalNotification';
import Badge from '@mui/material/Badge';

const data = [
  {
    name: 'A new challenge has been assigned to your squad.',
    time: '1 min',
    bgColor: 'purple',
  },
  {
    name: 'A new challenge has been assigned to your squad.',
    time: '6 min',
    bgColor: 'yellow',
  },
  {
    name: 'A new challenge has been assigned to your squad.',
    time: '7 min',
    bgColor: 'green',
  },
  {
    name: 'A new challenge has been assigned to your squad.',
    time: '12 min',
    bgColor: 'pink',
  },
];

const NotificationModal = ({ show, onHide }) => {
  return (
    <SidebarModal show={show} onHide={onHide} title='Notifications'>
      <div className='row'>
        {data.map((value, index) => {
          return (
            <div className='col-12' key={index}>
              <CardModalNotification data={value} index={index} />
            </div>
          );
        })}
      </div>
    </SidebarModal>
  );
};

export default NotificationModal;
