import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Common/Header/Header';
import { appInit } from '../state';
import HomeLayout from '../components/Layout/HomeLayout';
import SideBar from '../components/UI/SideBar/SideBar';
import QuestSideBar from '../components/UI/SideBar/QuestSideBar';
import Footer from '../components/Common/Footer/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  // const navigator = useContext(UNSAFE_NavigationContext).navigator;
  useEffect(() => {
    dispatch(appInit(true));
  }, []);

  // useEffect(() => {
  //   // console.log(navigator);

  //   window.onpopstate = () => {
  //     navigate('/');
  //   };
  // }, []);

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
      <Footer />
    </div>
  );
};

export default Home;
