import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileGem, ProfileStanding } from '../../assets';
import { yourSquadListing } from '../../services/profile';
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
  const navigate=useNavigate()
  const [squadsLists, setSquadsLists] = useState([]);

  useEffect(() => {
    squadList();
  }, []);

  const squadList = async () => {
    const response = await yourSquadListing();
    console.log(response);
    if (response.statusCode === 200) {
      setSquadsLists(response?.data?.list);
    }
  };

  const handleSquadDetails=(squadId)=>{
    navigate(`/profile/squad-details/${squadId}`)
  }

  return (
    <div>
      <p className='your__squad-header'>You are the part of {squadsLists?.length} squads</p>
      {squadsLists?.map((singleSquad) => {
        return (
          <button
            className='table_btn'
            onClick={() => {
              handleSquadDetails(singleSquad?._id);
            }}
          >
            <div className='table__row-wrapper row' key={singleSquad?._id}>
              <div className='col-6 row '>
                <div className='col-7 p-0 your_Squad_img-wrapper '>
                  <img
                    className='your__squad-image'
                    src={singleSquad?.imageUrl}
                    alt='no-data'
                  />
                  <span className='mb-0 your__squad-text'>
                    {singleSquad?.name}
                  </span>
                </div>
                <div className='col-5 m-auto your__squad-member text-center'>
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
                  <span className='your__squad-text'>
                    {singleSquad?.points}
                  </span>{' '}
                  <span className='your__squad-subtext'>points earned</span>
                </div>
                <div className='col-6 your__squard-standing m-auto '>
                  <ProfileStanding.default />{' '}
                  <span className='your__squad-text'>1st</span>{' '}
                  <span className='your__squad-subtext'>position achieved</span>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default YourSquad;
