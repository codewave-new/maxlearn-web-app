import React, { useState } from 'react';
import HelpTab from '../UI/Tabs/HelpTab';

const HelpLayout = () => {
  const [textarea, setTextArea] = useState('');
  const TextAreaHandler = (e) => {
    setTextArea(e.target.value);
  };
  return (
    <div className='max__help-wrapper container'>
      <div className='row'>
        <div className='col-12 col-md-7 col-lg-8'>
          <div className='help__search-container'>
            <h2>Help desk</h2>
            <input
              type='text'
              id='search-bar'
              placeholder='What you looking for?'
            />
            <a href='#'>
              <img
                className='search-icon'
                src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665643025/zoom_v08naw.svg'
              />
            </a>
          </div>
          <div className='queries-container'>
            <HelpTab className='max__help__tab' />
          </div>
        </div>
        <div className='col-12 col-md-5 col-lg-4'>
          <div className='question_wrapper'>
            <div className="question-oval"></div>
            <div className="question-img-container ">
              <img src="https://res.cloudinary.com/dysdy7hjr/image/upload/v1665661700/Group_16_b8s0ko.svg" alt="" />
             <h2>Ask a Question</h2>
            </div>
            <form action=''>
              <div className='question-from-control'>
                <label htmlFor='name'>Your Name</label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter your full name'
                />
              </div>
              <div className='question-from-control'>
                <label htmlFor='name'>Type of issue</label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter your query subject'
                />
              </div>
              <div className='question-from-control'>
                <label htmlFor='name'>Your comments</label>
                <textarea
                  type='text'
                  name='comments'
                  id='comments'
                  placeholder='Type your query..'
                  maxLength={250}
                  onChange={TextAreaHandler}
                  rows='4'
                  cols='50'
                />
                <div className='textarea-number-container'>
                  {textarea.length}/250
                </div>
              </div>
              <div className='submit-container'>
                <button >Send your question</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpLayout;
