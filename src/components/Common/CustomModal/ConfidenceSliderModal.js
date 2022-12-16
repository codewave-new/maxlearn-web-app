import React, { useState } from 'react';
import Modal from './Modal';
import '../../../styles/questions/confidence.scss';
import ReactSlider from 'react-slider';
import Notconfident from '../../../assets/Images/slidersvg/not-confident -track.svg';

const ConfidenceSliderModal = ({ modalStatus, handleClose }) => {
  const [sliderChange, setSliderChange] = useState(0);

  console.log(sliderChange);
  return (
    <>
      <Modal
        open={modalStatus}
        close={handleClose}
        className='confidence_modal'
      >
        <div className='modal_header  '>
          <div className=' d-flex justify-content-center p-2 modal_name'>
            Tessa{' '}
          </div>
          <div className=' d-flex justify-content-center mt-1 modal_header '>
            How cofident are you of this answer?
          </div>
        </div>

        <div className='slider d-flex justify-content-center '>
          <div>
            <label id='slider-label'>React Slider example</label>
            <ReactSlider
              value={sliderChange}
              className='horizontal-slider'
              marks
              markClassName='example-mark'
              min={0}
              max={5}
              step={1}
              onSliderClick={(value) => {
                console.log(
                  '🚀 ~ file: ConfidenceSlider.js ~ line 106 ~ value',
                  value
                );
                // console.log(sliderChange[0]);
                setSliderChange(value);
              }}
              thumbClassName='example-thumb'
              trackClassName='example-track'
              renderThumb={(props, state) => (
                <div {...props}>
                  {state.valueNow}
                  {sliderChange === 0 ? <Notconfident /> : ''}
                </div>
              )}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ConfidenceSliderModal;
