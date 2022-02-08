import * as actionTypes from './actionTypes';

export const registerUser = () => {
  return {
    type: actionTypes.ON_REGISTER,
  };
};

export const loginUser = () => {
  return {
    type: actionTypes.ON_LOGIN,
  };
};

export const logoutUser = () => {
  return {
    type: actionTypes.ON_LOGOUT,
  };
};
