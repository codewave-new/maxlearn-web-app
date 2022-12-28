import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { squadRankings } from '../../services/ranking';
import { CenterLoadingBar } from '../loader/loader';
import RankingPositionCard from './RankingPositionCard';
import RankingTop from './RankingTop';

const SquadRankings = () => {
  const authData = useSelector((state) => state.auth);
  const [myTeamStandings, setMyTeamStandings] = useState([]);
  const [otherTeamStandings, setOtherTeamStandings] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    squadRankingList();
  }, []);

  const squadRankingList = async () => {
    setPageNo((currentPageNo) => currentPageNo + 1);
    setIsLoading(true);
    const response = await squadRankings(authData?.learnerId, pageNo + 1);
    setIsLoading(false);
    if (response.statusCode === 200) {
      setOtherTeamStandings((previousRanks) => [
        ...previousRanks,
        ...response?.data?.otherSquads?.response,
      ]);
      setMyTeamStandings(response?.data?.mySquads);
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
              <RankingTop type='squad' />
            </div>
          </div>
          <div className='col-lg-8 col-12'>
            <div className='scroll-rank-user'>
              <h6 className='ranking__header-text'>
                Your squad(s) achievements
              </h6>
              {myTeamStandings?.map((eachsquadStanding, index) => (
                <RankingPositionCard
                  key={eachsquadStanding?._id}
                  rankNo={eachsquadStanding?.rank}
                  userLogo={eachsquadStanding?.squadInfo?.imageUrl}
                  userName={eachsquadStanding?.squadInfo?.name}
                  points={eachsquadStanding?.pointsEarned}
                  className={index === 0 ? 'topper' : ''}
                />
              ))}
              <h6 className='mt-4 ranking__header-text'>
                Other squad(s) achievements
              </h6>
              {otherTeamStandings.map((eachsquadStanding) => (
                <RankingPositionCard
                  key={eachsquadStanding?._id}
                  rankNo={eachsquadStanding?.rank}
                  userLogo={eachsquadStanding?.squadInfo?.imageUrl}
                  userName={eachsquadStanding?.squadInfo?.name}
                  points={eachsquadStanding?.pointsEarned}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SquadRankings;
