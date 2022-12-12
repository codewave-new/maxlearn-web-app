import React from 'react';
import { ProfileGem, ProfileStanding } from '../../assets';
import MembersAvatar from '../Common/Avatar/MembersAvatar';

const data = [
  {
    name: 'monster',
    profileImg:
      'https://maxlearn-admin-images.s3.amazonaws.com/admin/images/squads/codewave-new-logo.png.png',
    points: '12000',
    stand: '1st',
    members: [
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
    ],
  },
  {
    name: 'warriers',
    profileImg:
      'https://maxlearn-admin-images.s3.amazonaws.com/admin/images/squads/codewave-new-logo.png.png',
    points: '12000',
    stand: '1st',
    members: [
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
    ],
  },
  {
    name: 'winners',
    profileImg:
      'https://maxlearn-admin-images.s3.amazonaws.com/admin/images/squads/codewave-new-logo.png.png',
    points: '12000',
    stand: '1st',
    members: [
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
    ],
  },
  {
    name: 'hunters',
    profileImg:
      'https://maxlearn-admin-images.s3.amazonaws.com/admin/images/squads/codewave-new-logo.png.png',
    points: '12000',
    stand: '1st',
    members: [
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
    ],
  },
];

const YourSquad = () => {
  return (
    <div>
      <p className='your__squad-header'>You are the part of 6 squads</p>
      {data?.map((singleSquad, index) => {
        return (
          <div className='table__row-wrapper row'>
            <div className='col-6 row '>
              <div className='col-6 p-0 '>
                <img
                  className='your__squad-image'
                  src={singleSquad?.profileImg}
                  alt='no-data'
                />
                <span className='mb-0 your__squad-text'>
                  {singleSquad?.name}
                </span>
              </div>
              <div className='col-6 m-auto your__squad-member text-center'>
                <MembersAvatar
                  team={singleSquad?.members}
                  total={singleSquad?.members?.length}
                  max={4}
                />
              </div>
            </div>
            <div className='col-6 row'>
              <div className='col-6 your__squard-points m-auto '>
                <ProfileGem.default />
                <span className='your__squad-text'>1200</span>{' '}
                <span className='your__squad-subtext'>points earned</span>
              </div>
              <div className='col-6 your__squard-standing m-auto '>
                <ProfileStanding.default />{' '}
                <span className='your__squad-text'>1st</span>{' '}
                <span className='your__squad-subtext'>position achieved</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default YourSquad;
