import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HelpAccordion from '../../Layout/HelpAccordion';

const HelpTab = (props) => {
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

  const helpAccordionData = dummy_data.map((el) => (
    <HelpAccordion num={el.num} />
  ));
  return (
    <Tabs
      defaultActiveKey='learning'
      id='uncontrolled-tab-example'
      className={`mb-3 max__todo-activity-tab ${props.className}`}
    >
      <Tab eventKey='learning' title='Learning'>
        {helpAccordionData}
      </Tab>
      <Tab eventKey='challenges' title='Challenges'></Tab>
      <Tab eventKey='badges' title='My badges'>
        <div className='row'></div>
      </Tab>
      <Tab eventKey='others' title='Others'>
        <div className='row'></div>
      </Tab>
    </Tabs>
  );
};

export default HelpTab;
