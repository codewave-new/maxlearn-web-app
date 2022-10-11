import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react';
import QuestCard from '../Home/Quest/QuestCard';

const ActivityTab = (props) => {
  return (
    <Tabs
      defaultActiveKey='quest'
      id='uncontrolled-tab-example'
      className='mb-3 max__todo-activity-tab'
    >
      <Tab eventKey='challenges' title='Challenges'></Tab>
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
