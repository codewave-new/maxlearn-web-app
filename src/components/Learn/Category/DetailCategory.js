import React from 'react';
import CatergoryCard from './CatergoryCard';
import { data } from './data';
import BreadCrumb from '../../Common/BreadCrumb/BreadCrumb';
import CategorySubjects from './CategorySubjects';
import { Link } from 'react-router-dom';
import InfiniteScrollling from '../../Pagination/InfiniteScrollling';
import { CenterLoadingBar,LoadingBar } from '../../loader/loader';

export const DetailCategory = ({
  learnCategoryStats,
  learnCategorySubjects,
  count,
  setLearnCategoryPage,
  learnCategoryPage,
  categoryLoading
}) => {
  return (
    <>         
          <div className='container category_detail_wrapper' >
            <BreadCrumb title='Category detail page' id={3} />
            <div className='row detail_row'>
              <div className='col-xl-3 col-lg-4 col-12 detail_left_col'>
                <CatergoryCard 
                data={{
                  progress:learnCategoryStats?.overallProgressPercent,
                  title:learnCategoryStats?.categoryInfo?.title,
                  description:learnCategoryStats?.categoryInfo?.description,
                  count:learnCategoryStats?.subjectsCount,
                  icon:learnCategoryStats?.categoryInfo?.categoryIcon,
                  colorr:learnCategoryStats?.categoryInfo?.categoryColor
                  }}
                detail={true}
                />
              </div>
              <div className='ccol-xl-9 col-lg-8  col-12  detail_right_col'>
                <div className='subject_description'>
                  Subject under {learnCategoryStats?.categoryInfo?.title} ({count})
                </div>
                {categoryLoading && learnCategoryPage === 1 ? (
        <CenterLoadingBar />
      ) : (
          <InfiniteScrollling
            dataLength={learnCategorySubjects?.length}
            next={()=>setLearnCategoryPage(learnCategoryPage+1)}
            hasMore={learnCategorySubjects?.length < count}
            loader={<LoadingBar />}
          >
                 <CategorySubjects subjects={learnCategorySubjects}
/>
                 </InfiniteScrollling>
)}
                {/* <Link to='/learn/subject-detail'> */}
                {/* </Link> */}
              </div>
            </div>
          </div>
        
      {/* })} */}
    </>
  );
};
