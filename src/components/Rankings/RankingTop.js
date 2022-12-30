import React from 'react';
import { Points, TopperCrown } from '../../assets';

const RankingTop = (props) => {
  // const { type = 'squad' } = props;
  const type = 'squad';
  return (
    <div className='ranking__top-wrapper'>
      <div className='topper-container'>
        <div className='second-container'>
          <div
            className={
              type === 'squad' ? 'squad__container-bg' : 'container-color-bg'
            }
            title={'mohan'}
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
                src='https://maxlearn-admin-images.s3.amazonaws.com/admin/images/profile/image_20kb.jpeg.jpeg'
                alt=''
              />
            </div>
          </div>
          <div className='topper-details'>
            <h6 className='topper__name' title={'mohan'}>
              dvgfhvfkkxkzxbck
            </h6>
            <p className='topper__points' title='1600 points'>
              <img className='points-gem' src={Points.default} alt='' /> 1000000
              Points
            </p>
          </div>
        </div>
        <div className='first-container'>
          <div
            className={
              type === 'squad' ? 'squad__container-bg' : 'container-color-bg'
            }
            title={'mohan'}
          >
            <div
              className={
                type === 'squad'
                  ? 'squad-container-first flex-column'
                  : 'icon-container-first flex-column'
              }
            >
              {/* <img src={TopperCrown.default} alt='crown' /> */}
              <img
                className={
                  type === 'squad'
                    ? 'squad__ranking-firstimage'
                    : 'individual__ranking-firstimage'
                }
                src='https://maxlearn-admin-images.s3.amazonaws.com/admin/images/profile/image_20kb.jpeg.jpeg'
                alt=''
              />
            </div>
          </div>
          <div className='topper-details'>
            <h6 className='topper__name' title={'mohan'}>
              vdjfsddgfkskgfkjgdsh
            </h6>
            <p className='topper__points' title='1600 points'>
              <img className='points-gem' src={Points.default} alt='' />
              2312324234 Points
            </p>
          </div>
        </div>
        <div className='third-container'>
          <div
            className={
              type === 'squad' ? 'squad__container-bg' : 'container-color-bg'
            }
            title={'mohan'}
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
                src='https://maxlearn-admin-images.s3.amazonaws.com/admin/images/profile/image_20kb.jpeg.jpeg'
                alt=''
              />
            </div>
          </div>
          <div className='topper-details'>
            <h6 className='topper__name' title={'mohan'}>
              vdjfsddgfkskgfkjgdsh
            </h6>
            <p className='topper__points' title='1600 points'>
              <img className='points-gem' src={Points.default} alt='' />
              23143423 Points
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingTop;
