import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import QuestCard from '../Home/Quest/QuestCard';
import ChallengesListing from '../../pages/Challenges/ChallengesListing';

const ActivityTab = (props) => {
  return (
    <Tabs
      defaultActiveKey='challenges'
      id='uncontrolled-tab-example'
      className='mb-3 max__todo-activity-tab'
    >
      <Tab eventKey='challenges' title='Challenges'>
        <ChallengesListing />
      </Tab>
      <Tab eventKey='quest' title='Quests & Certs'>
        <div className='row'>
          <div className='col-6'>
            <QuestCard className={'max__activity-quest-card'} />
          </div>
          <div className='col-6'>
            <QuestCard className={'max__activity-quest-card'} />
          </div>
        </div>
      </Tab>
    </Tabs>
  );
};

export default ActivityTab;
