import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import IndividualRanking from '../Rankings/IndividualRanking';
import SquadRankings from '../Rankings/SquadRankings';

const RankingLayout = () => {
  return (
    <div className='max__ranking-wrapper container'>
      <ul>
        <li>Squad</li>
      </ul>
      <div className='ranking-card'>
        <Tabs
          defaultActiveKey='Individual rankings'
          id='uncontrolled-tab-example'
          className='mb-3 max__todo-activity-tab'
        >
          <Tab eventKey='Individual rankings' title='Individual rankings'>
            {<IndividualRanking />}
          </Tab>
          <Tab eventKey='Squad rankings' title='Squad rankings'>
            <div className='row'>{<SquadRankings />}</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default RankingLayout;
