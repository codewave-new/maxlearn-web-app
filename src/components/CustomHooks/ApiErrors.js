import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { removeAuth } from '../../state/slices/loginSlice.';
import { removeProfile } from '../../state/slices/profileInfo';

const useAuthenticationError = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clearAllData = () => {
    navigate('/login');
    localStorage.clear();
    dispatch(removeAuth());
    dispatch(removeProfile());
    toast.error('session expired');
  };
  return clearAllData;
};

export default useAuthenticationError;
