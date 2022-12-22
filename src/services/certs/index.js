import axios from '../../api/api';

export const getCertBasedOnLearnerId = (learnerID) =>
  axios.get(`/api/app/certs/list/${learnerID}`);
