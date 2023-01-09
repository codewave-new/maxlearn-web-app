import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import QuestCertListing from './questcerttab/QuestCertListing';
import ChallengesListing from '../../pages/Challenges/ChallengesListing';
import useActiveTab from '../CustomHooks/ActiveTab';

const ActivityTab = () => {
  const [activeTab, setActivetab] = useActiveTab('challenges');

  return (
    <Tabs
      defaultActiveKey={activeTab}
      id='uncontrolled-tab-example'
      className='max__todo-activity-tab'
      onSelect={setActivetab}
    >
      <Tab eventKey='challenges' title='Challenges'>
        {activeTab === 'challenges' && <ChallengesListing />}
      </Tab>
      <Tab eventKey='quest' title='Quests & Certs'>
        {activeTab === 'quest' && <QuestCertListing />}
      </Tab>
    </Tabs>
  );
};

export default ActivityTab;
