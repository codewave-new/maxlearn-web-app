import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Challenges from '../components/Challenges/Challenges';
import Footer from '../components/Common/Foooter.js/Footer';
import Header from '../components/Common/Header/Header';
import Licence from '../components/Home/Licence';
import Quest from '../components/Home/Quest/Quest';
import User from '../components/Home/User/User';
import { appInit } from '../state';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appInit(true));
  }, []);

  return (
    <div className='max_homepage_wrapper'>
      <Header />
      <div className="max_home-container">
        <div className="max_home-row">
          <div className="max_home-left-container col-lg-8">
            <User />
            <Challenges />
            <Quest />
          </div>
          <div className="max_home-right-container col-lg-4">
         
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Home;
