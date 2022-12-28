import axios from 'axios';

const baseURL = {
  prod: '',
  dev: 'https://yck5wx5ms5.execute-api.us-east-1.amazonaws.com/local',
};

export const learnerId = localStorage.getItem('userid');

const http = axios.create({ baseURL: baseURL?.dev });

http.interceptors.request.use(
  (request) => {
    const applicationId = localStorage.getItem('applicationId');
    const token = localStorage.getItem('TOKEN_NAME');
    request.headers['x-tenant-id'] = applicationId;
    request.headers['x-access-token'] = token;
    return request;
  },
  (err) => Promise.reject(err)
);

export default http;
