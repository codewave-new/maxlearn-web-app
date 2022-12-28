import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ProfileGem, ProfileStanding } from '../../assets';
import { yourSquadListing } from '../../services/profile';
import MembersAvatar from '../Common/Avatar/MembersAvatar';


const YourSquad = () => {
  const navigate=useNavigate()
  const authData=useSelector(state=>state.auth)
  const [squadsLists, setSquadsLists] = useState([]);

  useEffect(() => {
    squadList();
  }, []);

  const squadList = async () => {
    const response = await yourSquadListing(authData?.learnerId);
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
                <div className='col-7 d-flex align-items-center p-0 your_Squad_img-wrapper '>
                  <img
                    className='your__squad-image'
                    src={singleSquad?.imageUrl}
                    alt='no-data'
                  />
                  <p className='mb-0 your__squad-text' style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                    {singleSquad?.name}
                  </p>
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
