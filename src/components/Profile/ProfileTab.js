import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BasicInfo from './BasicInfo';
import YourSquad from './YourSquad';
import TopicDetailsAccordion from './TopicDetailsAccordion';

const ProfileTab = (props) => {
  const dummy_data = [
    {
      num: 1,
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatislm accusantium doloremque laudantium to tam rem aperilskm, eaque ipsa quae ab illoSed ut perspiciatis unde omnis ilslte natus error sit voluptatl m accusantium ab illo.',
    },
    {
      num: 2,
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatislm accusantium doloremque laudantium to tam rem aperilskm, eaque ipsa quae ab illoSed ut perspiciatis unde omnis ilslte natus error sit voluptatl m accusantium ab illo.',
    },
    {
      num: 3,
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatislm accusantium doloremque laudantium to tam rem aperilskm, eaque ipsa quae ab illoSed ut perspiciatis unde omnis ilslte natus error sit voluptatl m accusantium ab illo.',
    },
    {
      num: 4,
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatislm accusantium doloremque laudantium to tam rem aperilskm, eaque ipsa quae ab illoSed ut perspiciatis unde omnis ilslte natus error sit voluptatl m accusantium ab illo.',
    },
    {
      num: 5,
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatislm accusantium doloremque laudantium to tam rem aperilskm, eaque ipsa quae ab illoSed ut perspiciatis unde omnis ilslte natus error sit voluptatl m accusantium ab illo.',
    },
  ];

  const profileAccordionData = dummy_data.map((el) => (
    <TopicDetailsAccordion num={el.num} />
  ));
  return (
    <Tabs
      defaultActiveKey='Basic info'
      id='uncontrolled-tab-example'
      className={`mb-3 max__todo-activity-tab ${props.className}`}
    >
      <Tab eventKey='Analytics' title='Analytics'>
        <div className='row content'>
          <div className='col-12 col-md-6'>
            <div className='max__profile-tab-card-container'>
              <h2 className='my-3 mt-2'>Get insights on your topics</h2>
              <div className='details-card'>
                <h4>Explore your stats through each topics</h4>
                {profileAccordionData}
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='max__profile-tab-card-container'>
              <h2 className='my-3 mt-2'>Get insights on your challenges</h2>
              <div className='details-card'>
                <h4>Performance on challenge</h4>
                {profileAccordionData}
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey='Your squad' title='Your squad'>
        <YourSquad/>
      </Tab>
      <Tab eventKey='Basic info' title='Basic info'>
        <BasicInfo />
      </Tab>
      <Tab eventKey='Badges' title='Badges'>
        <div className='row'></div>
      </Tab>
    </Tabs>
  );
};

export default ProfileTab;
