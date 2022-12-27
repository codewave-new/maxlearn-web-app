import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IndividualsRankings } from '../../services/ranking';
import RankingPositionCard from './RankingPositionCard';
import RankingTop from './RankingTop';
import { CenterLoadingBar } from '../loader/loader';

const IndividualRanking = () => {
  const authData = useSelector((state) => state.auth);
  const [myIndividualRanking, setMyIndividualRanking] = useState({});
  const [othersIndividualRankList, setOthersIndividualRankList] = useState([]);
  const [count, setCount] = useState(0);
  const [pageNo, setPageNo] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    indiviualRankingList();
  }, []);

  const indiviualRankingList = async () => {
    setPageNo((currentPageNo) => currentPageNo + 1);
    setIsLoading(true);
    const response = await IndividualsRankings(authData?.learnerId, pageNo + 1);
    setIsLoading(false);
    if (response.statusCode === 200) {
      setOthersIndividualRankList((previousRanks) => [
        ...previousRanks,
        ...response?.data?.otherIndividuals?.response,
      ]);
      setMyIndividualRanking(response?.data?.myRankInfo);
      setCount(response?.data?.myRankInfo?.countInfo?.[0]?.count);
    }
  };

  return (
    <div className='rank__content-wrapper'>
      {isLoading ? (
        <CenterLoadingBar />
      ) : (
        <div className='row'>
          <div className='col-lg-4 col-12 text-center'>
            <div className='achievements__content'>
              <RankingTop />
              <h4>Your achievements are here!</h4>
              <div className='points-content d-flex justify-content-center'>
                <h1>
                  {myIndividualRanking?.pointsEarned || 0} <small>Points</small>
                </h1>
                <h2>
                  {myIndividualRanking?.rank || 0}
                  <strong>st</strong>
                  <small> Rank</small>
                </h2>
              </div>
            </div>
          </div>
          <div className='col-lg-8 col-12'>
            <div className='scroll-rank-user'>
              <RankingPositionCard
                className='topper'
                rankNo={myIndividualRanking?.rank}
                userLogo={myIndividualRanking?.learnerInfo?.profilePic}
                userName={'You'}
                points={myIndividualRanking?.pointsEarned}
              />
              {othersIndividualRankList?.length &&
                othersIndividualRankList?.map((othersRankings, index) => (
                  <RankingPositionCard
                    key={othersRankings?._id}
                    animation={`ranking-cardslide`}
                    rankNo={othersRankings?.rank}
                    userLogo={othersRankings?.learnerInfo?.profilePic}
                    userName={othersRankings?.learnerInfo?.fullName}
                    points={othersRankings?.pointsEarned}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualRanking;
