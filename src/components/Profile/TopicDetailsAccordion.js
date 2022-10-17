import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const percentage = 66;

const TopicDetailsAccordion = (props) => {
  return (
    <div className='profile__accordion-contianer'>
      <Accordion defaultActiveKey={props.num}>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            Compliance monitoring and the importance of testing!
          </Accordion.Header>
          <Accordion.Body>
            <div className='details-container'>
              <div className='row'>
                <div className='col-6 '>
                  <h5>LEARNING LEVEL</h5>
                  <div className=''>
                    <h4>
                      Awareness{' '}
                      <div className='percentage-bar ps-2'>
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            textColor: 'black',
                            fontSize: '24px',
                            pathColor: '#57cf83',
                            trailColor: '#c9ebd5',
                            width: 10,
                            fill: 'black',
                            textSize: '30px',
                          })}
                        />
                      </div>
                    </h4>
                    <h4>
                      Explanatory{' '}
                      <div className='percentage-bar ps-2'>
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            textColor: 'black',
                            fontSize: '24px',
                            pathColor: '#57cf83',
                            trailColor: '#c9ebd5',
                            width: 10,
                            fill: 'black',
                            textSize: '30px',
                          })}
                        />
                      </div>
                    </h4>
                    <h4>
                      Awareness{' '}
                      <div className='percentage-bar ps-2'>
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            textColor: 'black',
                            fontSize: '24px',
                            pathColor: '#57cf83',
                            trailColor: '#c9ebd5',
                            width: 10,
                            fill: 'black',
                            textSize: '30px',
                          })}
                        />
                      </div>
                    </h4>
                  </div>
                </div>
                <div className='col-6 '>
                  <h5>STATUS</h5>
                  <div className='mt-3'>
                    <h4>Awareness</h4>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default TopicDetailsAccordion;
