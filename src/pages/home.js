import React, { useState, useEffect } from 'react';
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
import SideBar from '../components/UI/SideBar/SideBar';
import Modal from '../components/UI/Modal';
import QuestSideBar from '../components/UI/SideBar/QuestSideBar';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appInit(true));
  }, []);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [questSideBar, setQuestSideBar] = useState(false);

  const showQuestBarHandler = () => {
    setQuestSideBar(true);
  };

  const hideQuestBarHandler = () => {
    setQuestSideBar(false);
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const ChallengesData = [
    {
      id: '1',
      challenger: 'Roasters',
      opponent: 'Monsters ',
      time: new Date(),
      expire: '5',
      challengerImg:
        'https://res.cloudinary.com/dysdy7hjr/image/upload/q_auto:eco/v1665039794/Cute_Bat_o6fzlt.svg',
      opponentImg:
        'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665039794/Cute_monsters_ghvepf.svg',
      discription: 'Lorem ipm sdiolouir sit amet cons ectuirl se!',
    },
    {
      id: '2',
      challenger: 'Monster',
      opponent: 'Bat ',
      time: new Date(),
      expire: '5',
      challengerImg:
        'https://res.cloudinary.com/dysdy7hjr/image/upload/q_auto:eco/v1665039794/Cute_Bat_o6fzlt.svg',
      opponentImg:
        'https://res.cloudinary.com/dysdy7hjr/image/upload/q_auto:eco/v1665039794/Cute_Bat_o6fzlt.svg',
      discription: 'Lorem ipm sdiolouir sit amet cons ectuirl se!',
    },
    {
      id: '3',
      challenger: 'Roasters',
      opponent: 'Monsters ',
      time: new Date(),
      expire: '5',
      challengerImg:
        'https://res.cloudinary.com/dysdy7hjr/image/upload/q_auto:eco/v1665039794/Cute_Bat_o6fzlt.svg',
      opponentImg:
        'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665039794/Cute_monsters_ghvepf.svg',
      discription: 'Lorem ipm sdiolouir sit amet cons ectuirl se!',
    },
    {
      id: '4',
      challenger: 'Roasters',
      opponent: 'Monsters ',
      time: new Date(),
      expire: '5',
      challengerImg:
        'https://res.cloudinary.com/dysdy7hjr/image/upload/q_auto:eco/v1665039794/Cute_Bat_o6fzlt.svg',
      opponentImg:
        'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665039794/Cute_monsters_ghvepf.svg',
      discription: 'Lorem ipm sdiolouir sit amet cons ectuirl se!',
    },
    {
      id: '5',
      challenger: 'Roasters',
      opponent: 'Monsters ',
      time: new Date(),
      expire: '5',
      challengerImg:
        'https://res.cloudinary.com/dysdy7hjr/image/upload/q_auto:eco/v1665039794/Cute_Bat_o6fzlt.svg',
      opponentImg:
        'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665039794/Cute_monsters_ghvepf.svg',
      discription: 'Lorem ipm sdiolouir sit amet cons ectuirl se!',
    },
    {
      id: '6',
      challenger: 'Roasters',
      opponent: 'Monsters ',
      time: new Date(),
      expire: '5',
      challengerImg:
        'https://res.cloudinary.com/dysdy7hjr/image/upload/q_auto:eco/v1665039794/Cute_Bat_o6fzlt.svg',
      opponentImg:
        'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665039794/Cute_monsters_ghvepf.svg',
      discription: 'Lorem ipm sdiolouir sit amet cons ectuirl se!',
    },
  ];

  return (
    <div className='max_homepage_wrapper'>
      <Header />
      <HomeLayout
        ChallengesData={ChallengesData}
        showCartHandler={showCartHandler}
      />
      {questSideBar && (
        <QuestSideBar data={ChallengesData} onClose={hideQuestBarHandler} />
      )}
      {cartIsShown && (
        <SideBar data={ChallengesData} onClose={hideCartHandler} />
      )}

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
