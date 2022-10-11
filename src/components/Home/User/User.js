import React from 'react';
import Card from '../../UI/Card';
import { WaveHand } from '../../../assets';

const User = () => {
  return (
    <div className='max_user-wrapper'>
      <Card className='max_user_card '>
        <div className='max__user-container d-flex'>
          <div>
            <h4 className=''>Hello</h4>
            <div className='d-flex align-item-center -justify-content-center'>
              <h2>Bartholomew</h2>
              <WaveHand.default />
            </div>
          </div>
          <div className='max__user-theme-ove'></div>
        </div>
      </Card>
    </div>
  );
};

export default User;
