import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormGroup, FormLabel } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import Select from 'react-select';
import { EditClose, PasswordHidden, PasswordShow, SelectArrow } from '../../assets';
import { ButtonLoader } from '../loader/loader';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { schema } from '../Profile/Schema';
import { toast } from 'react-toastify';
import { editProfileDetails } from '../../services/profile';
import useAuthenticationError from '../CustomHooks/ApiErrors';
import { editProfile } from '../../state/slices/profileInfo';
import { useDispatch } from 'react-redux';

const selectStyles = {
  container: (baseStyles) => {
    return {
      ...baseStyles,
      paddingRight: '0 !important',
      paddingBottom: '0.5rem !important',
    };
  },
  control: (baseStyles) => {
    return {
      ...baseStyles,
      border: 'none',
    };
  },
  valueContainer: (baseStyles) => {
    return {
      ...baseStyles,
      paddingLeft: '0 !important',
    };
    control;
  },
};

const EditUserDetailsModal = (props) => {
  const { show, onHide, mobileNo, bio } = props;
  const dispatch = useDispatch();
  const authError = useAuthenticationError();
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const initialValues = {
    bio: bio || '',
    countryCode: 'us',
    mobileNo: mobileNo || '',
    appLanguage: 'English',
    password: '',
    passwordMask: '',
  };

  const languages = [
    'English',
    '中国人',
    'Española',
    'Français',
    'Português',
    'हिन्दी',
    'عربى',
  ];

  const handleMaskToggler = () => {
    setShowPassword((previousState) => !previousState);
  };

  const handleEditUserDetail = async (values, action) => {
    const updatedProfile = {
      learner_obj: {
        mobile: values.mobileNo,
        bio: values.bio,
        password: values.password,
      },
    };
    if (!phoneNumberError) {
      const response = await editProfileDetails(updatedProfile);
      if (response.statusCode === 200) {
        dispatch(editProfile({ bio: values.bio, mobile: values.mobileNo }));
        toast.success('profile Data Updated successfully');
        onHide();
      } else if (response.statusCode === 440) {
        authError();
      }
    }
  };

  const handleBioLength = (e, setFieldValue) => {
    const value = e.target.value.substr(0, 1000);
    if (e.target.value.length > 1000) {
      setFieldValue('bio', value);
    } else {
      setFieldValue('bio', e.target.value);
    }
  };

  const handleMobileNo = (
    value,
    data,
    e,
    formattedValue,
    setFieldValue,
    values
  ) => {
    setFieldValue('mobileNo', formattedValue);
    if (data.format.length === formattedValue.length) {
      setPhoneNumberError('');
    } else {
      setPhoneNumberError('Please Enter a valid Mobile Number');
    }
    // if (phoneValidationRegex[countryCode]?.test(formattedValue)) {
    //   alert('true');
    // setPhoneNumberError('');
    //   setErrors({ ...errors, mobileNo: '' });
    // } else {
    // setPhoneNumberError('Please Enter a valid Phone Number');
    //   setErrors({ ...errors, mobileNo: 'Please Enter a valid Phone Number' });
    // }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop='static'
      keyboard={false}
      show-close='false'
      className='ml-edit-user-details'
      dialogClassName='ml-edit-user-details__modal-dialog ml-modal-blur'
      contentClassName='ml-edit-user-details__modal-content'
    >
      <Modal.Header
        closeButton
        className=' d-flex justify-content-between align-items-center  ml-edit-user-details__modal-header'
      >
        <Modal.Title>Edit User Details</Modal.Title>
        {/* <button type='button' className='edit_btn'  aria-label='Close'>
          <EditClose.default />
        </button> */}
      </Modal.Header>
      <Modal.Body className='ml-edit-user-details__modal-body'>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleEditUserDetail}
        >
          {({
            errors,
            touched,
            values,
            setFieldValue,
            setFieldTouched,
            handleSubmit,
            handleBlur,
            handleChange,
            setTouched,
            isSubmitting,
            isValid,
            dirty,
          }) => (
            <Form onSubmit={handleSubmit} className='ml-edit-user-detail-form'>
              {console.log(errors, values.bio.length)}
              <div className='form__content'>
                <div>
                  <FormGroup className='ml-form-group'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <FormLabel
                        htmlFor='bio-name'
                        className='ml-form-text-title'
                      >
                        My bio
                      </FormLabel>
                      <FormLabel
                        htmlFor='bio-name'
                        className='ml-form-text-title'
                      >
                        {values.bio.length}/1000
                      </FormLabel>
                    </div>

                    <Field
                      as='textarea'
                      className={`form-control ml-form-inputs ${
                        errors.bio && touched.bio && 'is-invalid'
                      }`}
                      name='bio'
                      value={values.bio}
                      onChange={(e) => {
                        handleBioLength(e, setFieldValue);
                      }}
                      onBlur={() => {
                        setFieldTouched('bio', true);
                      }}
                      id='bio-name'
                      rows='3'
                    />
                    {errors.bio && touched.bio ? (
                      <div className='form_error-message mt-25'>
                        {errors.bio}
                      </div>
                    ) : null}
                  </FormGroup>

                  <FormGroup className='ml-form-group'>
                    <FormLabel
                      htmlFor='mobile-number'
                      className='ml-form-text-title'
                    >
                      Mobile number
                    </FormLabel>
                    <div className='row m-0 phone__number-wrapper'>
                      <PhoneInput
                        country={values.country}
                        countryCodeEditable={false}
                        name='mobileNo'
                        value={values.mobileNo}
                        onBlur={() => {
                          setTouched({ ...touched, mobileNo: true });
                        }}
                        onChange={(value, data, event, formattedValue) => {
                          handleMobileNo(
                            value,
                            data,
                            event,
                            formattedValue,
                            setFieldValue,
                            values
                          );
                        }}
                      />

                      {/* <div className='col-3 col-md-3 px-0'>
                    <div className='selectbox__wrapper  '>
                      <select
                        className='select__input'
                        name='countryCode'
                        onChange={handleChange}
                      >
                        {countryCode.map((countries) => (
                          <option value={countries.value}>
                            {countries.label}
                          </option>
                        ))}
                      </select>
                      <span className='select__icon'>
                        <SelectArrow.default />
                      </span>
                    </div> */}

                      {/* <Select
                      className={`React ml-form-inputs ${
                        errors.countryCode &&
                        touched.countryCode &&
                        'select-is-invalid'
                      }`}
                      classNamePrefix='select'
                      name='countryCode'
                      value={values.countryCode}
                      onChange={(e) => {
                        if (!e) setFieldValue('countryCode', '');
                        if (e) {
                          setFieldValue('countryCode', e);
                        }
                      }}
                      options={countryCode}
                      isClearable
                      styles={selectStyles}
                      //   getOptionLabel={(category) => category.label}
                      //   getOptionValue={(category) => category.value}
                    /> */}
                      {/* </div>
                  <div className='col-7 col-md-8 pr-0'>
                    <Field
                      type='number'
                      className={`form-control ml-form-inputs pr-0 ${
                        errors.mobileNo && touched.mobileNo && 'is-invalid'
                      }`}
                      name='mobileNo'
                      value={values.mobileNo}
                      onChange={(e) => {
                        handleMobileNo(e, setFieldValue, setFieldError, values);
                      }}
                      id='mobile-number'
                    />
                  </div> */}
                    </div>
                    {errors.mobileNo && touched.mobileNo ? (
                      <div className='form_error-message mt-25'>
                        {errors.mobileNo}
                      </div>
                    ) : null}
                    {!errors.mobileNo &&
                    phoneNumberError &&
                    touched.mobileNo ? (
                      <div className='form_error-message mt-25'>
                        {phoneNumberError}
                      </div>
                    ) : (
                      ''
                    )}
                  </FormGroup>

                  <FormGroup className='ml-form-group'>
                    <FormLabel
                      htmlFor='data-category'
                      className='ml-form-text-title'
                    >
                      Select app language
                    </FormLabel>
                    {/* <Select
                  className={`React ml-form-inputs ${
                    errors.appLanguage &&
                    touched.appLanguage &&
                    'select-is-invalid'
                  }`}
                  classNamePrefix='select'
                  name='appLanguage'
                  // placeholder='Select app language'
                  value={values.appLanguage}
                  onChange={(e) => {
                    if (!e) setFieldValue('appLanguage', '');
                    if (e) {
                      setFieldValue('appLanguage', e);
                    }
                  }}
                  options={['english']}
                  isClearable
                  styles={selectStyles}
                  //   getOptionLabel={(category) => category.label}
                  //   getOptionValue={(category) => category.value}
                /> */}
                    <div className='selectbox__wrapper '>
                      <select className='select__input'>
                        {languages?.map((lang) => (
                          <option value={lang}>{lang}</option>
                        ))}
                      </select>
                      <span className='select__icon'>
                        <SelectArrow.default />
                      </span>
                    </div>

                    {errors.appLanguage && touched.appLanguage ? (
                      <div className='mt-25 ml-25 form_error-message'>
                        {errors.appLanguage}
                      </div>
                    ) : null}
                  </FormGroup>

                  <FormGroup className='ml-form-group'>
                    <FormLabel
                      htmlFor='data-name'
                      className='ml-form-text-title'
                    >
                      Password
                    </FormLabel>
                    <div className='password_input'>
                      <Field
                        type={showPassword ? 'text' : 'password'}
                        className={`form-control  ml-form-inputs ${
                          errors.password && touched.password && 'is-invalid'
                        }`}
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        id='data-name'
                      />
                      {errors.password && touched.password ? null : (
                        <div
                          className='password__icon'
                          onClick={handleMaskToggler}
                        >
                          {showPassword ? (
                            <PasswordShow.default />
                          ) : (
                            <PasswordHidden.default />
                          )}
                        </div>
                      )}
                    </div>

                    {errors.password && touched.password ? (
                      <div className='form_error-message mt-25'>
                        {errors.password}
                      </div>
                    ) : null}
                  </FormGroup>
                </div>
                <div>
                  <Modal.Footer className='ml-edit-user-details__modal-footer'>
                    <Button
                      type='submit'
                      id='profile-submit'
                      disabled={
                        isSubmitting ? isSubmitting : !(isValid && dirty)
                      }
                    >
                      {isSubmitting ? <ButtonLoader /> : 'Update profile'}
                    </Button>
                  </Modal.Footer>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default EditUserDetailsModal;
