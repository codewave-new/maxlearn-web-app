import React from 'react';
import CatergoryCard from './CatergoryCard';
import { data } from './data';
import { Link } from 'react-router-dom';
import LearningCard from '../LearningCard';
import { SubjectData } from './data';
import BreadCrumb from '../../Common/BreadCrumb/BreadCrumb';
import InfiniteScrollling from '../../Pagination/InfiniteScrollling';
import { CenterLoadingBar,LoadingBar } from '../../loader/loader';

const SubjectDetailCategory = ({
  learnSubStats,
  learnSubTopicc,
  count,
  setlearnTopicPage,
  learnTopicPage,
  topicLoading
}) => {
  return (
    <>
      <div className='container category_detail_wrapper'>
        <BreadCrumb title='Subject detail page' id={4} />
        <div className='row detail_row'>
          {/* {data.slice(0, 1).map((element, i) => { */}
            {/* return ( */}
              <div
                className='col-xl-3 col-lg-4 col-12  detail_left_col'
              >
                <CatergoryCard data={{
                progress:learnSubStats?.overallProgressPercent,
                title:learnSubStats?.subjectInfo?.title,
                description:learnSubStats?.subjectInfo?.description,
                count:learnSubStats?.topicsCount,
                icon:learnSubStats?.subjectInfo?.subjectIcon,
                colorr:learnSubStats?.subjectInfo?.subjectColor
                }}
                 detail={true}
                 topics={true}
                />
              </div>
            {/* );})} */}

          <div className='col-xl-9 col-lg-8 col-12 detail_right_col'>
            <div className='subject_description'>
              Topics under Information security.. ({count})
            </div>
            {/* <Link to='/learn/topic-detail'> */}

            {topicLoading && learnTopicPage === 1 ? (
        <CenterLoadingBar />
      ) : (
          <InfiniteScrollling
            dataLength={learnSubTopicc?.length}
            next={()=>setlearnTopicPage(learnTopicPage+1)}
            hasMore={learnSubTopicc?.length < count}
            loader={<LoadingBar />}
          >
                 {/* <CategorySubjects subjects={learnCategorySubjects} */}

<div className='row'>
{learnSubTopicc.map((data, i) => {
  return (
    <div
      className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-3'
      key={i}
    >
      <LearningCard data={data} className='content-color' />
    </div>
  );
})}
</div>
                 </InfiniteScrollling>
)}
            
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectDetailCategory;
