import Axios from '../../api/api';

export const todaysChallengesListing = async () => {
  try {
    const response = await Axios.get(
      '/api/app/challenges/todays-challenges/637ca1b5a3e00ec60c6da66b?pageNum=1'
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};
