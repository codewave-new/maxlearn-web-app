import axios from 'axios';
import config from '../../api/properties';

export const Loginauth = (data) => {
  return async () => {
    try {
      const loginResp = await axios.post(
        config.base_url + `/api/app/learners/login`,
        data
      );
      return loginResp;
    } catch (e) {
      return e.response;
    }
  };
};

export const LoginVerification = (data) => {
  return async () => {
    try {
      const loginResp = await axios.post(
        config.base_url + `/api/app/learners/send-verification-link`,
        data
      );
      return loginResp;
    } catch (e) {
      return e.response;
    }
  };
};
