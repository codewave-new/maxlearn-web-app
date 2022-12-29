import React, { useState } from 'react';
import HelpTab from '../UI/Tabs/HelpTab';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const HelpLayout = () => {
  const navigate = useNavigate();
  const [textarea, setTextArea] = useState('');
  const TextAreaHandler = (e, callback) => {
    setTextArea(e.target.value);
    callback(textarea);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is mandatory!'),
    issue: Yup.string().required('This field is mandatory!'),
    comments: Yup.string().required('This field is mandatory!'),
  });

  const onSubmit = () => {
    navigate('/profile');
  };

  return (
    <div className='max__help-wrapper container'>
      <div className='row'>
        <div className='col-12 col-md-7 col-lg-8'>
          <div className='help__search-container'>
            <h2 className='help_heading'>Help desk</h2>
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
            <div className='question-oval'></div>
            <div className='question-img-container '>
              <img
                src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665661700/Group_16_b8s0ko.svg'
                alt=''
              />
              <h2>Ask a Question</h2>
            </div>
            <Formik
              initialValues={{
                name: '',
                issue: '',
                comments: '',
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({
                errors,
                touched,
                handleSubmit,
                handleChange,
                setFieldValue,
                handleBlur,
              }) => {
                return (
                  <form action='' onSubmit={handleSubmit}>
                    <div className='question-from-control'>
                      <label
                        htmlFor='name'
                        className='question-from-control__label'
                      >
                        Your Name
                      </label>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='question-from-control__input'
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Enter your full name'
                      />
                      {errors.name && touched.name ? (
                        <div className='question-from-control__error'>
                          {errors.name}
                        </div>
                      ) : null}
                    </div>
                    <div className='question-from-control'>
                      <label
                        htmlFor='issue'
                        className='question-from-control__label'
                      >
                        Type of issue
                      </label>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='question-from-control__input'
                        type='text'
                        name='issue'
                        id='issue'
                        placeholder='Enter your query subject'
                      />
                      {errors.name && touched.name ? (
                        <div className='question-from-control__error'>
                          {errors.name}
                        </div>
                      ) : null}
                    </div>
                    <div className='question-from-control'>
                      <label
                        htmlFor='comments'
                        className='question-from-control__label'
                      >
                        Your comments
                      </label>
                      <textarea
                        className='question-from-control__textarea'
                        type='text'
                        name='comments'
                        id='comments'
                        placeholder='Type your query..'
                        maxLength={250}
                        // onChange={TextAreaHandler}
                        // onChange={handleChange}
                        onChange={(e) => {
                          TextAreaHandler(e, (value) => {
                            setFieldValue('comments', value);
                          });
                        }}
                        onBlur={handleBlur}
                        rows='4'
                        cols='50'
                      />
                      <div className='textarea-number-container'>
                        {textarea.length}/250
                      </div>
                    </div>
                    {errors.name && touched.name ? (
                      <div className='question-from-control__error'>
                        {errors.name}
                      </div>
                    ) : null}
                    <div className='submit-container'>
                      <button className='submit_button'>
                        Send your question
                      </button>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpLayout;
