import React from 'react';

const MembersAvatar = ({ team, total, max }) => {
  return (
    <div>
      {team.map((member, i) => (
        <>
          {i < max ? (
            <img
              src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299456/Group_45_bpykjx.svg'
              className='partcipation__detail-img'
            />
          ) : (
            ''
          )}
          {i === max ? (
            <span className='partcipation__detail-total'>+{total - max}</span>
          ) : (
            ''
          )}
        </>
      ))}
    </div>
  );
};

export default MembersAvatar;
