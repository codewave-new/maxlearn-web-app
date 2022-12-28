import http from '../../api/api';

export const yourSquadListing = async (learnerId) => {
  try {
    const response = await http.get(
      `/api/app/squad/list?member_id=${learnerId}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const yourSquadDetails = async (squadId) => {
  try {
    const response = await http.post(`/api/app/squad/get-squad-by-id`, {
      squadId,
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const yourSquadChallenges = async (squadId, pageNum) => {
  try {
    const response = await http.get(
      `/api/app/challenges/list-by-squad/${squadId}?pageNum=${pageNum}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const BasicInformation = async (learnerId) => {
  try {
    const response = await http.post(`/api/app/learners/profile`, { learnerId });
    return response.data;
  } catch (error) {
    return error.response;
  }
};
