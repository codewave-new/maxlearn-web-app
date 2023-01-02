import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormGroup, FormLabel } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import Select from 'react-select';
import { PasswordHidden, SelectArrow } from '../../assets';
import * as Yup from 'yup';
import { Language } from '@mui/icons-material';

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
  const [showPassword, setShowPassword] = useState(false);
  // const [countryCode, setCountryCode] = useState([
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' },
  // ]);

  const countryCode = [
    {
      value: 'IN',
      label: '+91',
    },
    {
      value: 'US',
      label: '+1',
    },
  ];


  const initialValues = {
    bio: bio || '',
    countryCode: '',
    mobileNo: mobileNo || '',
    appLanguage: 'English',
    password: '',
    passwordMask: '',
  };

  const schema = Yup.object().shape({
    bio: Yup.string()
      // .min(3, 'bio Should More Than 3 Charecters')
      .required('Bio Is Required'),
    appLanguage: Yup.string().required('app language Is Required'),
    password: Yup.string()
      .min(5, 'Password Length Should Be More Than 5 Characters')
      .required('Please Enter The Password'),
  });

  const handleMaskToggler = () => {
    setShowPassword((previousState) => !previousState);
  };

  
  //  const getCountries = async () =>
  // axios.get(`/countries/allCountries`, {
  //   headers: {
  //     "x-tenant-id": x_tenant_id,
  //   },
  // });

  // const fetchCountries = async () => {
  //   const resp = await getCountries();
  //   if (resp.data && resp.data.statusCode === 200) {
  //     const countries = resp.data?.data ?? [];
  //     setCountries(countries);
  //   }
  // };

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop='static'
      keyboard={false}
      className='ml-edit-user-details'
      dialogClassName='ml-edit-user-details__modal-dialog ml-modal-blur'
      contentClassName='ml-edit-user-details__modal-content'
    >
      <Modal.Header closeButton className='ml-edit-user-details__modal-header'>
        <Modal.Title>Edit User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className='ml-edit-user-details__modal-body'>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(formData, ...rest) => {
            console.log(formData);
          }}
        >
          {({
            errors,
            touched,
            values,
            setFieldValue,
            handleSubmit,
            handleChange,
          }) => (
            <Form onSubmit={handleSubmit} className='ml-edit-user-detail-form'>
              {/* {console.log(values, errors)} */}
              <FormGroup className='ml-form-group'>
                <FormLabel htmlFor='bio-name' className='ml-form-text-title'>
                  My bio
                </FormLabel>

                <Field
                  as='textarea'
                  className={`form-control ml-form-inputs ${
                    errors.bio && touched.bio && 'is-invalid'
                  }`}
                  name='bio'
                  value={values.bio}
                  onChange={handleChange}
                  id='bio-name'
                  rows='3'
                />
                {errors.bio && touched.bio ? (
                  <div className='form_error-message mt-25'>{errors.bio}</div>
                ) : null}
              </FormGroup>

              <FormGroup className='ml-form-group'>
                <FormLabel
                  htmlFor='mobile-number'
                  className='ml-form-text-title'
                >
                  Mobile number
                </FormLabel>
                <div className='row m-0'>
                  <div className='col-3 col-md-3 px-0'>
                    <div className='selectbox__wrapper  '>
                      <select className='select__input'>
                        {countryCode.map((countries) => (
                          <option value={countries.value}>
                            {countries.label}
                          </option>
                        ))}
                      </select>
                      <span className='select__icon'>
                        <SelectArrow.default />
                      </span>
                    </div>

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
                  </div>
                  <div className='col-7 col-md-8 pr-0'>
                    <Field
                      type='number'
                      className={`form-control ml-form-inputs pr-0 ${
                        errors.mobileNo && touched.mobileNo && 'is-invalid'
                      }`}
                      name='mobileNo'
                      value={values.mobileNo}
                      onChange={handleChange}
                      id='mobile-number'
                    />
                  </div>
                </div>
                {errors.title && touched.title ? (
                  <div className='form_error-message mt-25'>{errors.title}</div>
                ) : null}
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
                  <select className='select__input' disabled>
                    <option value='English'>English</option>
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
                <FormLabel htmlFor='data-name' className='ml-form-text-title'>
                  Password
                </FormLabel>
                <div className='password_input'>
                  <Field
                    type='text'
                    className={`form-control  ml-form-inputs ${
                      errors.password && touched.password && 'is-invalid'
                    }`}
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    id='data-name'
                  />
                  {errors.password && touched.password ? null : (
                    <button
                      className='password__icon'
                      onclick={handleMaskToggler}
                    >
                      <PasswordHidden.default />
                    </button>
                  )}
                </div>

                {errors.password && touched.password ? (
                  <div className='form_error-message mt-25'>
                    {errors.password}
                  </div>
                ) : null}
              </FormGroup>
            </Form>
          )}
        </Formik>
      </Modal.Body>
      <Modal.Footer className='ml-edit-user-details__modal-footer'>
        <Button onClick={onHide}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditUserDetailsModal;
