import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  isRegistered: false,
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.ON_REGISTER:
      return {
        ...state,
        isRegistered: true,
      };

    case actionTypes.ON_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };

    case actionTypes.ON_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default user;
