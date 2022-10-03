import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Challenges from '../components/Challenges/Challenges';
import Footer from '../components/Common/Foooter.js/Footer';
import Header from '../components/Common/Header/Header';
import Licence from '../components/Home/Licence';
import Quest from '../components/Home/Quest/Quest';
import User from '../components/Home/User/User';
import Card from '../components/UI/Card';
import { appInit } from '../state';
import { BadgeBg, BadgeHome, HomeAlertLogo } from '../assets';
import HomeLayout from '../components/Layout/HomeLayout';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appInit(true));
  }, []);

  return (
    <div className='max_homepage_wrapper'>
      <Header />
      <HomeLayout />
      {/* <div className='max_home-container'>
        <div className='max_home-row row'>
          <div className='max_home-left-container col-lg-8'>
            <User />
            <Challenges />
            <Quest />
          </div>
          <div className='max_home-right-container col-lg-4'>
            <Card className='max__left-card'>
              <div className='max__home-badge-container'>
                <BadgeBg.default />
                <div className='max-home__badge-content'>
                  <div>
                    <p>Congrats Bartholomew!</p>
                    <h6>You have earned Einstein badge!</h6>
                    <p>Sed ut perspiciatis unde omnis istenatus</p>
                  </div>
                  <div>
                    <BadgeHome.default />
                  </div>
                </div>
              </div>
              <div className='max__home-quote-container'>
                <HomeAlertLogo.default/>
                <p>
                  “Lorem ipsum dolor sit amet, consect etur adipiscing elitsesed
                  do eiusmod tempor incididun lalbore et dolorema gna aliqua. Ut
                  enim ad minim veniam Lsed do eiusmotelsed am.”
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Home;
