import React from 'react';

const Chip = ({ status }) => {
    
  const chipDescription = {
    'NOT-STARTED': { title: `let's start`, color: 'notstarted__color' },
    'IN-PROGRESS': { title: `In progress`, color: 'inprogress__color' },
    COMPLETED: { title: `Completed`, color: 'completed__color' },
    CHALLENGE: { title: `Challenge`, color: 'challenge__color' },
    QUEST: { title: `Quest`, color: 'quest__color' },
    CERTS: { title: `Certs`, color: 'certs__color' },
  };

  return (
    <span className={`chip__wrapper ${chipDescription?.[status]?.color}`}>
      {chipDescription?.[status]?.title}
    </span>
  );
};

export default Chip;
