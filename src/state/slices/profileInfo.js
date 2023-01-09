import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  profileDetails: {
    learnerBio: '',
    learnerInfo: {
      'Full name': '',
      'Employee ID': '',
      'Email addess': '',
      'Mobile number': '',
      'Work mail ID': '',
      Department: '',
      'Job Title': '',
    },
    learnerCompany: {
      'Company name': '',
      Country: '',
      State: '',
    },
  },
  score: null,
};

const profileInfoSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    saveProfile: (state, action) => {
      const learnerInfo = action.payload;
      return {
        ...state,
        profileDetails: {
          learnerBio: learnerInfo?.bio,
          learnerInfo: {
            'Full name': learnerInfo?.fullName,
            'Employee ID': learnerInfo?.empId,
            'Email addess': learnerInfo?.emailId,
            'Mobile number': learnerInfo?.mobile,
            'Work mail ID': learnerInfo?.emailId,
            Department: learnerInfo?.departmentInfo?.department,
            'Job Title': learnerInfo?.jobTitleInfo?.jobTitle,
          },
          learnerCompany: {
            'Company name': learnerInfo?.company_name,
            Country: learnerInfo?.country,
            State: learnerInfo?.state,
          },
        },
        score: learnerInfo?.score,
      };
    },
    editProfile: (state, action) => {
      return {
        ...state,
        profileDetails: {
          learnerBio: action?.payload?.bio,
          learnerInfo: {
            ...state.profileDetails.learnerInfo,
            'Mobile number': action?.payload?.mobile,
          },
          learnerCompany: { ...state.profileDetails.learnerCompany },
        },
      };
    },
    startLoading: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    stopLoading: (state, action) => {
      return {
        ...state,
        loading: false,
      };
    },
    removeProfile: () => {
      return initialState;
    },
  },
});

export const {
  saveProfile,
  startLoading,
  stopLoading,
  editProfile,
  removeProfile,
} = profileInfoSlice.actions;
export default profileInfoSlice.reducer;
