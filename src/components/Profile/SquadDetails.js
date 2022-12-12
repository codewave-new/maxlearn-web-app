import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

const SquadDetails = () => {
  return (
    <Tabs
    defaultActiveKey='Your squad'
    id='uncontrolled-tab-example'
    className={`mb-3 max__todo-activity-tab ${props.className}`}
  >
     <Tab eventKey='Members' title='Members'></Tab>
     <Tab eventKey='Challenges' title='Challenges'></Tab>
  </Tabs>
  )
}

export default SquadDetails