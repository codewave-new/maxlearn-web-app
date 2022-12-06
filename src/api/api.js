import axios from 'axios';

const baseURL =
  // process.env.NODE_ENV === 'production'
  //   ? 'https://api_base_url.com'
  //   : 'http://localhost:4000';
  process.env.NODE_ENV === 'production'
    ? 'https://api_base_url.com'
    : 'https://hl9ujnrc22.execute-api.us-east-1.amazonaws.com/local';

export default axios.create({
  baseURL,
  headers:{
    'x-tenant-id':'af82327f-eedf-4528-ac79-dd155be3efe5',
  }
  // withCredentials: true,
  // headers: { token: 'Bearer token' },
});
