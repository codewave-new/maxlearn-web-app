import axios from 'axios';

const baseURL = {
  prod: '',
  dev: 'https://yck5wx5ms5.execute-api.us-east-1.amazonaws.com/local',
};

export const learnerId = localStorage.getItem('userid');
const applicationId = localStorage.getItem('applicationId');

const createAxios = () => {
  // if(process.env.REACT_APP_STAGE='build for Prod'){
  //   const client=axios.create({
  //     baseURL:baseURL.prod,
  //     headers:{
  //       'x-tenant-id':'af82327f-eedf-4528-ac79-dd155be3efe5',
  //     }
  //   });
  //   return client;
  // }else {
  const client = axios.create({
    baseURL: baseURL.dev,
    headers: {
      'x-tenant-id': localStorage.getItem('applicationId'),
    },
  });
  return client;
  // }
};

const http = createAxios();

export default http;
