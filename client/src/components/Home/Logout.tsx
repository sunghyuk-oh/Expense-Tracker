import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import userActions from '../../store/actions/userActions';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('userToken');
    dispatch(userActions.logoutUser());
    navigate('/');
  });

  return <Fragment></Fragment>;
};

export default Logout;
