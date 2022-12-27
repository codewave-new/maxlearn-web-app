import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import '../../../styles/questions/confidence.scss';
import ReactSlider from 'react-slider';
import {
  notConfident,
  confused,
  neutral,
  confident,
  veryConfident,
  notConfidentTrack,
  confusedTrack,
  neutralTrack,
  confidentTrack,
  veryConfidentTrack,
} from '../../../assets/Images/slidersvg';
import { Link, NavLink } from 'react-router-dom';
import { WaitingLoader } from '../../loader/loader';
import FeedbackModal from './FeedbackModal';

const ConfidenceSliderModal = ({
  modalStatus,
  setConfidence,
  setSubmitCliked,
  name,
  setIncresingTimerId,
  setIntervalID,
  timeOut,
}) => {
  const [sliderChange, setSliderChange] = useState(0);
  const [isContinue, setContinue] = useState(0);

  const dWidth = screen.width;
  useEffect(() => {
    if (isContinue) {
      switch (sliderChange) {
        case 0:
          setConfidence('NOT-CONFIDENT');
          break;
        case 0.25:
          setConfidence('CONFUSED');
          break;
        case 0.5:
          setConfidence('NEUTRAL');
          break;
        case 0.75:
          setConfidence('CONFIDENT');
          break;
        case 1:
          setConfidence('VERY-CONFIDENT');
          break;
      }
    }
  }),
    [sliderChange, isContinue];
  const handleClose = () => {
    if (!timeOut) {
      setSubmitCliked(false);
      setIncresingTimerId();
      setIntervalID();
    }
  };
  return (
    <>
      <Modal
        open={modalStatus}
        close={handleClose}
        className='confidence_modal'
      >
        <div className='modal_header  '>
          <div className=' d-flex justify-content-center p-2 modal_name'>
            {name}{' '}
          </div>
          <div className=' d-flex justify-content-center mt-1 modal_header '>
            How confident are you of this answer?
          </div>
        </div>
        <div className='slider d-flex justify-content-center '>
          <div>
            <ReactSlider
              value={sliderChange}
              className='horizontal-slider'
              marks
              min={0}
              max={1}
              step={0.25}
              onChange={(value) => {
                setSliderChange(value);
              }}
              thumbClassName={`example-thumb ${
                sliderChange === 0
                  ? 'example-thumb-first'
                  : sliderChange === 1
                  ? 'example-thumb-last'
                  : ''
              }`}
              trackClassName='example-track'
              renderThumb={(props, state) => (
                <div {...props}>
                  {sliderChange === 0 ? (
                    <notConfident.default />
                  ) : sliderChange === 0.25 ? (
                    <confused.default />
                  ) : sliderChange === 0.5 ? (
                    <neutral.default />
                  ) : sliderChange === 0.75 ? (
                    <confident.default />
                  ) : (
                    sliderChange === 1 && <veryConfident.default />
                  )}
                  <p className='slider_text'>
                    {sliderChange === 0
                      ? 'I’m not confident'
                      : sliderChange === 0.25
                      ? 'I’m confused'
                      : sliderChange === 0.5
                      ? 'I’m neutral'
                      : sliderChange === 0.75
                      ? 'I’m confident'
                      : sliderChange === 1 && 'I’m very confident'}
                  </p>
                </div>
              )}
              renderMark={(props, state) => {
                if (props.key == 0) {
                  return sliderChange === 0 ? (
                    <notConfidentTrack.default />
                  ) : sliderChange === 0.25 ? (
                    <confusedTrack.default />
                  ) : sliderChange === 0.5 ? (
                    <neutralTrack.default />
                  ) : sliderChange === 0.75 ? (
                    <confidentTrack.default />
                  ) : sliderChange === 1 ? (
                    <veryConfidentTrack.default />
                  ) : (
                    ''
                  );
                }
              }}
            />
          </div>
        </div>
        <div className='completion__footer slider_footer'>
          <div
            className={`d-flex ${
              isContinue ? 'justify-content-center' : 'justify-content-between'
            } align-items-center`}
          >
            {isContinue ? (
              <p className='d-flex flex-column justify-content-center align-items-center'>
                <WaitingLoader />
                <span className='modal_header bg-transparent'>
                  Submitting...
                </span>
              </p>
            ) : (
              <>
                <button
                  onClick={() => {
                    setSubmitCliked(false);
                    setIncresingTimerId();
                    setIntervalID();
                  }}
                  disabled={isContinue ? true : false}
                  className='challenge__outline-btn '
                >
                  Let me retry
                </button>
                <button
                  disabled={isContinue ? true : false}
                  onClick={() => setContinue(true)}
                  className='challenge__filled-btn'
                >
                  Yes, continue
                </button>
              </>
            )}
          </div>
        </div>
        <div className='slider_footer_feedback'>
          <p>
            Do you have any feedback?&nbsp;
            <span>
              <button>Click here</button>
            </span>
          </p>
        </div>
      </Modal>
      <FeedbackModal open={showModal} close={closeModal} />
    </>
  );
};

export default ConfidenceSliderModal;
