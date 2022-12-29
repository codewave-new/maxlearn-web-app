import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const HelpAccordion = (props) => {
  return (
    <div className='help__accordion-contianer'>
      <Accordion defaultActiveKey={props.num}>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            Lorem ipsm dolor sit amet concecture?
          </Accordion.Header>
          <Accordion.Body>
            <p className='accordion_body_content'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default HelpAccordion;
