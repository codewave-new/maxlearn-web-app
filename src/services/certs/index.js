import axios from '../../api/api';

export const getCertBasedOnLearnerId = (learnerID, upcoming) => {
  let query = {};
  if (upcoming) query = { ...query, upcoming };

  return axios.get(`/api/app/certs/list/${learnerID}`, { params: query });
};

export const startCertExam = (obj) =>
  axios.post('/api/app/certs/start-cert', obj);

export const resumeCertExam = (obj) =>
  axios.post('/api/app/certs/resume-cert', obj);

export const getCertExamQuestions = (certId) =>
  axios.post('/api/app/certs/questions-from-cert', { certId });

export const submitCertExamAns = (payload) =>
  axios.post('/api/app/certs/submit-answer', payload);

export const finishCertTest = (payload) =>
  axios.post('/api/app/certs/finish-cert-test', payload);

export const fetchCertReport = (resultId) =>
  axios.post('/api/app/certs/get-cert-report', { resultId });
