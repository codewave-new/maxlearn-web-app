import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import IndividualRanking from '../Rankings/IndividualRanking';
import SquadRankings from '../Rankings/SquadRankings';

const RankingLayout = () => {
  const [activeTab, setActiveTab] = useState('Individual');

  return (
    <div className='max__ranking-wrapper container'>
      <ul className='d-flex bread__crumbs-wrapper'>
        <li className='bread__crumbs-list'>Home</li>
        <li className='bread__crumbs-list'>Ranking</li>
        <li className='bread__crumbs-list-active'>{activeTab}</li>
      </ul>
      <div className='ranking-card'>
        <Tabs
          defaultActiveKey={activeTab === 'Squad' ? 'Squad' : 'Individual'}
          id='uncontrolled-tab-example'
          className='mb-3 max__todo-activity-tab'
          onSelect={(eventKey) => {
            setActiveTab(eventKey);
          }}
        >
          <Tab eventKey='Individual' title='Individual rankings'>
            {activeTab === 'Individual' && <IndividualRanking />}
          </Tab>
          <Tab eventKey='Squad' title='Squad rankings'>
            <div className='row'>
              {activeTab === 'Squad' && <SquadRankings />}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default RankingLayout;
