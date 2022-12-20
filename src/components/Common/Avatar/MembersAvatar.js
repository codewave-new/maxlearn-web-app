import React from 'react';

const MembersAvatar = ({ team, total, max, className,imgClass }) => {
  return (
    <div className={`${className} partcipation__detail-img-container`}>
      {team?.map((member, i) => (
        <div key={`members 0${Math.random()*i}`} >
          {i < max ? (
            <img
              src={member?.profilePic}
              className={`partcipation__detail-img ${imgClass}`}
            />
          ) : (
            ''
          )}
          {i === max ? (
            <div className='partcipation__detail-total'>+{total - max}</div>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  );
};

export default MembersAvatar;
