import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const RankingTab = (props) => {
  console.log(props.tabs);
  return (
    <Tabs
      defaultActiveKey='quest'
      id='uncontrolled-tab-example'
      className='mb-3 max__todo-activity-tab'
    >
      <Tab eventKey='challenges' title='Challenges'>
        {<props.tabs />}
      </Tab>
      <Tab eventKey='quest' title='Quests & Certs'>
        <div className='row'>
        
          {<props.tabs />}
        </div>
      </Tab>
    </Tabs>
  );
};

export default RankingTab;
