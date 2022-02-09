import * as actionTypes from './actionTypes';

const registerUser = () => {
  return {
    type: actionTypes.ON_REGISTER,
  };
};

const loginUser = () => {
  return {
    type: actionTypes.ON_LOGIN,
  };
};

const logoutUser = () => {
  return {
    type: actionTypes.ON_LOGOUT,
  };
};

const allUserActions = { registerUser, loginUser, logoutUser };

export default allUserActions;
