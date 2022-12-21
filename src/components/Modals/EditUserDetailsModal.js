import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormGroup, FormLabel } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import Select from 'react-select';

const selectStyles = {
  container: (baseStyles) => ({
    ...baseStyles,
    paddingRight: '0 !important',
    paddingBottom: '0.5rem !important',
  }),
  control: (baseStyles) => ({
    ...baseStyles,
    border: 'none',
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    paddingLeft: '0 !important',
  }),
};

const EditUserDetailsModal = (props) => {
  const { show, onHide } = props;
  const [countryCode, setCountryCode] = useState([]);

  // export const getCountries = async () =>
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
          initialValues={{
            bio: '',
            countryCode: '',
            mobileNo: '',
            appLanguage: '',
            password: '',
          }}
          //   validationSchema={klp_schema}  
          onSubmit={(formData, ...rest) => {
            // console.log(formData);
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
              <FormGroup className='ml-form-group'>
                <FormLabel htmlFor='data-name' className='ml-form-text-title'>
                  My bio
                </FormLabel>
                <Field
                  as='textarea'
                  className={`form-control ml-form-inputs ${
                    errors.title && touched.title && 'is-invalid'
                  }`}
                  name='title'
                  //   value={values.title}
                  onChange={handleChange}
                  id='data-name'
                  rows='3'
                />
                {errors.title && touched.title ? (
                  <div className='form_error-message mt-25'>{errors.title}</div>
                ) : null}
              </FormGroup>

              <FormGroup className='ml-form-group'>
                <FormLabel htmlFor='data-name' className='ml-form-text-title'>
                  Mobile number
                </FormLabel>
                <div className='row m-0'>
                  <div className='col-5 col-md-4 px-0'>
                    <Select
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
                    />
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
                      id='data-name'
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
                <Select
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
                  options={[]}
                  isClearable
                  styles={selectStyles}
                  //   getOptionLabel={(category) => category.label}
                  //   getOptionValue={(category) => category.value}
                />

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
                <Field
                  type='password'
                  className={`form-control ml-form-inputs ${
                    errors.title && touched.title && 'is-invalid'
                  }`}
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                  id='data-name'
                />
                {errors.title && touched.title ? (
                  <div className='form_error-message mt-25'>{errors.title}</div>
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
