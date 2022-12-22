import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const RankingTab = (props) => {
  return (
    <Tabs
      defaultActiveKey='Individual rankings'
      id='uncontrolled-tab-example'
      className='mb-3 max__todo-activity-tab'
    >
      <Tab eventKey='Individual rankings' title='Individual rankings'>
        {<props.tabs />}
      </Tab>
      <Tab eventKey='Squad rankings' title='Squad rankings'>
        <div className='row'>{<props.tabs />}</div>
      </Tab>
    </Tabs>
  );
};

export default RankingTab;
