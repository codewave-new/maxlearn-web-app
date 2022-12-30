import http from '../../api/api';

// const learnerId = '63738c435aaa893eecc9dbc1';
// const learnerId = localStorage.getItem('userid');


export const getHotTopicsOfTheDay = async (learnerId,pageNum) => {
  try {
    const response = await http.get(
      `/api/app/learn-module/hot-topics/${learnerId}?pageNum=${pageNum}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const getContinueLearning = async (learnerId,pageNum) => {
    try {
      const response = await http.get(
        `/api/app/learn-module/attempted-topics-list/${learnerId}?pageNum=${pageNum}`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };
  
  export const getLearnByCategory = async (learnerId,pageNum) => {
    try {
      const response = await http.get(
        `/api/app/learn-module/list-all-category/${learnerId}?pageNum=${pageNum}`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  
  export const getCatrgoryWiseStats = async (learnerId,categoryId) => {
    try {
      const response = await http.get(
        `/api/app/learn-module/categorywise-stats/${learnerId}/${categoryId}`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  
  
  export const getCatrgoryWiseSubjects = async (learnerId,categoryId,pageNum) => {
    try {
      const response = await http.get(
        `/api/app/learn-module/list-all-subjects/${learnerId}/${categoryId}?pageNum=${pageNum}`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  
  export const getSubDetilsStats = async (learnerId,categoryId) => {
    try {
      const response = await http.get(
        `/api/app/learn-module/subjectwise-stats/${learnerId}/${categoryId}`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  export const getSubjWiseTopics = async (learnerId,categoryId,pageNum) => {
    try {
      const response = await http.get(
        `/api/app/learn-module/list-all-topics/${learnerId}/${categoryId}?pageNum=${pageNum}`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  export const getTopiDetilsStats = async (learnerId,categoryId) => {
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


  
export const startLearingQuizExam = async (payload) => {
  try {
    const response = await http.post(
      `/api/app/learn-module/start-quiz-me`,
      payload
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const getLearnQuizQuestions = async (learnModule,quiz) => {
  try {
    const response = await http.get(`/api/app/learn-module/pick-question/${learnModule}/${quiz}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};


export const getLearnQuizResults = async (learnModule,quiz) => {
  try {
    const response = await http.get(`/api/app/learn-module/score-details/${learnModule}/${quiz}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const submitAnswerLearnQuizExam = async (payload) => {
  try {
    const response = await http.post(
      `/api/app/learn-module/attempt-question`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};


export const getLearnTakingTestNow = async (learnModule,topicId) => {
  try {
    const response = await http.get(`/api/app/learn-module/learners-taking-test-now/${learnModule}/${topicId}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};


export const getLeanrerPointsEarned = async (learnModule) => {
  try {
    const response = await http.get(`/api/app/leaderboard/points-earned/${learnModule}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

