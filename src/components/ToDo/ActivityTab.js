import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import QuestCertListing from './questcerttab/QuestCertListing';
import ChallengesListing from '../../pages/Challenges/ChallengesListing';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '../../utility/helper';

const ActivityTab = (props) => {
  const navigate = useNavigate();
  const loaction = useLocation();
  const query = useQuery(loaction.search);
  const [activetab, setActivetab] = useState();

  useEffect(() => {
    query['tab'] ? setActivetab(query['tab']) : handleNavigation('challenges');
  }, [query['tab']]);

  console.log(activetab, query['tab']);

  const handleNavigation = (eventKey) => {
    setActivetab(eventKey);
    navigate({
      pathname: '/to-do',
      search: createSearchParams({
        tab: `${eventKey}`,
      }).toString(),
    });
  };
  return (
    <Tabs
      defaultActiveKey={query['tab'] === 'quest' ? 'quest' : 'challenges'}
      id='uncontrolled-tab-example'
      className='max__todo-activity-tab'
      onSelect={handleNavigation}
    >
      <Tab eventKey='challenges' title='Challenges'>
        {query['tab'] === 'challenges' && <ChallengesListing />}
      </Tab>
      <Tab eventKey='quest' title='Quests & Certs'>
        {query['tab'] === 'quest' && <QuestCertListing />}
      </Tab>
    </Tabs>
  );
};

export default ActivityTab;
