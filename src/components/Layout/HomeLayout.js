import React from 'react';
import Challenges from '../Challenges/Challenges';
import Badge from '../Home/badge/Badge';
import Quote from '../Home/badge/Quote';
import Quest from '../Home/Quest/Quest';
import User from '../Home/User/User';
import Card from '../UI/Card';

const HomeLayout = (props) => {
  return (
    <div className='max_home-container'>
      <div className='row'>
        <div className='col-lg-8 col-12'>
          <User />
          <Challenges onClickOpen={props.showCartHandler} />
          <Quest />
        </div>
        <div className='col-lg-4 col-12'>
          <div className='max__right-home-container'>
            <Card className='max__right-card'>
              <Badge />
              <Quote />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
