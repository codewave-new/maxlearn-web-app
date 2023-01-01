import React from 'react';
import { Points, TopperCrown } from '../../assets';

const RankingTop = ({ type, topperList }) => {
  return (
    <div className='ranking__top-wrapper'>
      <div className='topper-container'>
        <div className='second-container'>
          <div
            className={
              type === 'squad' ? 'squad__container-bg' : 'container-color-bg'
            }
            title={topperList?.[1]?.name}
          >
            <div
              className={
                type === 'squad'
                  ? 'squad-container-second'
                  : 'icon-container-second'
              }
            >
              <img
                className={
                  type === 'squad'
                    ? 'squad__ranking-secondimage'
                    : 'individual__ranking-secondimage'
                }
                src={topperList?.[1]?.image}
                alt=''
              />
            </div>
          </div>
          <div className='topper-details'>
            <h6 className='topper__name' title={topperList?.[1]?.name}>
              {topperList?.[1]?.name}
            </h6>
            <p
              className='topper__points'
              title={`${topperList?.[1]?.points} points`}
            >
              <img className='points-gem' src={Points.default} alt='' />
              {topperList?.[1]?.points} Points
            </p>
          </div>
        </div>
        <div className='first-container'>
          <div
            className={
              type === 'squad' ? 'squad__container-bg' : 'container-color-bg'
            }
            title={topperList?.[0]?.name}
          >
            <div
              className={
                type === 'squad'
                  ? 'squad-container-first flex-column'
                  : 'icon-container-first flex-column'
              }
            >
              <img
                className='first__crown'
                src={TopperCrown.default}
                alt='crown'
              />
              <img
                className={
                  type === 'squad'
                    ? 'squad__ranking-firstimage'
                    : 'individual__ranking-firstimage'
                }
                src={topperList?.[0]?.image}
                alt=''
              />
            </div>
          </div>
          <div className='topper-details'>
            <h6 className='topper__name' title={topperList?.[0]?.name}>
              {topperList?.[0]?.name}
            </h6>
            <p
              className='topper__points'
              title={`${topperList?.[0]?.points} points`}
            >
              <img className='points-gem' src={Points.default} alt='' />
              {topperList?.[0]?.points} Points
            </p>
          </div>
        </div>
        <div className='third-container'>
          <div
            className={
              type === 'squad' ? 'squad__container-bg' : 'container-color-bg'
            }
            title={topperList?.[2]?.name}
          >
            <div
              className={
                type === 'squad'
                  ? 'squad-container-third '
                  : 'icon-container-third '
              }
            >
              <img
                className={
                  type === 'squad'
                    ? 'squad__ranking-thirdimage'
                    : 'individual__ranking-thirdimage'
                }
                src={topperList?.[2]?.image}
                alt=''
              />
            </div>
          </div>
          <div className='topper-details'>
            <h6 className='topper__name' title={topperList?.[2]?.name}>
              {topperList?.[2]?.name}
            </h6>
            <p
              className='topper__points'
              title={`${topperList?.[2]?.points} points`}
            >
              <img className='points-gem' src={Points.default} alt='' />
              {topperList?.[2]?.points} Points
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingTop;
