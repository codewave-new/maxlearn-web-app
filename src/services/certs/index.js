import axios from '../../api/api';

export const getCertBasedOnLearnerId = (learnerID) =>
  axios.get(`/api/app/certs/list/${learnerID}`);

export const startCertExam = (obj) =>
  axios.post('/api/app/certs/start-cert', obj);

export const getCertExamQuestions = (certId) =>
  axios.post('/api/app/certs/questions-from-cert', { certId });
