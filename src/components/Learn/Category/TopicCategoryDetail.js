import React from 'react';
import CatergoryCard from './CatergoryCard';
import { TopicName } from './data';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../Common/BreadCrumb/BreadCrumb';
import { TopicCardData } from './data';
import TopicCard from './TopicCard';
import InfiniteScrollling from '../../Pagination/InfiniteScrollling';
import { CenterLoadingBar,LoadingBar } from '../../loader/loader';

const TopicCategoryDetail = ({
  learndeckStats,
  learnDeckLists,
  count,
  setlearnDeckPage,
  learnDeckPage,
  deckLoading,
  setFlashCardId
}) => {
  console.log('learnDeckLists',learnDeckLists)
  let attt=[
    {
      _id: "639831eb6ae52f253c57d697",
      title: "Gowtham Deck",
      flashcardCount: 1
  },
  {
    _id: "639831eb6ae52f253c57d697",
    title: "Gowtham Deck",
    flashcardCount: 1
},
{
  _id: "639831eb6ae52f253c57d697",
  title: "Gowtham Deck",
  flashcardCount: 1
},
{
  _id: "639831eb6ae52f253c57d697",
  title: "Gowtham Deck",
  flashcardCount: 1
}

  ]
  return (
    <>
      <div className='container category_detail_wrapper'>
        <BreadCrumb title='Topic detail page' id={5} />
        <div className='row detail_row'>
          {/* {TopicName.slice(0, 1).map((element, i) => { */}
            {/* return ( */}
              <div
                className='col-xl-3 col-lg-4 col-12  detail_left_col'
                // key={i}
              >
                <CatergoryCard
                  data={{
                    progress:learndeckStats?.progressPercent,
                    title:learndeckStats?.title,
                    description:learndeckStats?.description,
                    count:learndeckStats?.decksCount,
                    level: learndeckStats?.learningLevel
                  }}
                  detail={true}
                  level={true}
                  button={true}
                />
              </div>
            {/* );
          })} */}

          <div className='col-xl-9 col-lg-8 col-12 detail_right_col'>
            <div className='subject_description'>
              Decks under Compliance and m.. (20)
            </div>
            {/* <Link to='/learn/flash-card'>
              <div className='row'>
                {TopicCardData.map((data, i) => {
                  return (
                    <div
                      className='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mb-3'
                      key={i}
                    >
                      <TopicCard data={data} />
                    </div>
                  );
                })}
              </div>
            </Link> */}


            {deckLoading && learnDeckPage === 1 ? (
        <CenterLoadingBar />
      ) : (
          <InfiniteScrollling
            dataLength={learnDeckLists?.length}
            next={()=>setlearnDeckPage(learnDeckPage+1)}
            hasMore={learnDeckLists?.length < count}
            loader={<LoadingBar />}
          >
                 {/* <CategorySubjects subjects={learnCategorySubjects} */}

                 <div className='row'>
                {attt?.length?attt.map((data, i) => {
                  return (
                    <div
                      className='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mb-3'
                      key={i}
                    >
                       <Link to={`/learn/flash-card?deck=${'639831eb6ae52f253c57d697'}`}>
                      <TopicCard data={data} />
                      </Link>
                    </div>
                  );
                }):''}
              </div>  
              
                             </InfiniteScrollling>
)}

          </div>
        </div>
      </div>
    </>
  );
};

export default TopicCategoryDetail;
