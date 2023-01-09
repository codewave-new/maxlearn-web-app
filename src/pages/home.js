import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Common/Header/Header';
import { appInit } from '../state';
import HomeLayout from '../components/Layout/HomeLayout';
import SideBar from '../components/UI/SideBar/SideBar';
import QuestSideBar from '../components/UI/SideBar/QuestSideBar';
import Footer from '../components/Common/Footer/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CurrentandUpcommingChallenge,
  TodayandUpcomingCertQuest,
} from '../services/home';
import { useQuery } from '../utility/helper';
import moment from 'moment';
const userId = localStorage.getItem('userid');

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  let query = useQuery(location.search);
  const [challengeInfo, setChallengesInfo] = useState([]);
  const [questCertInfo, setQuestCertInfo] = useState([]);
  const [yourTeam, setYourTeam] = useState({});
  const [opponentTeam, setOpponentTeam] = useState([]);
  const [challengerName, setChallengername] = useState();
  const [loader, setLoader] = useState(false);

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

  console.log(yourTeam, 'test');
  console.log(opponentTeam, 'opp');

  const onload = async () => {
    setLoader(true);
    query.pageNum = 1;
    console.log(query);
    const apiResp = await CurrentandUpcommingChallenge(userId, query);
    if (apiResp.statusCode === 200) {
      console.log();
      setChallengesInfo(apiResp.data[0].response);
      setLoader(false);
      // if (
      //   apiResp.data[0].response.map((all, i) => {
      //     all.challengeType === 'SQUAD';
      //   })
      // ) {
      //   apiResp?.data[0]?.response.map((all) => {
      //     teamSegregation(all.squadList, all.mySquad);
      //   });
      // } else {

      // }
    }
  };

  const onCertload = async () => {
    const apiResp = await TodayandUpcomingCertQuest(userId);
    if (apiResp.statusCode === 200) {
      setQuestCertInfo(apiResp.data.list);
    }
  };

  useEffect(() => {
    onload();
    onCertload();
  }, []);

  console.log(challengeInfo, 'tt');
  // const ChallengesData = [
  //   {
  //     id: '1',
  //     challenger: 'Roasters',
  //     opponent: 'Monsters ',
  //     time: new Date(),
  //     expire: '5',
  //     challengerImg:
  //       'https://res.cloudinary.com/dysdy7hjr/image/upload/q_auto:eco/v1665039794/Cute_Bat_o6fzlt.svg',
  //     opponentImg:
  //       'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665039794/Cute_monsters_ghvepf.svg',
  //     discription: 'Lorem ipm sdiolouir sit amet cons ectuirl se!',
  //   },
  //   {
  //     id: '2',
  //     challenger: 'Monster',
  //     opponent: 'Bat ',
  //     time: new Date(),
  //     expire: '5',
  //     challengerImg:
  //       'https://res.cloudinary.com/dysdy7hjr/image/upload/q_auto:eco/v1665039794/Cute_Bat_o6fzlt.svg',
  //     opponentImg:
  //       'https://res.cloudinary.com/dysdy7hjr/image/upload/q_auto:eco/v1665039794/Cute_Bat_o6fzlt.svg',
  //     discription: 'Lorem ipm sdiolouir sit amet cons ectuirl se!',
  //   },
  //   {
  //     id: '3',
  //     challenger: 'Roasters',
  //     opponent: 'Monsters ',
  //     time: new Date(),
  //     expire: '5',
  //     challengerImg:
  //       'https://res.cloudinary.com/dysdy7hjr/image/upload/q_auto:eco/v1665039794/Cute_Bat_o6fzlt.svg',
  //     opponentImg:
  //       'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665039794/Cute_monsters_ghvepf.svg',
  //     discription: 'Lorem ipm sdiolouir sit amet cons ectuirl se!',
  //   },
  //   {
  //     id: '4',
  //     challenger: 'Roasters',
  //     opponent: 'Monsters ',
  //     time: new Date(),
  //     expire: '5',
  //     challengerImg:
  //       'https://res.cloudinary.com/dysdy7hjr/image/upload/q_auto:eco/v1665039794/Cute_Bat_o6fzlt.svg',
  //     opponentImg:
  //       'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665039794/Cute_monsters_ghvepf.svg',
  //     discription: 'Lorem ipm sdiolouir sit amet cons ectuirl se!',
  //   },
  //   {
  //     id: '5',
  //     challenger: 'Roasters',
  //     opponent: 'Monsters ',
  //     time: new Date(),
  //     expire: '5',
  //     challengerImg:
  //       'https://res.cloudinary.com/dysdy7hjr/image/upload/q_auto:eco/v1665039794/Cute_Bat_o6fzlt.svg',
  //     opponentImg:
  //       'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665039794/Cute_monsters_ghvepf.svg',
  //     discription: 'Lorem ipm sdiolouir sit amet cons ectuirl se!',
  //   },
  //   {
  //     id: '6',
  //     challenger: 'Roasters',
  //     opponent: 'Monsters ',
  //     time: new Date(),
  //     expire: '5',
  //     challengerImg:
  //       'https://res.cloudinary.com/dysdy7hjr/image/upload/q_auto:eco/v1665039794/Cute_Bat_o6fzlt.svg',
  //     opponentImg:
  //       'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665039794/Cute_monsters_ghvepf.svg',
  //     discription: 'Lorem ipm sdiolouir sit amet cons ectuirl se!',
  //   },
  // ];
  const teamSegregation = (teamArray, teamId) => {
    // console.log(teamArray, 'chandan');
    const ownTeamIndex = teamArray?.findIndex((team) => team?._id === teamId);
    setYourTeam(teamArray?.[ownTeamIndex]);
    const opponentTeamData = teamArray?.filter((team) => team?._id !== teamId);
    setOpponentTeam(opponentTeamData);
  };

  const ChallengesData = challengeInfo.map((individualChallenge, index) => {
    // const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // const completionDate = moment(data?.endDate).diff(moment(), 'minutes');
    // const endTime = moment('24:00:00', 'HH:mm:ss');
    // const duration = moment.duration(endTime.diff(moment()));

    // const endDateTz = moment.tz(data?.endDate, timeZone);
    // const startDateTz = moment.tz(data?.startDate, timeZone);

    // const challengeEndDate = moment
    //   .tz(new Date(), timeZone)
    //   .diff(startDateTz, 'days');

    // console.log(
    //   moment.utc(data?.endDate, 'YYYY-MM-DD HH:mm:ss').tz(timeZone).format('l')
    // );
    // const challengeStartDate = endDateTz.diff(startDateTz, 'days') + 1;

    const expireInDays = (individualChallenge) => {
      //  const startdate = moment.tz(individualChallenge.)
    };

    const GetName = (individualChallenge) => {
      var name;
      if (individualChallenge.challengeType === 'SQUAD') {
        const index = individualChallenge.squadList.findIndex(
          (a) => a._id === individualChallenge.mySquad
        );
        name = individualChallenge.squadList[index].name;
      } else {
        const index = individualChallenge.learnerList.findIndex(
          (a) => a._id === userId
        );
        name = individualChallenge.learnerList[index].fullName;
      }
      return name && name;
    };

    const GetOpponentName = (individualChallenge) => {
      var name;
      if (individualChallenge.challengeType === 'SQUAD') {
        const index = individualChallenge.squadList.findIndex(
          (a) => a._id !== individualChallenge.mySquad
        );
        name = individualChallenge.squadList[index].name;
      } else {
        const index = individualChallenge.learnerList.findIndex(
          (a) => a._id !== userId
        );
        name = individualChallenge.learnerList[index].fullName;
      }
      return name && name;
    };

    const getChallengerImage = (individualChallenge) => {
      var image;
      if (individualChallenge.challengeType === 'SQUAD') {
        const index = individualChallenge.squadList.findIndex(
          (a) => a._id === individualChallenge.mySquad
        );
        image = individualChallenge.squadList[index].imageUrl;
      } else {
        const index = individualChallenge.learnerList.findIndex(
          (a) => a._id === userId
        );
        image = individualChallenge.learnerList[index].profilePic;
      }
      return image && image;
    };

    const getOpponentChallengerImage = (individualChallenge) => {
      var image;
      if (individualChallenge.challengeType === 'SQUAD') {
        const index = individualChallenge.squadList.findIndex(
          (a) => a._id !== individualChallenge.mySquad
        );
        image = individualChallenge.squadList[index].imageUrl;
      } else {
        const index = individualChallenge.learnerList.findIndex(
          (a) => a._id !== userId
        );
        image = individualChallenge.learnerList[index].profilePic;
      }
      return image && image;
    };

    return {
      id: index + 1,
      challenger: GetName(individualChallenge),
      opponent: GetOpponentName(individualChallenge),
      time: new Date(),
      expire: 5,
      challengerImg: getChallengerImage(individualChallenge),
      opponentImg: getOpponentChallengerImage(individualChallenge),
      type: individualChallenge.challengeType,
      completionStatus: individualChallenge,
      loader: loader,
    };
  });

  // const QuestData = questCertInfo.map((allCert, index) => {
  //   return allCert;
  // });

  // console.log(QuestData, '11');

  return (
    <div className='max_homepage_wrapper'>
      <Header />
      <HomeLayout
        ChallengesData={ChallengesData}
        certsData={questCertInfo}
        loader={loader}
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
