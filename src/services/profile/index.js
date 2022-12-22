import http from '../../api/api';

// export const learnerId = '63738c435aaa893eecc9dbc1';
export const learnerId = localStorage.getItem('userid');

export const yourSquadListing = async () => {
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
