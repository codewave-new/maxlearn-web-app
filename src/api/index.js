/**
 * Global API file for all API calls
 */

import Axios from './api';

export const callSomeAPI = async () => {
  try {
    const response = await Axios.get('/some_route');
    return response.data;
  } catch (error) {
    return error;
  }
};

export const dummy = async () => {
  const response = await Axios.get('/some_route');
  return response;
};
export const todaysChallengesListing = async () => {
  const response = await Axios.get(
    '/api/app/challenges/todays-challenges/637ca1b5a3e00ec60c6da66b?pageNum=1'
  );
  return response;
};
