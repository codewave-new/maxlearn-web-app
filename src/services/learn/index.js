import http from '../../api/api';

// const learnerId = '63738c435aaa893eecc9dbc1';
const learnerId = localStorage.getItem('userid');


export const getHotTopicsOfTheDay = async (pageNum) => {
  try {
    const response = await http.get(
      `/api/app/learn-module/hot-topics/${learnerId}?pageNum=${pageNum}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const getContinueLearning = async (pageNum) => {
    try {
      const response = await http.get(
        `/api/app/learn-module/attempted-topics-list/${learnerId}?pageNum=${pageNum}`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };
  
  export const getLearnByCategory = async (pageNum) => {
    try {
      const response = await http.get(
        `/api/app/learn-module/list-all-category/${learnerId}?pageNum=${pageNum}`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  
  export const getCatrgoryWiseStats = async (categoryId) => {
    try {
      const response = await http.get(
        `/api/app/learn-module/categorywise-stats/${learnerId}/${categoryId}`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  
  
  export const getCatrgoryWiseSubjects = async (categoryId,pageNum) => {
    try {
      const response = await http.get(
        `/api/app/learn-module/list-all-subjects/${learnerId}/${categoryId}?pageNum=${pageNum}`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  
  export const getSubDetilsStats = async (categoryId) => {
    try {
      const response = await http.get(
        `/api/app/learn-module/subjectwise-stats/${learnerId}/${categoryId}`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  export const getSubjWiseTopics = async (categoryId,pageNum) => {
    try {
      const response = await http.get(
        `/api/app/learn-module/list-all-topics/${learnerId}/${categoryId}?pageNum=${pageNum}`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  export const getTopiDetilsStats = async (categoryId) => {
    try {
      const response = await http.get(
        `/api/app/learn-module/topicwise-stats/${learnerId}/${categoryId}`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };
  
  export const getTopicFlashCards = async (categoryId) => {
    try {
      const response = await http.get(
        `/api/app/learn-module/list-all-flashcards/${categoryId}`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  export const getTopicWiseDecks = async (categoryId,pageNum) => {
    try {
      const response = await http.get(
        `/api/app/learn-module/list-all-decks/${categoryId}?pageNum=${pageNum}`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };