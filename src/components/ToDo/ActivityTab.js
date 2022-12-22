import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import QuestCertListing from './QuestCertListing';
import ChallengesListing from '../../pages/Challenges/ChallengesListing';

const ActivityTab = (props) => {
  return (
    <Tabs
      defaultActiveKey='quest'
      id='uncontrolled-tab-example'
      className='mb-3 max__todo-activity-tab'
    >
      <Tab eventKey='challenges' title='Challenges'>
        <ChallengesListing />
      </Tab>
      <Tab eventKey='quest' title='Quests & Certs'>
        <QuestCertListing />
      </Tab>
    </Tabs>
  );
};

export default ActivityTab;
