import React from 'react';
import CatergoryCard from './CatergoryCard';
import { TopicName } from './data';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../Common/BreadCrumb/BreadCrumb';
import { TopicCardData } from './data';
import TopicCard from './TopicCard';

const TopicCategoryDetail = () => {
  return (
    <>
      <div className='container category_detail_wrapper'>
        <BreadCrumb title='Topic detail page' id={5} />
        <div className='row detail_row'>
          {TopicName.slice(0, 1).map((element, i) => {
            return (
              <div
                className='col-xl-3 col-lg-4 col-12  detail_left_col'
                key={i}
              >
                <CatergoryCard
                  data={element}
                  detail={true}
                  level={true}
                  button={true}
                />
              </div>
            );
          })}

          <div className='col-xl-9 col-lg-8 col-12 detail_right_col'>
            <div className='subject_description'>
              Decks under Compliance and m.. (20)
            </div>
            <Link to='/flash-card'>
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
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicCategoryDetail;
